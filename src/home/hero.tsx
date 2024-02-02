import { assets } from "@/constants";
import * as React from "react";

export default function Hero() {
  const [items, setItems] = React.useState<any[]>([
    assets.hero_1,
    assets.hero_2,
    assets.hero_3,
    assets.hero_4,
    assets.hero_5,
    assets.hero_6,
    assets.hero_7,
    assets.hero_8,
    assets.hero_9
  ]);

  const containerRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const values = entries.map((entry) => {
  //         const target = entry.target as HTMLImageElement;
  //         return {
  //           id: entry.target.id,
  //           isIntersecting: entry.isIntersecting,
  //           img: target.src.split("http://localhost:5173")[1]
  //         }
  //       });
  //       if (values.length > 1) return
  //       if (values[0].isIntersecting) return
  //       const element = document.querySelector(".slider-container")!;
  //       const a = document.createElement("img");
  //       a.src = values[0].img;
  //       a.className = "relative h-full h-full border border-red-400 slider-item"
  //       a.alt = Math.random().toString();
  //       element.appendChild(a);
  //     },
  //     {
  //       root: containerRef.current,
  //       rootMargin: "0px",
  //       threshold: 0.01
  //     }
  //   );

  //   const itemRefs = document.querySelectorAll(".slider-item");
  //   itemRefs.forEach((item) => observer.observe(item));

  //   return () => {
  //     itemRefs.forEach((item) => observer.unobserve(item));
  //   };
  // }, []);

  return (
    <div className="w-full flex items-center justify-center border-b-4 border-black bg-[#FFC700]">
      <div className="w-full h-[700px] border border-black overflow-scroll slider-wrap"
        ref={containerRef}>
        <div className="w-[4000px] h-full flex space-x-10 p-10 pt-20 will-change-transform slider-container">
          {items.map((item, idx) => (
            <img src={item} key={idx + 2}
              className="relative h-full h-full border border-red-400 slider-item"
              alt={idx + "-img"}
              id={`content-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}



