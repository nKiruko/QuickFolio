import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDir = path.join(process.cwd(), "public/projects");

export type ProjectData = {
  filter: any;
  path: string;
  image: string;
  title: string;
  date?: string;
  rawDate?: number;
  position?: boolean;
  summary: string;
  content?: string;
  featured: boolean;
};

export const getAllProjects = () => {
  const projectNames = fs.readdirSync(projectsDir);
  const projectNamesFiltered = projectNames.filter(projectName => !projectName.startsWith('.'));

  return projectNamesFiltered.map((projectName) => {
    return {
      params: {
        project: projectName
      }
    }
  });
};

export const getProjectData = async (name: String | string[]): Promise<ProjectData> => {
  const fileContents = fs.readFileSync(path.join(projectsDir, `${name}/README.md`),"utf8");
  // Use matter to split the metadata from the content in the .md file
  const matterConversed = matter(fileContents);
  const htmlContent = await remark().use(html, { sanitize: false }).process(matterConversed.content);

  //split date into year and month and day and create an epoch time of this date
  let splitDate = matterConversed.data.date.split("-");
  matterConversed.data.rawDate = new Date(parseInt(splitDate[2]),parseInt(splitDate[1]),parseInt(splitDate[0])).getTime() / 1000

  return <ProjectData>{
    ...matterConversed.data,
    content: htmlContent.toString(),
  };
};

export const getAllProjectsData = async (): Promise<Array<ProjectData>> => {
  const projectNames = fs.readdirSync(projectsDir);
  const projectNamesFiltered = projectNames.filter(projectName => !projectName.startsWith('.'));
  let allProjectsData = projectNamesFiltered.map(
    async (projectName): Promise<ProjectData> => {
      return <ProjectData>(
        await getProjectData(projectName)
      );
    }
  );

  return await Promise.all(allProjectsData);
};

export const getAllProjectDataSorted = async (): Promise<
  Array<ProjectData>
> => {
  return (await getAllProjectsData()).sort((a, b) => {
    if ((a.rawDate || new Date().getTime()) < (b.rawDate || new Date().getTime()))
      return 1;
    else return -1;
  });
};
