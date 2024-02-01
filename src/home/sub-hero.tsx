import { figmaText } from "@/constants/data";
import HomeContainer from "./home-container";
import classNames from "classnames";

export default function SubHero() {
  return (
    <HomeContainer containerStyle="flex flex-col items-center justify-center space-y-3"
      sectionStyle="py-32">
      <div className="flex flex-wrap border space-x-3">
        {figmaText.slice(0, 3).map((item) => (
          <div className="flex items-center" key={item.id}>
            <h1 className="text-3xl font-bold">
              {item.text}
            </h1>
            {item.img && <img src={item.img} alt="img" className="w-[25px] h-[25px] ms-1" />}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap border space-x-3">
        {figmaText.slice(3, 7).map((item) => (
          <div className="flex items-center" key={item.id}>
            <h1 className={classNames("text-3xl font-bold", { "underline": item.underline })}>
              {item.text}
            </h1>
            {item.img && <img src={item.img} alt="img" className="w-[25px] h-[25px] ms-1" />}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap border space-x-3">
        {figmaText.slice(7, figmaText.length).map((item) => (
          <div className="flex items-center" key={item.id}>
            <h1 className={classNames("text-3xl font-bold", { "underline": item.underline })}>
              {item.text}
            </h1>
            {item.img && <img src={item.img} alt="img" className="w-[25px] h-[25px] ms-1" />}
          </div>
        ))}
      </div>
    </HomeContainer>
  )
}

