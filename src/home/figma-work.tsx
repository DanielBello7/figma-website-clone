import Button from "@/components/button";
import { assets } from "@/constants";

export default function FigmaWork() {
  return (
    <div className="w-full relative font-white-it-bold">
      <div className="hidden md:block w-full h-full">
        <img src={assets.figma_bg_1} className="w-full object-contain" alt="img" />
      </div>

      <div className="block md:hidden w-full h-full">
        <img src={assets.figma_bg_2} className="w-full object-contain" alt="img" />
      </div>

      <section className="w-full h-full flex items-end md:items-center absolute top-0 left-0 pb-20 md:pb-0 text-center md:text-start">
        <div className="w-full px-24 sm:px-44 md:px-24">
          <div className="md:w-[380px] space-y-5">
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

