import "../styles/globals.css";

import Layout from "../components/Layout";
import Footerlines from "../components/Footerlines";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
      {router.pathname !== "/404" ? <Footerlines /> : null}
    </Layout>
  );
}
