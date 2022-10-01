import Image from "next/image";


type MyProps = {  
   image: string,
   title: string,
   text: string,
   left?: boolean,
}  

export default function Event(props: MyProps) {     
   return (         
      <div className="mt-16 flex flex-row">
         <div  className={`basis-auto ${props.left ? "order-first" : "order-last"}`}>
            <Image className="rounded-[25px]"
               src={props.image}
               alt={props.title}
               width={500}
               height={300}
            />
         </div>
         <div className={`basis-3/4 ${props.left ? "order-last" : "order-first"}`}>
            <h1 className="font-heading text-4xl px-5 pb-5 ">{props.title}</h1>
            <p className="font-sans text-sm px-5 pb-5 ">{props.text}</p>
         </div>

      </div> 
   ); 
}