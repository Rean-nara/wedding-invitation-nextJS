"use client";
import Image from "next/image";
import {Italianno} from "next/font/google";
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
      <h1 className={`${italianno.className} text-[3.5rem] flex justify-center ${isVisible1 ? "animate-spinnerGrow" : ""}`}>We're Getting Married</h1>
      <div className={`flex justify-center relative ${isVisible1 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref1}>
        <Image className="z-20" src="/frame-couple.png" alt="Frame Couple" width={326} height={396} priority />
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-max h-max">
          <Image src="/couple.png" alt="Frame Couple" width={233} height={265} priority />
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center ${isVisible2 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref2}>
        <h1 className={`${italianno.className} text-[3.5rem]/[3rem] flex justify-center`}>Naruto & Hinata</h1>
        <h2>We're getting Married in</h2>
        <h2>17.02.2027</h2>
      </div>
      <div ref={ref} className="opacity-0 w-full absolute h-4 bottom-24"></div>
      <Image src="/bottom-flower.png" alt="Bottom Flower" width={411} height={196} className={`w-[411px] h-[196px] object-cover ${isVisible ? "animate-fadeInUp" : "opacity-0"} `} />
    </div>
  );
};

export default Announce;
