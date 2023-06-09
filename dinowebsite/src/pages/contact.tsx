import type { NextPage } from "next";
import Head from "next/head";
import Coach from "../components/contact/Coach";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Contact</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <main className="text-dinoblack 3xl:min-h-screen xl:min-h-[70vh] min-h-screen">
        <div className="mx-20">
          <div className="">
            <h2 className="font-heading text-4xl mb-10">Contact</h2>
            <div className="bg-dinoblack w-full h-96 mx-auto grid grid-cols-2 rounded-2xl">
              <div className="relative h-72 w-72 m-auto">
                <Image
                  src={"images/logo.png"}
                  alt="dino"
                  layout="fill"
                  className=""
                />
              </div>
              <div className="my-auto">
                <p className="text-white pb-7">Nick Bulen</p>
                <p className="text-white pb-16">R0883338@student.thomasmore.be</p>
                <div className="grid grid-cols-4">
                  <a href="https://github.com/nKiruko" target="_blank" rel="noreferrer"><Icon className="w-10 h-10 text-white" icon="akar-icons:github-fill"/></a>
                  <a href="https://www.linkedin.com/in/nick-bulen-8613ab252/" target="_blank" rel="noreferrer"><Icon className="w-10 h-10 text-white" icon="akar-icons:linkedin-fill"/></a>
                  <a href="https://www.taskade.com/d/kt2SCkJLsVb7Z6HF?from=shared" target="_blank" rel="noreferrer"><Icon className="w-10 h-10 text-white" icon="icons8:finish-flag"></Icon></a>
                  <a href="https://twitter.com/NickBulen" target="_blank" rel="noreferrer"><Icon className="w-10 h-10 text-white" icon="akar-icons:twitter-fill"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
