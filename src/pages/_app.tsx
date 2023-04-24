import "@/styles/globals.scss";
import "swiper/css";
import "swiper/css/effect-fade";

import { LayoutMain } from "@/uikit/layout-main";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Head>
        <title>Wicked Moai</title>
      </Head>
      <Component {...pageProps} />
    </LayoutMain>
  );
}
