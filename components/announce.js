"use client";
import Image from "next/image";
import { Italianno } from "next/font/google";
import {useIsVisible} from "./visibilityobserver";
import {useRef} from "react";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

const Announce = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);
  return (
    <div className="relative">
      <Image src="/header-flower.png" alt="Header Flower" width={412} height={38} priority className={`${isVisible1 ? "animate-slideInDown" : "opacity-0"}`} />
       <h3 className={`$  text-[1rem]/[2rem] animate-fadeIn flex justify-center ${isVisible1 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref}>The intimmate Wedding Of</h3>
      <h1 className={`${italianno.className} text-yellow-400    text-[3.5rem] animate-fadeIn flex justify-center  text-center align-middle${isVisible1 ? "animate-spinnerGrow" : ""}`}>Satria & Fannia</h1>
      <div className={`flex justify-center relative ${isVisible1 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref1}>
        <Image  src="/Hero.jpg" alt="Frame Couple" width={326} className="rounded-lg  brightness-90" height={396} priority />
         
      </div>
      <div className={`flex flex-col justify-center items-center ${isVisible2 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref2}>
        <h1 className={` text-[1rem]/[2rem]  bg-[url('/public/frame-couple.png)] mt-4  p-4  rounded-full  text-center flex justify-center`}>"And among His Signs is this, that He created for you mates from among yourselves, that He may dwell in tranquillity with them, and He has put love and mercy between your (hearts): verily in that are Signs for those who reflect."

(QS. Ar-Rum: 21)</h1>
        
       
      </div>
      <div ref={ref} className="opacity-0 w-full absolute h-4 bottom-24"></div>
      <Image src="/bottom-flower.png" alt="Bottom Flower" width={411} height={196} className={`w-[411px] h-[196px] object-cover ${isVisible ? "animate-fadeInUp" : "opacity-0"} `} />
    </div>
  );
};

export default Announce;
