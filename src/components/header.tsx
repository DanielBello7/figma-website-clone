import Button from "./button";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header className="w-full flex justify-center border border-black fixed z-10">
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

