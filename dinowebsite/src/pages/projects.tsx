import type { NextPage } from "next";
import Head from "next/head";
import Project from "../components/Project";

const Projects: NextPage = () => {
   return (
     <div>
       <Head>
         <title>Dinowebsite | Projects</title>
         <meta name="description" content="Dinowebsite" />
         <meta name="robots" content="noindex" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <main>
       <div className="bg-dinocream text-dinoblack">
            <div className="mx-20">
              <h1 className="font-heading text-5xl pt-52 pb-5">Recent projects</h1>

              <div className="flex flex-col md:flex-row gap-6">
                <Project image="/../public/images/ThomasMore.png" title="Title" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorum harum aspernatur voluptates, ipsam mollitia laudantium? Amet fugiat perferendis, 
                                      animi atque error maiores enim a cum magnam voluptatem. Repellat, vero!"/>
                <Project image="/../public/images/ThomasMore.png" title="Title" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorum harum aspernatur voluptates, ipsam mollitia laudantium? Amet fugiat perferendis, 
                                      animi atque error maiores enim a cum magnam voluptatem. Repellat, vero!"/>
                <Project image="/../public/images/ThomasMore.png" title="Title" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorum harum aspernatur voluptates, ipsam mollitia laudantium? Amet fugiat perferendis, 
                                      animi atque error maiores enim a cum magnam voluptatem. Repellat, vero!"/>
              </div>
            </div>
          </div>
       </main>
       </div>
  );
};

export default Projects;