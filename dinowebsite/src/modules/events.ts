import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const eventsDir = path.join(process.cwd(), "public/events");

export type EventData = {
  path: string;
  image: string;
  title: string;
  date?: number;
  position?: boolean;
  summary: string;
  content: string;
};

export const getAllEvents = () => {
  const eventNames = fs.readdirSync(eventsDir);
  const eventNamesFiltered = eventNames.filter(eventName => !eventName.startsWith('.'))

  return eventNamesFiltered.map((eventName) => {
    return {
      params: {
        event: eventName,
      },
    };
  });
};

export const getEventData = async (name: string | string[]): Promise<EventData> => {
  const fileContents = fs.readFileSync(path.join(eventsDir, `${name}/README.md`),"utf8");
  // Use matter to split the metadata from the content in the .md file
  const matterConversed = matter(fileContents);
  const htmlContent = await remark().use(html).process(matterConversed.content);

  return <EventData>{
    ...matterConversed.data,
    content: htmlContent.toString(),
  };
};

export const getAllEventsData = async (): Promise<Array<EventData>> => {
  const eventNames = fs.readdirSync(eventsDir);
  const eventNamesFiltered = eventNames.filter(eventName => !eventName.startsWith('.'))
  let allEventsData = eventNamesFiltered.map(async (eventName): Promise<EventData> => {
    return <EventData>await getEventData(eventName.replace(/\.md$/, ""));
  });

  return await Promise.all(allEventsData);
};

export const getAllEventDataSorted = async (): Promise<Array<EventData>> => {
  return (await getAllEventsData()).sort((a, b) => {
    if ((a.date || new Date().getTime()) < (b.date || new Date().getTime()))
      return 1;
    else return -1;
  });
};
