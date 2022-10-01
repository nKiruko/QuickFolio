import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";
import Image from 'next/image'
import Event from "../components/Event";

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

      <main className=" overflow-hidden">
        <div className="bg-dinocream">
          <div className="w-2/6 ml-60">
            <h1 className="font-heading text-4xl pt-52 pb-5 text-dinoblack">Build shit, break shit, but ultimately,
              learn from the experiences!</h1>
            <a href="#"
              className="font-heading text-xl rounded-full border-2 border-dinoblack px-5 py-1  hover:border-tmorange">Learn
              More</a>
          </div>

          <div className="mt-96 bg-[linear-gradient(9deg,_#191919_50%,_#f6f2e7_50%)]">
            <div className="bg-tmblue h-20 md:h-52 xl:h-96 rotate-9 scale-125 shadow-glow">
            </div>
          </div>

          <div className="h-screen bg-dinoblack text-dinocream">
            <div className="mx-20">
              <h1 className="font-heading text-5xl pt-32 pb-5">Upcoming events</h1>


              <Event image="/../public/images/ThomasMore.png" title="Title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore iste earum hic consequatur ullam, iusto, accusamus quae assumenda, aliquam impedit dolore nam? Assumenda ad similique dolores ex, rem porro.
                      Corrupti voluptatum cum nam, minus a adipisci voluptates porro optio harum excepturi quae ad dicta placeat eum suscipit, fugiat culpa? Aliquam ut laborum ipsa ullam similique dolor voluptates voluptatum sit?
                      Neque a, provident ab ut libero, doloremque dicta aliquam quos veniam tenetur quas id ipsa reiciendis ratione fugit beatae dolor, et perferendis hic deserunt error animi harum. Aliquid, nostrum porro?
                      Amet possimus laborum magnam quibusdam doloribus odit, esse adipisci assumenda officiis rem harum, voluptas eaque alias libero iusto dicta molestiae? Molestiae laboriosam culpa ipsum, explicabo soluta eius quaerat quasi harum.
                      Ab, praesentium illum. Delectus consequatur asperiores eligendi atque, nam voluptas quae neque voluptatibus ut quam dolore earum corporis, quo vero dolor deleniti inventore aperiam? Maxime nihil illo tempore soluta quam." left={true}/>
                      
              <Event image="/../public/images/ThomasMore.png" title="Title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore iste earum hic consequatur ullam, iusto, accusamus quae assumenda, aliquam impedit dolore nam? Assumenda ad similique dolores ex, rem porro.
                      Corrupti voluptatum cum nam, minus a adipisci voluptates porro optio harum excepturi quae ad dicta placeat eum suscipit, fugiat culpa? Aliquam ut laborum ipsa ullam similique dolor voluptates voluptatum sit?
                      Neque a, provident ab ut libero, doloremque dicta aliquam quos veniam tenetur quas id ipsa reiciendis ratione fugit beatae dolor, et perferendis hic deserunt error animi harum. Aliquid, nostrum porro?
                      Amet possimus laborum magnam quibusdam doloribus odit, esse adipisci assumenda officiis rem harum, voluptas eaque alias libero iusto dicta molestiae? Molestiae laboriosam culpa ipsum, explicabo soluta eius quaerat quasi harum.
                      Ab, praesentium illum. Delectus consequatur asperiores eligendi atque, nam voluptas quae neque voluptatibus ut quam dolore earum corporis, quo vero dolor deleniti inventore aperiam? Maxime nihil illo tempore soluta quam." />

            </div>
          </div>

          <div className="h-[28rem] bg-[linear-gradient(-9deg,_#f6f2e7_50%,_#191919_50%)]"></div>

          <div className="h-screen bg-dinocream text-dinoblack">
            <div className="mx-20">
              <h1 className="font-heading text-5xl pt-5 pb-5">Featured projects</h1>
            </div>
          </div>

        </div>
      </main>
      </div>
  );
};

export default Home;
