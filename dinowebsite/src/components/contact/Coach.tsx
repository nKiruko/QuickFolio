import Image from "next/image";

type MyProps = {
    image: string,
    name: string,
    text: string,
}

export default function Coach(props: MyProps) {
  return (
    <div className="flex gap-10">
      <Image
        src={props.image}
        alt="dino"
        width={200}
        height={200}
      />
      <div>
        <p>{props.name}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
