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
    <div className="relative flex   mt-10 flex-col items-center text-black justify-center ">
      
      <div className={`  rounded    gap-2  bg-slate-950  opacity-80  h-max  shadow-md shadow-black/25 flex flex-col relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
        
        <div className="flex items-center gap-8  justify-center">
        <Image src="/satria.png" alt="Groom" width={250} height={205} className=" rounded-t-full     object-cover a m-auto w-[200px] h-[285px]   rounded-b-sm mt-4" />
        </div>
        <div className=" text-center w-fit  m-auto justify-around gap-2 flex right-2   p-3 bg-white rounded-full">
        
        <Groom width="22" height="28" className=" " />
        <h1 className="z-30 ml-[0.8rem] text-lg   font-bold">Satria Arya Diva</h1>
        </div>
       
        
        <p className="  w-2/3 px-2 py-1 text-center m-auto  text-white  text-base">Putra pertama dari Bapak Afriyon Damaco  dan Ibu Yenni novita.</p>
      </div>
      <div className={` gap-2 border-solid  border-t-8   bg-slate-950   opacity-80 shadow-md shadow-black/25 flex flex-col relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
 
 
      <Image src="/fania.png" alt="Groom" width={150} height={185} className="object-cover  rounded-t-full     m-auto w-[200px] h-[285px]   rounded-b-sm mt-4" />
        <div className="flex   justify-center">
        <div className="  m-auto   flex right-2  align-midle text-center justify-center  p-3 bg-white rounded-full">
        
        <Bride  className="align-middle" />
        <h1 className="z-30 ml-[0.8rem] text-lg  font-bold">Dwi Fannia Ananda</h1>
        </div>
        </div> 
      
      
       
        
       
        <p className=" w-2/3 px-2 py-1 text-center m-auto text-white   text-base ">Anak kedua dari Bapak Irfan Ikhwan dan Ibu Witria Ningsih.</p>
      </div> 
      <div ref={ref} className="opacity-0 w-full absolute h-4 bottom-20"></div>
    </div>
  );
};
export default Couple;
