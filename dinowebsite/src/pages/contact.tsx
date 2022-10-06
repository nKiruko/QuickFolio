import type { NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import Coach from "../components/contact/Coach";

const Contact: NextPage = () => {
  const inputFileRef = useRef(null);
  const openFiles = () => {
    if (inputFileRef && inputFileRef.current) {
      (inputFileRef.current as never as HTMLInputElement).click();
    }
  };
  const [option, setOption] = useState(0)

  const updateValue = (e: any) => {
    setOption(e.target.checked)
  }
  return (
    <div>
      <Head>
        <title>Digital Innovation - Contact</title>
        <meta name="description" content="Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="bg-dinocream">
        <div className="mx-20">
          <h1 className="text-4xl font-heading">
            Questions or proposals? Fill in the form below!
          </h1>
          <div className="flex flex-col lg:flex-row">
            <form action="" className="my-5 lg:w-4/6">
              <div className="flex flex-col lg:flex-row gap-3 my-3 w-full">
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
                className="valid:border-green-500 invalid:border-red-500 outline-tmblue w-full rounded bg-dinogrey px-2 py-1 mb-3"
              />        
              <div className="flex">
                <span className="mr-3">Question</span>
                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="default-toggle" className="sr-only peer" onChange={updateValue}></input>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3">Proposal</span>
                </label>
              </div>
              <div className={`${option ? "block" : "hidden"}`}>
                <input
                    type="text"
                    name="companyname"
                    placeholder="Company name"
                    required
                    className="valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey px-2 py-1 w-full mt-3 lg:w-2/4"
                  />
              </div>
              <textarea
                name="message"
                placeholder="Message.."
                required
                className="valid:border-green-500 invalid:border-red-500 outline-tmblue w-full rounded bg-dinogrey px-2 py-1 my-3"
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
            <div className="lg:ml-24 lg:pl-10 lg:border-l-2 border-dinoblack">
              <h2 className="text-2xl text-tmblue mb-5 mt-24 lg:mt-0 font-heading">
                Contact
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <p>TM address</p>
                  <a
                    href="https://goo.gl/maps/1bFNMyqUGEV6orjx9"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-tmorange"
                  >
                    Kleinhoefstraat 4, 2440 Geel
                  </a>
                </div>
                <div>
                  <p>TM mail</p>
                  <a
                    href="mailto:info.geel@thomasmore.be"
                    className="underline text-tmorange"
                  >
                    info.geel@thomasmore.be
                  </a>
                </div>
                <div>
                  <p>TM website</p>
                  <a
                    href="https://www.thomasmore.be/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-tmorange"
                  >
                    Thomas More
                  </a>
                </div>
                <div>
                  <p>TM phone number</p>
                  <a href="tel:+3214562310" className="underline text-tmorange">
                    +32 14 56 23 10
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-24">
            <h2 className="font-heading text-4xl mb-10">Coaches</h2>
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row">
              <Coach
                image="/images/jochen.png"
                name="Jochen"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, accusamus."
              />
              <Coach
                image="/images/jochen.png"
                name="Jochen"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, accusamus."
              />
            </div>
            <div className="flex gap-10 lg:gap-0 lg:flex-row lg:justify-around mb-10 mt-10 w-auto">
              <Coach
                image="/images/jochen.png"
                name="Jochen"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, accusamus."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
