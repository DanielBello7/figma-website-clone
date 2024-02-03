import { assets } from "@/constants";
import { IoArrowUpCircle } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { footerItems } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0FA958]">
      <div className="w-full flex justify-center w-full border border-black">
        <div className="w-full container border border-black flex items-center space-x-10 my-16 px-10">
          <div className="w-1/5">
            <img src={assets.figma_logo} alt="figma-logo" className="w-full" />
          </div>
          <div className="w-4/5 ps-20 h-[100%] border border-blue-400">
            <div className="w-full flex h-[50%]">
              <div className="w-2/3 border">
                <p className="w-[250px] font-bold text-4xl border">
                  OBJECTS THAT INSPIRE
                </p>
              </div>
              <div className="w-1/3 space-y-3">
                {["Privacy policy", "Terms of sale", "Contact us"].map((item, idx) => (
                  <p className="text cursor-pointer hover:underline" key={idx}>{item}</p>
                ))}
              </div>
            </div>
            <div className="border h-[50%] border-red-300 flex justify-between items-end">
              <div className="flex space-x-4">
                {["FIGMA", "TWITTER", "INSTAGRAM", "YOUTUBE"].map((item, idx) => (
                  <p className="text-2xl cursor-pointer hover:underline flex items-center" key={idx}>
                    <span className="me-1">{item}</span>
                    {idx === 0 && <GoArrowUpRight />}
                  </p>
                ))}
              </div>
              <button className="hover:text-white transition-all duration-[0.5s]">
                <IoArrowUpCircle size={55} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden scroll-container">
        <div className="w-full flex space-x-1 scroll-content">
          {[...footerItems, ...footerItems, ...footerItems].map((item, idx) => (
            <div key={idx} className="flex font-bold text-md items-center">
              <img src={item.icon} />
              <span className="text-xl">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}


