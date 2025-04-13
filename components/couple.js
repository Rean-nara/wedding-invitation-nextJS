"use client";
import Image from "next/image";
import {useIsVisible} from "./visibilityobserver";
import {useRef} from "react";
import Bride from "../public/bride.svg";
import Groom from "../public/groom.svg";

const Couple = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  return (
    <div className="relative flex gap-3 text-black justify-center">
      <div className={`rounded-t-full w-44 h-max bg-white shadow-md shadow-black/25 flex flex-col relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
        <div className="flex justify-center">
          <Image src="/groom.jpg" alt="Groom" width={150} height={185} className="w-[150px] h-[185px] rounded-t-full mt-4" />
        </div>
        <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white left-2 bottom-[2.5rem]"></div>
        <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white left-[3.25rem] bottom-[2rem]"></div>
        <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white left-[4.25rem] bottom-[2.25rem]"></div>
        <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white left-[5.25rem] bottom-[2rem]"></div>
        <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white left-[7.50rem] bottom-[2rem]"></div>
        <div className="z-30 ml-2 absolute left-2 bottom-[6.5rem]">
          <Groom width="22" height="28" />
        </div>
        <h1 className="z-30 ml-[0.8rem] text-sm">Satria Arya Diva</h1>
        <p className="z-30 ml-[0.8rem] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. fringilla pellesque amet tempus.</p>
      </div>
      <div className={`rounded-t-full w-44 h-max bg-white shadow-md shadow-black/25 flex flex-col relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
        <div className="flex justify-center">
          <Image src="/bride.jpeg" alt="Groom" width={150} height={185} className="w-[150px] h-[185px] rounded-t-full mt-4" />
        </div>
        <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white right-2 bottom-[2.5rem]"></div>
        <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white right-[3.25rem] bottom-[2rem]"></div>
        <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white right-[4.25rem] bottom-[2.25rem]"></div>
        <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white right-[5.25rem] bottom-[2rem]"></div>
        <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white right-[7.50rem] bottom-[2rem]"></div>
        <div className="z-30 mr-2 absolute right-2 bottom-[6.5rem]">
          <Bride width="22" height="28" />
        </div>
        <h1 className="z-30 mr-[0.8rem] text-sm text-end">Hinata Hyuga</h1>
        <p className="z-30 mr-[0.8rem] text-xs text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. fringilla pellesque amet tempus.</p>
      </div>
      <div ref={ref} className="opacity-0 w-full absolute h-4 bottom-20"></div>
    </div>
  );
};
export default Couple;
