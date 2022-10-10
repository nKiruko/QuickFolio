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
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="bg-dinocream 3xl:h-screen">
        <div className="mx-20">
          <h1 className="text-4xl font-heading">
            Questions or proposals? Fill in the form below!
          </h1>
          <div className="flex flex-col lg:flex-row">
            <Form />
            <ContactInfo />
          </div>
          <div className="py-24">
            <h2 className="font-heading text-4xl mb-10">Coaches</h2>
            <div className="flex flex-wrap flex-col gap-y-10 lg:flex-row justify-center">
              <Coach
                image="/images/jochen.png"
                name="Jochen Mariën"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, accusamus."
              />
              <Coach
                image="/images/jochen.png"
                name="Kathleen Renders"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, accusamus."
              />
              <Coach
                image="/images/jochen.png"
                name="Bram Heyns"
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
