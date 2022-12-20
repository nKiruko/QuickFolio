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
        <footer className={`bg-tmorange dark:bg-coffeegreen text-dinocream m-auto h-auto z-10 `}>

          <div className="flex justify-between p-5 z-40 ">
            <div className="flex-none w-72 ml-5">
              <div className="flex flex-col justify-between space-y-2">
                <h1 className="text-2xl font-heading">Thomas More - Campus Geel</h1>
                <a href="mailto:info.geel@thomasmore.be">info.geel@thomasmore.be</a>
                <a href="tel:+3214562310">+32 14 56 23 10</a>
                <a href="https://www.thomasmore.be/gebruiksvoorwaarden-en-privacy">Gebruiksvoorwaarden en privacy</a>
                <a href="https://www.thomasmore.be/cookiebeleid-thomas-more">Cookiebeleid</a>
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
            <div className="flex-none w-72 ">
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
