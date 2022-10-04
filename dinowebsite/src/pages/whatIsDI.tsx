import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";
import Image from "next/image";

const whatIsDI: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dinowebsite - What is DI</title>
        <meta name="description" content="Dinowebsite" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dinocream">
        <div className="mx-20">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5">About digital innovation</h1>
          <h2 className="font-heading pt-9 pb-3 text-2xl">What is DI ?</h2>
          <p className="font-sans text-md sm:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti deserunt eum quas nesciunt explicabo tempore, vero officia incidunt est voluptatem, autem quibusdam quasi quos cum quo id ipsum in?
          </p>
        </div>
          <div className="mt-28 md:mt-40 lg:mt-52 xl:mt-60 bg-[linear-gradient(-9deg,_#191919_50%,_#f6f2e7_50%)]">
            <div className="bg-tmorange h-20 md:h-32 lg:h-40 xl:h-60 -rotate-9 scale-125 shadow-glow">
            </div>
          </div>
        <div className="bg-dinoblack text-dinocream pb-16">
          <div className="">

            <h1 className="font-heading text-5xl pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-44 lg:pb-20 xl:pt-64 xl:pb-24 text-center">Gallery</h1>

            <div className="grid-container grid grid-cols-12 gap-7 xl:gap-10 lg:gap-8">
              <div className="col-span-12 md:col-span-5 lg:col-span-3 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-4 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-5 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>

              <div className="col-span-12 md:col-span-5 lg:col-span-5 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-3 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>

              <div className="col-span-12 md:col-span-7 lg:col-span-3 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>
              <div className="col-span-12 md:col-span-12 lg:col-span-5 relative xl:h-56 lg:h-48 h-48"><Image src={"/images/ThomasMore.png"} className="object-cover" layout="fill" /> </div>

            </div>

          </div>
        </div>
        <div className="mb-[7.5rem]">
          <div className="bg-tmgrey mb-72 absolute inset-x-0 h-60 rotate-9 scale-125 shadow-glow "></div>
          <div className="bg-tmorange mb-[9.5rem] absolute inset-x-0 h-60 -rotate-9 scale-125 shadow-glow "></div>
        </div>
        
      </main>
    </div>
  );
};

export default whatIsDI;