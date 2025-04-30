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
    <div className="relative flex gap-3  flex-col items-center text-black justify-center">
      <div className={`border-solid border-white border-8    gap-2 rounded-t-full  h-max bg-yellow-400  shadow-md shadow-black/25 flex flex-col relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
      
        <div className="flex items-center  justify-center">
          <Image src="/satria.png" alt="Groom" width={150} height={185} className="border-solid border-white border-8    object-cover a m-auto w-[150px] h-[185px] rounded-t-full rounded-b-sm mt-4" />
        </div>
        <div className="   m-auto  gap-1 flex right-2   p-2 bg-white rounded-full">
        
        <Groom width="22" height="28" className="align-middle" />
        <h1 className="z-30 ml-[0.8rem] text-lg   font-bold">Satria Arya Diva</h1>
        </div>
       
        
        <p className="  w-2/3 px-2 py-1 text-center m-auto   text-base">Putra pertama dari Bapak Afriyon Damaco  dan Ibu Yenni novita.</p>
      </div>
      <div className={` gap-2 border-solid border-white border-8     rounded-b h-max bg-yellow-400  shadow-md shadow-black/25 flex flex-col relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
 
 
      <Image src="/fania.png" alt="Groom" width={150} height={185} className="object-cover a m-auto w-[150px] h-[185px]  rounded-t-full  border-solid border-white border-8   mt-4" />
        <div className="flex   justify-center">
        <div className="  m-auto  gap-1 flex right-2  align-midle text-center justify-center  p-2 bg-white rounded-full">
        
        <Bride width="22" height="28" className="align-middle" />
        <h1 className="z-30 ml-[0.8rem] text-lg  p-1 font-bold">Dwi Fannia Ananda</h1>
        </div>
        </div> 
      
      
       
        
       
        <p className=" w-2/3 px-2 py-1 text-center m-auto   text-base ">Anak kedua dari Bapak Irfan Ikhwan dan Ibu Witria Ningsih.</p>
      </div> 
      <div ref={ref} className="opacity-0 w-full absolute h-4 bottom-20"></div>
    </div>
  );
};
export default Couple;
