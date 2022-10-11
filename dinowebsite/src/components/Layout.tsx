import NavBar from "../components/nav/NavBar";
import { useRouter } from "next/router";
import Footer from "./footer/Footer";
import { useEffect } from "react";

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/404" ? <NavBar /> : null}
      <main className="overflow-hidden relative bg-dinocream">{children}</main>
      {router.pathname !== "/404" ? <Footer /> : null}
    </>
  );
}
