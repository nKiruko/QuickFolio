import Image from "next/image";
import { useState } from "react";



type MyProps = {  
   image: string,
   title: string,
   text: string,
   smalltext:string,
   left?: boolean,
}  

export default function Event(props: MyProps) {   

   const [text, setText] = useState(false)
   function buttonClick() {
      setText(!text)
   }

   return (         
      <div className="mt-16 flex flex-col lg:flex-row hover:border hover:border-dinocream hover:rounded-3xl hover:cursor-pointer">
         <div className="relative h-52 sm:h-80 lg:h-96 xl:h-[28rem] lg:w-1/2">
         <div  className={`lg:basis-auto ${props.left ? "lg:order-first" : "lg:order-last"}`}>
               <Image src={props.image} 
                alt={props.title} 
                className="rounded-[25px] object-cover"
                layout="fill"
                />
         </div>
         </div>
         <div className={`lg:basis-3/4 md:w-5/6  mt-5 ${props.left ? "lg:order-last lg:pl-10" : "lg:order-first lg:pr-10"}`}>
            <h1 className="text-left font-heading text-3xl sm:text-4xl pb-5 ">{props.title}</h1>
            <p id="smalltext" className={`font-sans text-sm sm:text-md pb-5 text-justify md:hidden ${text ? "hidden" : "md:block"}`}>{props.smalltext}</p>
            <p id="normaltext"  className={`font-sans text-sm sm:text-md pb-5 text-justify md:block ${text ? "md:block" : "hidden"}`}>{props.text}</p>
         </div>
              <button onClick={buttonClick} className="font-heading md:hidden text-lg text-center sm:text-xl rounded-full border-2 border-dinocream px-5 py-1 hover:border-tmorange">Learn More</button>
      </div> 
   ); 
}