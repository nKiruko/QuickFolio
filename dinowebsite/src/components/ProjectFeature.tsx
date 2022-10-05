import Image from "next/image";
import { ProjectData } from "../modules/projects";

export default function Project(props: ProjectData) {
  return (
    <div className="mt-16 hover:cursor-pointer">
      <div className="basis-1/2 relative h-52 sm:h-80 lg:h-96 xl:h-[40rem] w-auto">
        <Image
          src={props.image}
          alt={props.title}
          className="rounded-[25px] object-cover"
          layout="fill"
        />
      </div>
      <div className="first-line:hover:underline first-line:hover:underline-offset-8 first-line:hover:decoration-tmorange">
        <div className="font-heading text-3xl sm:text-4xl mt-5 basis-1/2">
          {props.title}
        </div>
        <div className="font-sans xl:w-11/12 mt-5 text-sm sm:text-md basis-1/2 text-justify">
          {props.summary}
        </div>
      </div>
    </div>
  );
}
