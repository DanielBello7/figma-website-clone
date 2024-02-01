import { assets } from "@/constants";
import { IoArrowUpCircle } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { footerItems } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-[#0FA958]">
      <div className="w-full container border flex items-center space-x-10 my-10">
        <div className="w-1/5">
          <img src={assets.figma_logo} alt="figma-logo" className="w-full" />
        </div>
        <div className="w-4/5">
          <div className="w-full flex">
            <div className="w-1/2 border">
              <p className="w-[170px] font-bold text-2xl border">
                OBJECTS THAT INSPIRE
              </p>
            </div>
            <div className="w-1/2 space-y-3">
              {["Privacy policy", "Terms of sale", "Contact us"].map((item, idx) => (
                <p className="text-xs" key={idx}>{item}</p>
              ))}
            </div>
          </div>
          <div className="border flex justify-between items-center">
            <div className="flex space-x-2">
              {["FIGMA", "TWITTER", "INSTAGRAM", "YOUTUBE"].map((item, idx) => (
                <p className="text-md flex items-center" key={idx}>
                  <span className="me-1">{item}</span>
                  {idx === 0 && <GoArrowUpRight />}
                </p>
              ))}
            </div>
            <button>
              <IoArrowUpCircle size={40} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-scroll">
        <div className="w-[2100px] flex items-center border border-black" id="infinite">
          {footerItems.map((item, idx) => (
            <div key={idx} className="border border-black font-bold text-md flex items-center">
              <img src={item.icon} />
              <span>{item.text}</span>
            </div>
          ))}
          {footerItems.map((item) => (
            <div key={item.id + 30} className="font-bold text-md flex items-center">
              <img src={item.icon} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

