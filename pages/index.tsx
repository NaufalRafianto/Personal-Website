import GreetingContainer from "@/components/container/greeting-container";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="pt-20">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-inherit">
        <div className="m-auto w-1/2">
          <img
            src="images/ufo.png"
            alt=""
            className="animate-float scale-[.25]"
          />
        </div>

        <GreetingContainer>Welcome</GreetingContainer>
        <h1 className="font-title">This is Home</h1>
      </section>
    </div>
  );
};

export default Home;
