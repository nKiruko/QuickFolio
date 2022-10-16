import Image from "next/image";
import { FunctionComponent } from "react";
import { ProjectDataProps } from "../../pages/projects/[project]";

const Project: FunctionComponent<ProjectDataProps> = ({ projectData }) => {
  return (
    <div className="mt-16 hover:cursor-pointer">
      <div className="hover:underline hover:underline-offset-4 hover:decoration-tmorange dark:hover:decoration-coffeecream">
        <div className={`relative h-52 sm:h-60 md:h-72 lg:h-[19rem] xl:h-96`}>
          <Image
            src={projectData.image}
            alt={projectData.title}
            className="rounded-[25px]"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="font-heading text-3xl sm:text-4xl mt-5">
          {projectData.title}
        </div>
      </div>
      <div className="font-sans xl:w-11/12 md:w-5/6 text-xs opacity-75 text-justify italic text-tmblue dark:text-coffeegreen">{projectData.date}</div>
      <div className="font-sans xl:w-11/12 md:w-5/6 mt-4 text-md text-justify">
        {projectData.summary}
      </div>
    </div>
  );
};

export default Project;
