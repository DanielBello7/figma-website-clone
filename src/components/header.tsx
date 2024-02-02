import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion"
import React from "react";
import Button from "./button";

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
      <header className="w-full flex items-center justify-between container border">
        <div className="flex items-center space-x-3">
          <Button>SHOP</Button>
          <Button>ABOUT</Button>
          <FiSearch />
        </div>

        <p className="font-bold">THE FIGMA STORE</p>

        <div className="flex items-center space-x-3">
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

