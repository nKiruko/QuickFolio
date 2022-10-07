import Image from "next/image";

type MyProps = {
  image: string;
  name: string;
  text: string;
};

export default function Coach(props: MyProps) {
  return (
    <div className="flex gap-10 justify-center flex-col md:flex-row">
      <Image
        src={props.image}
        alt="dino"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <div className="lg:w-1/4 self-center">
        <p className="font-sans text-2xl">{props.name}</p>
        <p className="mt-3">{props.text}</p>
      </div>
    </div>
  );
}
