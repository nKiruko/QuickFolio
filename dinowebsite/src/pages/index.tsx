import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dinowebsite</title>
        <meta name="description" content="Dinowebsite" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>

      <main className="bg-dinocream overflow-hidden">
        <div className="h-full">
          <div className="h-full mx5 w-2/6 ml-60">
            <h1 className="font-heading text-4xl pt-72 pb-5">Build shit, break shit, but ultimately, 
            learn from the experiences!</h1>
            <a href="#" className="font-heading text-xl rounded-full border-2 border-black px-5 py-1">Learn More</a>
          </div>
          <div className="mt-96">
          <div className="bg-tmblue h-20 md:h-52 xl:h-96 rotate-9 scale-125 shadow-test"></div>
          </div>
          <div className="h-screen">
            <p>rat</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
