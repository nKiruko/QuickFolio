import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const Contact: NextPage = () => {
  const inputFileRef = useRef(null);
  const openFiles = () => {
    if (inputFileRef && inputFileRef.current) {
      (inputFileRef.current as never as HTMLInputElement).click();
    }
  };
  
  return (
    <div>
      <Head>
        <title>Dinowebsite - Contact</title>
        <meta name="description" content="Dinowebsite" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="container mx-auto">
        <h1>Questions or proposals? Fill in the form below!</h1>
        <form action="" className="my-5 w-1/3">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              required
              className="valid:border-green-500 invalid:border-red-500 rounded bg-gray-300"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              required
              className="valid:border-green-500 invalid:border-red-500 rounded"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="valid:border-green-500 invalid:border-red-500 w-full rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="valid:border-green-500 invalid:border-red-500 w-full rounded"
          />
          <div
            className="flex gap-3 items-center my-3 cursor-pointer"
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
            className="bg-black text-white px-24 py-1 rounded-md border-2 border-cyan-600"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
