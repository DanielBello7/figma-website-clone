import * as React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function RightScroll() {
  const [show, setShow] = React.useState(false);

  const onclick = () => {
    const element = document.querySelector(".slide-container") as HTMLElement;
    element.scrollBy({ left: 1000, behavior: "smooth" });
  }
  return (
    <div className="absolute right-0 px-10 bottom-0 h-full z-20 flex items-center justify-center cursor-pointer"
      onClick={onclick} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.7 }}>
        <FaArrowRight size={30} />
      </motion.div>
    </div >
  )
}

