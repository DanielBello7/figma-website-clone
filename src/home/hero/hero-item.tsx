import * as React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type HeroItemProps = {
  id: number;
  title: string;
  img: string;
  text: string;
  idx: number
}

export default function HeroItem(props: HeroItemProps) {
  const {
    text,
    title,
    id,
    img,
    idx
  } = props;

  const [show, setShow] = React.useState(false);
  return (
    <div className={classNames("cursor-pointer relative", title)} onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <img src={img} key={idx + 2}
        className="h-full max-w-none border border-red-400"
        alt={idx + "-img"}
        id={`content-${idx}`}
      />
      <div className="border w-full h-full absolute top-0 left-0 flex items-center justify-center transition-all">
        <motion.p className="bg-white p-3 px-5 rounded-full text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          {text}
        </motion.p>
      </div>
    </div>
  )
}

