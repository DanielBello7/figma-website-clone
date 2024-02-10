import HandPrint from "./hand-print";
import { figmaText } from "@/constants/data";
import HomeContainer from "../home-container";
import classNames from "classnames";

export default function SubHero() {
  const groups = [
    figmaText.slice(0, 3),
    figmaText.slice(3, 7),
    figmaText.slice(7, 11)
  ]

  return (
    <HomeContainer containerStyle="flex flex-col items-center justify-center space-y-3 hover:text-gray-400 transition-all duration-[0.5s]"
      sectionStyle="py-32 relative">
      {groups.map((current, idx) => (
        <div className="flex flex-wrap space-x-3 px-8 sm:px-0 cursor-pointer items-center justify-center" key={idx}>
          {current.map((item) => (
            <p className="flex items-center font-white-it-bold" key={item.id}>
              <span className={classNames("sm:mt-5 text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold", {
                "underline": item.underline, "text-black": item.underline
              })}>{item.text}</span>
              {
                item.img &&
                <img
                  src={item.img}
                  alt="img"
                  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ms-1 -mt-3"
                />
              }
            </p>
          ))}
        </div>
      ))}
      <HandPrint />
    </HomeContainer>
  )
}

