import GreetingContainer from "@/components/container/greeting-container";
import OpenWindow from "@/components/open-window";
import Path from "@/components/path";
import Scroll from "@/components/scroll/scroll";
import Model from "@/components/three/model";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="pt-20">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-inherit pt-10">
        <section className="flex items-center justify-evenly">
          <div className="flex w-5 flex-col items-center ">
            <div className="h-5 w-5  rounded-full bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500" />
            <div className="h-80 w-1 bg-gradient-to-b from-red-500 via-pink-500 via-purple-500 to-transparent" />
          </div>
          <div>
            <h1 className="pt-5 font-cissele text-5xl tracking-widest">
              Naufal Rafianto
            </h1>
            <h3 className="font-paragraf">
              College Student (Computer Engineering / Indonesia)
            </h3>
          </div>
          <div className="float-right h-32 w-32 cursor-pointer overflow-hidden rounded-full border-2 border-white ">
            <img
              src="images/profile.jpg"
              alt=""
              className="translate-y-[-35px] scale-100 hover:opacity-75"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/naufal.rafianto/",
                  "_blank"
                )
              }
            />
          </div>
        </section>
        <section className="mt-10 w-full">
          <h1 className="relative ml-20 w-fit pr-3 pb-5 font-title text-xl after:absolute after:bottom-3 after:left-0 after:h-[2px] after:w-full after:bg-white after:content-['']">
            about
          </h1>
          <p className="m-auto w-3/4 rounded p-5 text-justify font-paragraf shadow backdrop-blur">
            As an undergraduate student in Computer Engineering at the
            Technology Institute in Indonesia, Naufal has demonstrated a strong
            interest in the fields of{" "}
            <OpenWindow url="https://en.wikipedia.org/wiki/Mobile_app_development">
              Mobile App Development
            </OpenWindow>{" "}
            and{" "}
            <OpenWindow url="https://en.wikipedia.org/wiki/Web_development">
              Web App Development
            </OpenWindow>
            . He possesses a solid foundation in programming and software
            development, with a particular focus on languages such as C++,
            Python, and JavaScript.
          </p>
        </section>
        <div className="m-auto mt-80 h-[750px] w-[750px] rounded-full bg-gradient-to-bl from-white via-[#895570] via-[#c76e7a] to-[#fab18b]"></div>
      </main>
    </div>
  );
};

export default Home;
