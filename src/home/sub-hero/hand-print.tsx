import { assets } from "@/constants";
import * as React from "react";
import { motion } from "framer-motion";

export default function HandPrint() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="absolute -top-24 right-20 border">
      <div className="relative border border-black w-[180px] h-[180px] cursor-pointer" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <img src={assets.hand_bg} alt="hand-img" className="absolute w-full h-full animate-spin-slow" />
        <motion.img
          src={assets.hand_01} alt="hand-img"
          style={{ scale: "0.38" }}
          initial={{ translateX: 0 }}
          animate={{ translateX: show ? -10 : 0 }}
          className="absolute w-full h-full scale-[0.6] border border-red-400 -left-3"
        />
        <motion.img
          src={assets.hand_03} alt="hand-img"
          style={{ scale: "0.35" }}
          initial={{ translateX: 0, opacity: 0 }}
          animate={{ translateX: show ? -10 : 0, opacity: show ? 1 : 0, scale: show ? 0.35 : 0.32 }}
          className="absolute w-full h-full scale-[0.6] border border-red-400 left-9 top-3"
        />
      </div>
    </div>
  )
}

