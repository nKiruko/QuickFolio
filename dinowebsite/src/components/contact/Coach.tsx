import Image from "next/image";

type MyProps = {
  image: string;
  name: string;
  text: string;
};

export default function Coach(props: MyProps) {
  return (
    <div className="flex basis-1/2 justify-center flex-col md:flex-row">
      <Image
        src={props.image}
        alt="dino"
        width={200}
        height={200}
        className="rounded-lg md:rounded-r-none md:rounded-b rounded-b-none"
      />
      <div className="lg:w-2/4 xl:w-1/4 border-2 border-dinoblack self-stretch rounded-lg md:rounded-l-none md:rounded-t rounded-t-none p-5">
        <p className="font-sans text-2xl">{props.name}</p>
        <p className="mt-3">{props.text}</p>
      </div>
    </div>
  );
}
