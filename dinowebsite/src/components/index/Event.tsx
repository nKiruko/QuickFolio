import Image from "next/image";
import { FunctionComponent } from "react";
import { EventDataProps } from "../../pages/events/[event]";

const Event: FunctionComponent<EventDataProps> = ({ eventData, left }) => {
  return (
    <div className="mt-16 flex flex-col lg:flex-row  hover:cursor-pointer ">
      <div className="relative h-52 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] 3xl:h-[40rem] lg:w-1/2">
        <div
          className={`lg:basis-auto ${
            left ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <Image
            src={eventData.image}
            alt={eventData.title}
            className="rounded-[25px] object-cover"
            layout="fill"
          />
        </div>
      </div>
      <div
        className={`lg:basis-3/4 md:w-5/6 mt-5 first-line:hover:underline first-line:hover:underline-offset-8 first-line:hover:decoration-tmorange dark:first-line:hover:decoration-coffeegreen ${
          left ? "lg:order-last lg:pl-10" : "lg:order-first lg:pr-10"
        }`}
      >
        <h1 className="text-left font-heading text-3xl sm:text-4xl pb-5">
          {eventData.title}
        </h1>
        <p
          id="smalltext"
          className="font-sans text-sm sm:text-md pb-5 text-justify block md:hidden"
        >
          {eventData.summary.substring(0, 120)}...
        </p>
        <p
          id="normaltext"
          className="font-sans text-sm sm:text-md pb-5 text-justify hidden md:block"
        >
          {eventData.summary}
        </p>
      </div>
    </div>
  );
};

export default Event;