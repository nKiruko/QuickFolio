import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function Form() {
  const inputFileRef = useRef(null);
  const openFiles = () => {
    if (inputFileRef && inputFileRef.current) {
      (inputFileRef.current as never as HTMLInputElement).click();
    }
  };
  return (
    <form action="" className="my-5 lg:w-4/6">
      <div className="flex flex-col lg:flex-row gap-5 my-3 w-full">
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          required
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey px-2 py-1 w-full lg:w-2/4"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          required
          className="valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey px-2 py-1 w-full lg:w-2/4"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="valid:border-green-500 invalid:border-red-500 outline-tmblue w-full rounded bg-dinogrey px-2 py-1"
      />
      <textarea
        name="message"
        placeholder="Message.."
        required
        className="valid:border-green-500 invalid:border-red-500 outline-tmorange w-full rounded bg-dinogrey px-2 py-1 my-3"
      />
      <div
        className="flex gap-3 items-center mb-3 cursor-pointer"
        onClick={() => openFiles()}
      >
        <input type="file" ref={inputFileRef} className="hidden" />
        <div className="p-2 rounded bg-gray-300 text-gray-500">
          <Icon icon="ant-design:plus-outlined" className="text-2xl " />
        </div>
        <p>Add files</p>
      </div>
      <button
        type="submit"
        className="bg-black text-white px-24 py-1 rounded-md border-2 border-tmblue "
      >
        Send Message
      </button>
    </form>
  );
}
