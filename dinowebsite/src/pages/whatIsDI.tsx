import type { GetStaticProps, NextPage } from "next";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Coffee from "../components/di/Coffee";
import ProjectCount, {
  ProjectCounterProps,
} from "../components/di/ProjectCount";
import { getAllProjectDataSorted } from "../modules/projects";

export const getStaticProps: GetStaticProps = async (context) => {
  const projectAmountNumber = (await getAllProjectDataSorted()).length;
  return {
    props: {
      projectAmountNumber,
    },
  };
};

const whatIsDI: NextPage<ProjectCounterProps> = ({ projectAmountNumber }) => {
  return (
    <div>
      <Head>
        <title>Portfolio - About me</title>
        <meta
          name="description"
          content="Digital Innovation Thomas More, What is Digital Innovation"
        />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <main className="text-dinoblack">
        <div className="mx-20 3xl:pb-24">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5 ">
            About me
          </h1>
          <p className="font-sans text-md sm:text-lg text-justify">
          Hallo, mijn naam is Nick Bulen en ik ben een 20-jarige fullstack developer met een passie voor IT, designen en een grote drang om te experimenteren. Mijn specialiteit ligt voornamelijk in het frontend gedeelte van de ontwikkeling. Ik hecht veel waarde aan details en ben ervan overtuigd dat kleine nuances het verschil kunnen maken. Als teamspeler werk ik graag samen om projecten succesvol af te ronden. Bovendien ben ik flexibel en kan ik me gemakkelijk aanpassen aan nieuwe uitdagingen en technologieën. Met een gedreven en leergierige instelling sta ik klaar om mijn vaardigheden voortdurend te verbeteren. Laten we samenwerken om moderne, innovatieve websites te ontwikkelen en nieuwe technologieën te verkennen.
          </p>
        </div>
        <div className="mt-28 md:mt-40 lg:mt-52 xl:mt-60 bg-[linear-gradient(-9deg,_#191919_50%,_#e8e3d0_50%)]">
          <div className="bg-tmorange bg-[linear-gradient(120deg,_#f4b34d_20%,_#ca7d37_22%,_#bf6f32_30%,_#ae562b_32%,_#851d1c_40%,_#851d1c_60%,_#9c3e25_68%,_#bf6f32_70%,_#d48a3d_78%,_#f4b34d_80%)] h-20 md:h-32 lg:h-40 xl:h-60 -rotate-9 4xl:-rotate-3 5xl:-rotate-2 scale-125 shadow-glow"></div>
        </div>
        <div className="bg-dinoblack text-dinocream pb-24 4xl:pb-36 4xl:h-screen">
          <h1 className="pt-52 text-center font-heading text-4xl">Experience</h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 pt-24 pb-24">
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="mdi:tailwind"/>
                <p className="text-center pt-6">NextJS/Tailwindcss</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="mdi:language-typescript"/>
                <p className="text-center pt-6">Typescript</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="ic:outline-home"/>
                <p className="text-center pt-6">Home Assistant</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="teenyicons:python-outline"/>
                <p className="text-center pt-6">Python</p>
              </div>
            </div>
            <div className="border-8 rounded-[50px] mb-5 lg:mb-0 relative mx-auto bg-dinoblack overflow-hidden h-[552px] w-[311px] xl:h-[736px] xl:w-[414px]">
                  <Image
                          src="./images/Nick.jpg"
                          layout="fill"
                          alt="Nick"
                        />
                </div>
        </div>
        
      </main>
    </div>
  );
};

export default whatIsDI;
