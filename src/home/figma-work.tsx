import Button from "@/components/button";
import { assets } from "@/constants";

export default function FigmaWork() {
  return (
    <div className="w-full bg-black border-2 border-red-400 relative h-[540px] xl:h-[700px] 2xl:h-[1240px]">
      <div className="w-full h-full absolute top-0 left-0 border-2 border-green-400">
        <img src={assets.figma_bg_1} className="w-full h-full object-contain" alt="img" />
      </div>

      <section className="w-full h-full flex items-center absolute top-0 left-0 border-2 border-red-400">
        <div className="w-full px-20 border border-white">
          <div className="w-[380px] space-y-5">
            <h1 className="font-bold text-5xl">FIGMA X WORK LOUDER</h1>
            <p className="text-3xl">Meet the limited edition Figma Creator Micro Keyboard</p>
            <Button className="bg-black text-white">
              PREORDER
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

