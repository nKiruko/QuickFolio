import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'
import homeImage from '../../public/images/DinoBeige.png'
import NavBar from "../components/NavBar";

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
