import { heroItems } from "@/constants/data";
import LeftScroll from "./left-scroll";
import HeroItem from "./hero-item";
import * as React from "react";
import RightScroll from "./right-scroll";

export default function Hero() {
  React.useEffect(() => {
    const container = document.querySelector(".slide-container") as HTMLElement;
    const first = document.querySelectorAll(".hero-1");
    const main = first[0] as HTMLElement;
    const children = [...container.children];
    const middleNumber = children.length / 2

    children.slice(middleNumber).reverse().forEach((img) => {
      container.insertAdjacentHTML("afterbegin", img.outerHTML);
    });

    children.slice(0, middleNumber).forEach((img) => {
      container.insertAdjacentHTML("beforeend", img.outerHTML);
    });

    container.scrollTo({ left: main.offsetLeft - 100 });
  }, []);
  return (
    <div className="w-full flex items-center justify-center border-b-4 border-black bg-[#FFC700] relative">
      <LeftScroll />
      <div className="w-full h-[380px] md:h-[500px] lg:h-[700px] overflow-hidden flex space-x-10 py-8 pt-20 slide-container"
        onScroll={() => {
          const container = document.querySelector(".slide-container") as HTMLElement;
          const firstHalf = document.querySelectorAll(`.hero-6`);
          const secondHalf = document.querySelectorAll(`.hero-5`);
          const selectedFirstHalf = firstHalf[1] as HTMLElement;
          const selectedSecondHalf = secondHalf[0] as HTMLElement;

          if (container.scrollLeft === 0) {
            container.scrollLeft = selectedFirstHalf.offsetLeft
          } else if ((container.offsetWidth + container.scrollLeft) >= container.scrollWidth) {
            container.scrollLeft = selectedSecondHalf.offsetLeft - (container.clientWidth - selectedSecondHalf.clientWidth)
          }
        }}>
        {heroItems.map((item, idx) => <HeroItem {...item} idx={idx} key={idx} />)}
      </div>
      <RightScroll />
    </div>
  )
}

