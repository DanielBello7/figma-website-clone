import HomeContainer from "./home-container";
import { assets } from "@/constants";

export default function Hero() {
  const items = [
    assets.hero_1,
    assets.hero_2,
    assets.hero_3,
    assets.hero_4,
    assets.hero_5,
    assets.hero_6,
    assets.hero_7,
    assets.hero_8,
    assets.hero_9,
  ];

  return (
    <HomeContainer containerStyle="h-[600px] py-10" sectionStyle="border-b-4 border-black">
      <div className="flex space-x-10 h-full overflow-scroll">
        {items.map((item, idx) => (
          <img src={item} className="h-full" alt={idx + "-img"} key={idx} />
        ))}
      </div>
    </HomeContainer>
  )
}

