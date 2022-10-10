import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { ProjectDataProps } from "../../pages/projects/[project]";

const Project: FunctionComponent<ProjectDataProps> = ({ projectData }) => {
  const router = useRouter();
  return (
    <div className="mt-16 hover:cursor-pointer">
      <div className="hover:underline hover:underline-offset-8 hover:decoration-tmorange dark:hover:decoration-coffeegreen">
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
        <div className="font-heading text-3xl sm:text-4xl mt-5">{projectData.title}</div>
        </div>
        <div className="font-sans xl:w-11/12 md:w-5/6 mt-5 text-md text-justify">{projectData.summary}</div>
    </div>
  );
};

export default Project;