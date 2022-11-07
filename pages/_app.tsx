import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import HeadLayout from "../Layout/HeadLayout";
import Script from "next/script";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <HeadLayout />
        <Script src="https://kit.fontawesome.com/9beb142f00.js" />
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
