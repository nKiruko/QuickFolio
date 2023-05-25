import type { NextPage } from "next";
import Head from "next/head";
import Coach from "../components/contact/Coach";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - Contact</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/Favicon_di.png" />
      </Head>
      <main className="text-dinoblack min-h-screen">
        <div className="mx-20">
          <div className="">
            <h2 className="font-heading text-4xl mb-10">Contact</h2>
            <div className="bg-dinoblack w-full h-96 mx-auto grid grid-cols-2 rounded-2xl">
              <div className="relative">
                <Image
                  src={"images/logo.svg"}
                  alt="dino"
                  layout="fill"
                  className=""
                />
              </div>
              <div className="my-auto">
                <p className="text-white pb-10">Siebe Camerman</p>
                <p className="text-white">R0889616@student.thomasmore.be</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
