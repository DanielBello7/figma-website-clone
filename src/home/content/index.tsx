import { storeItems } from "@/constants/data"
import Item from "./item";
import HomeContainer from "../home-container";

export default function Content() {
  return (
    <HomeContainer sectionStyle="py-20 px-2">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-3 sm:px-0">
        {storeItems.map((item, idx) => (
          <Item {...item} newItem={item.new} key={idx} />
        ))}
      </div>
    </HomeContainer>
  )
}

