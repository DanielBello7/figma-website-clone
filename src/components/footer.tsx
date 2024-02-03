import { assets } from "@/constants";
import { IoArrowUpCircle } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { footerItems } from "@/constants/data";

export default function Footer() {
  const privacy = ["Privacy policy", "Terms of sale", "Contact us"].map((item, idx) => (
    <p className="text cursor-pointer hover:underline" key={idx}>{item}</p>
  ));

  const links = ["FIGMA", "TWITTER", "INSTAGRAM", "YOUTUBE"].map((item, idx) => (
    <p className="cursor-pointer hover:underline flex items-center border" key={idx}>
      <span className="me-1 text-2xl">{item}</span>
      {idx === 0 && <GoArrowUpRight size={30} />}
    </p>
  ));

  const scroller = [...footerItems, ...footerItems, ...footerItems].map((item, idx) => (
    <div key={idx} className="flex font-bold text-md items-center">
      <img src={item.icon} />
      <span className="text-xl">{item.text}</span>
    </div>
  ));

  const onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer className="w-full bg-[#0FA958]">
      <div className="border border-black w-full block px-10 lg:px-0 md:flex justify-center">
        <div className="border-2 border-red-300 w-full lg:container md:flex my-16">
          <div className="border-2 border-black w-full h-full md:w-1/5 px-24 md:px-4 flex items-center justify-center">
            <img
              src={assets.figma_logo}
              alt="figma-logo"
              className="w-full"
            />
          </div>

          <div className="border-2 border-blue-400 w-full h-full flex flex-col md:w-4/5">
            <div className="w-full md:flex">
              <div className="w-full md:w-2/3 border flex items-center justify-between py-10 md:py-0">
                <p className="font-bold text-4xl w-[250px] border">
                  OBJECTS THAT INSPIRE
                </p>

                <button className="block md:hidden hover:text-white transition-all duration-[0.5s]"
                  onClick={onclick}>
                  <IoArrowUpCircle size={55} />
                </button>
              </div>

              <div className="border border-black w-full md:w-1/3 flex justify-between">
                <div className="space-y-2">
                  {privacy}
                </div>

                <div className="block sm:hidden space-y-2 lg:space-x-4">
                  {links}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex grow border-2 border-red-300 justify-between items-center lg:items-end">
              <div className="block md:flex md:space-x-4 py-4 md:py-0">
                {links}
              </div>
              <button className="hidden md:block hover:text-white transition-all duration-[0.5s]" onClick={onclick}>
                <IoArrowUpCircle size={55} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden scroll-container">
        <div className="w-full flex space-x-1 scroll-content">
          {scroller}
        </div>
      </div>
    </footer>
  )
}


