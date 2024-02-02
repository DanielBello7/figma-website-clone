import { assets } from "@/constants";
import * as React from "react";

export default function HandPrint() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="absolute -top-24 right-20 border">
      <div className="relative border border-black w-[150px] h-[150px] cursor-pointer" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <img src={assets.hand_bg} alt="hand-img" className="absolute w-full h-full animate-spin-slow" />
        <img src={show ? assets.hand_02 : assets.hand_01} alt="hand-img" className="absolute w-full h-full scale-[0.6]" />
      </div>
    </div>
  )
}

