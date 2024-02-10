import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React from "react";
import Button from "./button";
import { AnimatePresence, motion } from "framer-motion"
import { assets } from "@/constants";

export default function Header() {
  const [show, setShow] = React.useState(false);

  const click = () => {
    setShow(!show);
    if (!show) {
      const header = document.getElementById('header')!;
      header.style.backgroundColor = "white"
    }
  }

  React.useEffect(() => {
    let lastScrollTop = 0;
    const header = document.getElementById('header')!;

    const main = () => {
      let currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        header.style.top = '-90px';
        setShow(false)
      }
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
    <motion.header className="w-full flex flex-col items-center fixed z-50 py-5 transition-all"
      id="header" animate={{ height: show ? "100%" : "" }}>
      <header className="w-full px-2 lg:px-0 flex items-center justify-between xl:container">
        <div className="hidden lg:flex items-center space-x-3">
          <Button>SHOP</Button>
          <Button>ABOUT</Button>
          <FiSearch />
        </div>

        <div className="flex items-center lg:hidden space-x-2">
          <button onClick={click}>
            <img src={assets.menu} className="w-[65px]" />
          </button>
          <button><FiSearch size={20} /></button>
        </div>

        <p className="w-full text-center font-bold text-lg md:text-[1.5rem] font-white-medium lg:ps-20">
          THE FIGMA STORE
        </p>

        <div className="flex lg:hidden space-x-3 items-center">
          <button className="block md:hidden">
            <img
              src={assets.location}
              className="w-[70px]"
            />
          </button>

          <Button className="hidden md:flex items-center">
            <span className="me-5">UNITED STATES</span>
            <FaChevronDown />
          </Button>

          <button className="border-2 text border-black rounded-full px-3 font-bold text-xl">
            0
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          <Button className="flex items-center">
            <span className="w-32 me-10">UNITED STATES</span>
            <FaChevronDown />
          </Button>
          <Button>
            <span className="me-3">CART</span>
            <span>0</span>
          </Button>
        </div>
      </header>
      {
        show &&
        <AnimatePresence>
          <motion.div className="w-full flex flex-col grow transition-all"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: show ? 1 : 0, translateY: show ? 1 : -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="px-5 py-20 space-y-3">
              <h1 className="text-6xl font-bold">Shop</h1>
              <h1 className="text-6xl font-bold">About</h1>
            </div>

            <div className="px-5 py-20 text-xl space-y-4">
              <p>Privacy policy</p>
              <p>Terms of Sale</p>
              <p>Contact us</p>
            </div>
          </motion.div>
        </AnimatePresence>
      }
    </motion.header>
  )
}

