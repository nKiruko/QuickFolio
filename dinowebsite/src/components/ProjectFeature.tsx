import Image from "next/image";

type Myprops = {
	// dingen die je meerdere keren gebruikt
    image: string,
	title: string,
	text: string,
	positie?: boolean //optionele parameter
}

export default function Project(props: Myprops){
	return(
		<div className="mt-16">
            <div className="basis-1/2 relative h-52 sm:h-80 lg:h-96 xl:h-[40rem] w-auto">
                <Image src={props.image} 
                alt={props.title} 
                className="rounded-[25px] object-cover"
                layout="fill"
                />
            </div>
            <div className="font-heading text-3xl sm:text-4xl mt-5 basis-1/2">
                {props.title}
            </div>
            <div className="font-sans xl:w-11/12 text-sm sm:text-md basis-1/2 text-justify">
                {props.text}
            </div>
        </div>
	);
}