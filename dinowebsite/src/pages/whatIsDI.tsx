import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";
import Image from "next/image";

const whatIsDI: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dinowebsite | What is DI</title>
        <meta name="description" content="Dinowebsite" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dinocream overflow-hidden">
        <div className="h-full pt-14 ml-10">
          <h1 className="font-heading font-bold text-4xl">About digital innovation</h1>
          <h2 className="font-heading pt-9 pb-3 font-bold text-2xl">What is DI ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          </p>
        </div>
        <div className="mt-72 bg-[linear-gradient(-9deg,_#191919_50%,_#f6f2e7_50%)]">
            <div className="bg-tmorange h-20 md:h-52 xl:h-96 -rotate-9 scale-125 shadow-glow">
            </div>
          </div>
        <div className="bg-dinoblack text-dinocream">
          <div className="">
            <h1 className="font-heading text-5xl pt-72 pb-20 text-center">Gallery</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <Image src={"/images/placeholder.jpg"} width={400} height={200} /> 
                <Image src={"/images/placeholder.jpg"} width={500} height={200} />
                <Image src={"/images/placeholder.jpg"} width={500} height={200} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 pt-10">
                <Image src={"/images/placeholder.jpg"} width={500} height={200} /> 
                <Image src={"/images/placeholder.jpg"} width={500} height={200} />
                <Image src={"/images/placeholder.jpg"} width={500} height={200} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 pt-10 ">
                <Image src={"/images/placeholder.jpg"} width={500} height={200} /> 
                <Image src={"/images/placeholder.jpg"} width={500} height={200} />
                <Image src={"/images/placeholder.jpg"} width={500} height={200} />
            </div>
          </div>
        </div>
        
        <div className="mt-96">poezeke</div>
      </main>
    </div>
  );
};

export default whatIsDI;
