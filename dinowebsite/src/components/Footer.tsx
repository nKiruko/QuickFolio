import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const [theme, setDark] = useState(false);

  let coffeeClicked = 0

  function coffeeMode() {
    if (coffeeClicked < 3) {
      coffeeClicked += 1
    } 
    else{
      coffeeClicked = 0
      setDark(!theme);
      localStorage.theme = theme
    }

    if (localStorage.theme === "true") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    coffeeMode()
  });

  
  return (
    <div className="absolute w-full overflow-hidden z-10">
      <div className="relative inset-y-0 bottom-0 z-10 "> 
        <footer className={`dark:bg-coffeegreen text-dinocream m-auto h-auto z-10 ${router.pathname == "/whatIsDI" ? "bg-tmblue" : "bg-tmorange" }`}>

          <div className="flex justify-between p-5 z-40">
            <div className="flex-none w-52">
              <div className="flex flex-col justify-between space-y-2">
                <h1 className="text-5xl font-heading">Contact</h1>
                <p>Digital Innovation</p>
                <p>IT Factory</p>
                <p>Thomas More - Campus Geel</p>
                <p>Kleinhoefstraat 4, 2440 Geel</p>
              </div>
            </div>
            <div className="grow h-14 text-center sm:hidden md:block">
                <Image
                  onClick={coffeeMode}
                  src="/images/LogoTextTransparant.png"
                  alt="Dino Logo"
                  width={200}
                  height={200}
                />
            </div>
            <div className="flex-none w-52">
              <div className="flex flex-col justify-between space-y-2 items-center">
                <a href="https://www.instagram.com/thomasmore.be/" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:instagram-fill"></Icon></a>
                <a href="https://www.facebook.com/ThomasMoreBE/" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:facebook-fill"/></a>
                <a href="https://www.youtube.com/channel/UCdFD9HUuFn5995MmoVeo0vg" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:youtube-fill"/></a>
                <a href="https://twitter.com/thomasmorebe" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:twitter-fill"/></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
