import NavBar from "../components/nav/NavBar";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Footerlines from "./Footerlines";

export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/404" ? <NavBar /> : null}

      <main className="overflow-hidden h-full relative -z-10">{children}</main>
      
      {router.pathname !== "/404" ? <Footer /> : null}
      
    </>
  );
}
