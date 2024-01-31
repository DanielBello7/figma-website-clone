import Button from "./button";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi"

export default function Header() {
  return (
    <header className="flex justify-center border border-black">
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
    </header>
  )
}

