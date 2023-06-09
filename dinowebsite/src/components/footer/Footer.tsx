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
        <footer className={`bg-dinoblack dark:bg-coffeegreen text-dinocream m-auto h-auto z-10 `}>

          <div className="flex justify-between p-5 z-40 ">
            <div className="flex-none w-72 ml-5">
              <div className="flex flex-col justify-between space-y-2">
                <a href="https://www.taskade.com/d/kt2SCkJLsVb7Z6HF?from=shared" target="_blank" rel="noreferrer"><Icon className="w-10 h-10 " icon="icons8:finish-flag"></Icon></a>
                <a href="https://twitter.com/NickBulen" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:twitter-fill"/></a>
              </div>
            </div>
            <div className="grow  text-center relative sm:hidden md:block">
                <Image
                  onClick={coffeeMode}
                  src="/images/logo.png"
                  alt="Dino Logo"
                  width={100}
                  height={100}
                />
            </div>
            <div className="flex-none w-72 ">
              <div className="flex flex-col justify-between space-y-2 items-center">
                <a href="https://github.com/nKiruko" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:github-fill"/></a>
                <a href="https://www.linkedin.com/in/nick-bulen-8613ab252/" target="_blank" rel="noreferrer"><Icon className="w-10 h-10" icon="akar-icons:linkedin-fill"/></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
