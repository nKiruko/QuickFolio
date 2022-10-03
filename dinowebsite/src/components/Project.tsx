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
		<div className="mt-16 flex flex-col">
            <div>
                <Image src={props.image} alt={props.title} className="rounded-[25px]" width={500} height={300} />
            </div>
            <div className="font-heading text-3xl sm:text-4xl mt-5">
                {props.title}
            </div>
            <div className="font-sans md:w-5/6 text-sm sm:text-md text-justify">
                {props.text}
            </div>
        </div>
	);
}