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
            <div className="basis-1/2">
                <Image src={props.image} alt={props.title} className="rounded-[25px]"
                width={700} 
                height={500} />
            </div>
            <div className="font-heading text-3xl sm:text-4xl mt-5 basis-1/2">
                {props.title}
            </div>
            <div className="font-sans text-sm sm:text-md basis-1/2">
                {props.text}
            </div>
        </div>
	);
}