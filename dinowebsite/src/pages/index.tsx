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
      <div>
        <div>
          <div>
            <NavBar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
