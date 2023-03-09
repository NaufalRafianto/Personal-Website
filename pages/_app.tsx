import MainContainer from "@/components/container/main-container";
import Navbar from "@/components/navbar/navbar";
import StarsCanvas from "@/components/three/stars";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StarsCanvas />
      <Navbar />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  );
}

export default MyApp;
