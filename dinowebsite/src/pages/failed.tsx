import type { NextPage } from "next";
import Head from "next/head";

const failed: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - Failed</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/Favicon_di.png" />
      </Head>
      <main className="text-dinoblack">
        <div className="mx-20 3xl:pb-24 pb-60">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5 ">
            Failed
          </h1>
        </div>
      </main>
    </div>
  );
};

export default failed;