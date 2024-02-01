import { storeItems } from "@/constants/data"
import Item from "./item";
import HomeContainer from "../home-container";

export default function Content() {
  return (
    <HomeContainer sectionStyle="py-20">
      <div className="w-full grid grid-cols-4 gap-4">
        {storeItems.map((item, idx) => (
          <Item {...item} newItem={item.new} key={idx} />
        ))}
      </div>
    </HomeContainer>
  )
}

