'use client';
import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import Newbar from "./Newbar/Newbar";
import Link from "next/link";
const LinkData = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Contack",
    link: "/contack"
  },
  {
    name: "Category",
    link: "/category"
  },
  {
    name: "Pages",
    link: "/page"
  },
  {
    name: "Blog",
    link: "/blog"
  },


]

const Navbar = () => {
  const [header, setHeader] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);  // Detects scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex max-w-[1400px] flex-col items-center w-full">
        {/* Main Navbar */}
        <div
          className={`w-full transition-all duration-500 ease-in-out transform
            ${header ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}
        >
          <div className="relative w-full p-[3px] rounded-xl overflow-hidden
            before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#ff0000,#ff9900,#33cc33,#0099ff,#9900cc,#ff0000)] 
            before:animate-custom-spin before:rounded-xl before:z-0 before:will-change-transform"
          >
            {/* Main Content */}
            <div className="relative w-full bg-white dark:bg-gray-800 dark:text-white text-black px-6 py-3 rounded-xl z-10">
              <div className="flex items-center justify-between">
                <div className="items-center space-x-5 hidden md:flex">
                  {
                    LinkData.map((item, index) => (
                      <div key={index} className="hover:underline ">
                        <Link href={item.link}>{item.name}</Link>
                      </div>
                    ))
                  }
                </div>
                <div>
                  +8801758225368
                </div>
                <Menu />
              </div>
            </div>
          </div>
        </div>

        {/* New Bar (Fixed After Scroll) */}
        <div className={`${header ? 'px-1 md:px-10 w-full bg-white dark:bg-black py-4 transition-all duration-500 fixed top-0 left-0 z-20' : " hidden"}`}>
          <Newbar />
        </div>
      </div>
    </>
  );
};

export default Navbar;


