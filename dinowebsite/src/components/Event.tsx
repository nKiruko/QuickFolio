import Image from "next/image";



type MyProps = {  
   image: string,
   title: string,
   text: string,
   smalltext:string,
   left?: boolean,
}  

export default function Event(props: MyProps) {   
   return (         
      <div className="mt-16 flex flex-col lg:flex-row">
         <div  className={`lg:basis-auto ${props.left ? "lg:order-first" : "lg:order-last"}`}>
            <Image className="rounded-[25px]"
               src={props.image}
               alt={props.title}
               width={500}
               height={300}
            />
         </div>
         <div className={`md:basis-3/4 lg:basis-3/4  mt-5 ${props.left ? "lg:order-last lg:pl-10" : "lg:order-first lg:pr-10"}`}>
            <h1 className="text-left font-heading text-3xl sm:text-4xl pb-5 ">{props.title}</h1>
            <p className="font-sans text-sm sm:text-md pb-5 text-justify md:hidden">{props.smalltext}</p>
            <p className="font-sans text-sm sm:text-md pb-5 text-justify hidden md:block">{props.text}</p>
         </div>
              <button className="font-heading md:hidden text-lg text-center sm:text-xl rounded-full border-2 border-dinocream px-5 py-1 hover:border-tmorange">Learn More</button>
      </div> 
   ); 
}