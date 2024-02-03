import * as React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function LeftScroll() {
  const [show, setShow] = React.useState(false);

  const onclick = () => {
    const element = document.querySelector(".slide-container") as HTMLElement;
    element.scrollBy({ left: -1000, behavior: "smooth" });
  }
  return (
    <div className="absolute left-0 px-10 bottom-0 h-full z-20 flex items-center justify-center cursor-pointer"
      onClick={onclick} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.7 }}>
        <FaArrowLeft size={30} />
      </motion.div>
    </div >
  )
}

