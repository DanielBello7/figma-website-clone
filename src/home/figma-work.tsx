import HomeContainer from "./home-container";
import Button from "@/components/button";

export default function FigmaWork() {
  return (
    <HomeContainer containerStyle="bg-gray-400 rounded-3xl flex" sectionStyle="bg-black p-5">
      <div className="w-1/2 p-5 py-32">
        <div className="w-[250px] space-y-5">
          <h1 className="font-bold text-3xl">FIGMA X WORK LOUDER</h1>
          <p>Meet the limited edition Figma Creator Micro Keyboard</p>
          <Button className="bg-black text-white text-xs">
            PREORDER
          </Button>
        </div>
      </div>
      <div className="w-1/2"></div>
    </HomeContainer>
  )
}

