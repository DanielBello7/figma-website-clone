import classNames from "classnames";
import HomeContainer from "./home-container";
import { assets } from "@/constants";

export default function Content() {
  return (
    <HomeContainer sectionStyle="py-20">
      <div className="w-full grid grid-cols-4 gap-4">
        {new Array(47).fill(47).map((_, idx) => idx + 1).filter((item) => item !== 8).map((item) => {
          const number = item > 9 ? item : `0${item}`;
          const img = assets[`content_${number}` as keyof typeof assets];

          const cn = classNames("w-full border relative", {
            "col-span-2": item === 7 || item === 9 || item === 18 || item === 19
          });

          const lg = classNames("w-full", {
            "absolute bottom-0": item === 9 || item === 19
          });

          return (
            <div className={cn} key={item}>
              <img src={img} className={lg} />
            </div>
          )
        })}
      </div>
    </HomeContainer>
  )
}

