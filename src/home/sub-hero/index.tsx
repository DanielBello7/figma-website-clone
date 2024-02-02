import HandPrint from "./hand-print";
import { figmaText } from "@/constants/data";
import HomeContainer from "../home-container";

export default function SubHero() {
  const groups = [
    figmaText.slice(0, 3),
    figmaText.slice(3, 7),
    figmaText.slice(7, figmaText.length)
  ]

  return (
    <HomeContainer containerStyle="flex flex-col items-center justify-center space-y-3"
      sectionStyle="py-32 relative">
      {groups.map((current) => (
        <div className="flex flex-wrap border space-x-3">
          {current.slice(0, 3).map((item) => (
            <div className="flex items-center" key={item.id}>
              <h1 className="text-5xl font-bold">
                {item.text}
              </h1>
              {item.img && <img src={item.img} alt="img" className="w-[30px] h-[30px] ms-1" />}
            </div>
          ))}
        </div>
      ))}
      <HandPrint />
    </HomeContainer>
  )
}

