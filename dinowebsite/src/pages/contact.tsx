import type { NextPage } from "next";
import Head from "next/head";
import Coach from "../components/contact/Coach";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";

const Contact: NextPage = () => {
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
            <Form />
            <div className="lg:ml-24 lg:pl-10 lg:border-l-2 border-dinoblack">
              <h2 className="text-2xl text-tmblue mb-5 mt-24 lg:mt-0 font-heading">
                Contact
              </h2>
              <ContactInfo />
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
