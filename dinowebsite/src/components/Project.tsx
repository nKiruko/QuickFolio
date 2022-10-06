import Image from "next/image";
import { useRouter } from "next/router";
import { features } from "process";
import { FunctionComponent } from "react";
import { ProjectData } from "../modules/projects";
import { ProjectDataProps } from "../pages/projects/[project]";

const Project: FunctionComponent<ProjectDataProps> = ({ projectData }) => {
  const router = useRouter()
  return (
    <div className="mt-16 hover:cursor-pointer ">
      <div className={`relative h-52 sm:h-80 lg:h-96 ${projectData.featured ? router.pathname !== "/" ? "xl:h-[40rem]" : "xl:h-[28rem]" : "xl:h-[28rem]" }`}>
        <Image
          src={projectData.image}
          alt={projectData.title}
          className="rounded-[25px] object-cover"
          layout="fill"
        />
      </div>
      <div className="first-line:hover:underline first-line:hover:underline-offset-8 first-line:hover:decoration-tmorange">
        <div className="font-heading text-3xl sm:text-4xl mt-5">
          {projectData.title}
        </div>
        <div className="font-sans xl:w-11/12 md:w-5/6 mt-5 text-sm sm:text-md text-justify">
          {projectData.summary}
        </div>
      </div>
    </div>
  );
};

export default Project;
