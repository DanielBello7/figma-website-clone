import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion"
import React from "react";
import Button from "./button";
import { assets } from "@/constants";

export default function Header() {
  React.useEffect(() => {
    let lastScrollTop = 0;
    const header = document.getElementById('header')!;

    const main = () => {
      let currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) header.style.top = '-70px';
      else {
        header.style.top = '0px';
        header.style.backgroundColor = "white"
      }
      if (currentScroll === 0) header.style.backgroundColor = ""
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    window.addEventListener("scroll", main, false);
    return () => {
      window.removeEventListener("scroll", main);
    }
  }, []);

  return (
    <motion.header className="w-full flex justify-center border border-black fixed z-50 py-4 transition-all"
      id="header">
      <header className="w-full px-5 flex items-center justify-between xl:container border">
        <div className="hidden lg:flex items-center space-x-3">
          <Button>SHOP</Button>
          <Button>ABOUT</Button>
          <FiSearch />
        </div>

        <div className="flex items-center lg:hidden space-x-3">
          <button><img src={assets.menu} /></button>
          <button><FiSearch size={29} /></button>
        </div>

        <p className="font-bold text-lg md:text-2xl">THE FIGMA STORE</p>

        <div className="flex lg:hidden space-x-3 items-center">
          <button className="block md:hidden"><img src={assets.location} className="scale-[1.3]" /></button>

          <Button className="hidden md:flex items-center">
            <span className="me-5">UNITED STATES</span>
            <FaChevronDown />
          </Button>

          <button className="border-2 border-black rounded-full p-1 px-6 font-bold text-xl">0</button>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <Button className="flex items-center">
            <span className="me-5">UNITED STATES</span>
            <FaChevronDown />
          </Button>
          <Button>
            <span className="me-3">CART</span>
            <span>0</span>
          </Button>
        </div>
      </header>
    </motion.header>
  )
}

