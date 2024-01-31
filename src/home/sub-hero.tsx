import HomeContainer from "./home-container";
import classNames from "classnames";

export default function SubHero() {
  return (
    <HomeContainer containerStyle="flex flex-col items-center justify-center space-y-3"
      sectionStyle="py-32">
      <div className="flex flex-wrap border space-x-5">
        {["FIGMA'S", "COLLECTION", "OF"].map((item, idx) => (
          <h1 key={idx} className="text-3xl font-bold">{item}</h1>
        ))}
      </div>
      <div className="flex flex-wrap border space-x-5">
        {["LAYERS", "AND", "COMPONENTS", "FOR"].map((item, idx) => (
          <h1 key={idx} className={classNames("text-3xl font-bold", { "underline": idx === 0 || idx === 2 })}>
            {item}
          </h1>
        ))}
      </div>
      <div className="flex flex-wrap border space-x-5">
        {["YOU", "AND", "YOUR", "FRIENDS"].map((item, idx) => (
          <h1 key={idx} className="text-3xl font-bold">{item}</h1>
        ))}
      </div>
    </HomeContainer>
  )
}

