"use client";
import Image from "next/image";
import {useIsVisible} from "./visibilityobserver";
import {useRef} from "react";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });
 

const Timer = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const renderTimer = ({days, hours, minutes, seconds}) => {
    return (
      <div className={`relative z-50 flex gap-7 justify-center my-7 ${isVisible ? " " : "opacity-0"}`}>
        <div className={`relative  ${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}>
          <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
          <div className="rounded-full w-[68px] h-[72px] text-yellow-900 font-semibold bg-gray-300 flex justify-center items-center relative text-center">
            {days} <br /> Days
          </div>
        </div>
        <div className={`relative ${isVisible ? "animate-fadeInLeftQuick" : "opacity-0"}`}>
          <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
          <div className="rounded-full w-[68px] h-[72px]  text-yellow-900 font-semibold bg-gray-300 flex justify-center items-center relative text-center">
            {hours} <br /> Hours
          </div>
        </div>
        <div className={`relative ${isVisible ? "animate-fadeInRightQuick" : "opacity-0"}`}>
          <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
          <div className="rounded-full w-[68px] h-[72px]  text-yellow-900 font-semibold bg-gray-300 flex justify-center items-center relative text-center">
            {minutes} <br /> Min
          </div>
        </div>
        <div className={`relative ${isVisible ? "animate-fadeInRight" : "opacity-0"}`}>
          <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
          <div className="rounded-full w-[68px] h-[72px]  text-yellow-900 font-semibold bg-gray-300 flex justify-center items-center relative text-center">
            {seconds} <br /> Sec
          </div>
        </div>
        <div ref={ref} className="opacity-0 w-full absolute h-2 -bottom-4"></div>
      </div>
    );
  };
  return <Countdown date={new Date("2025-05-10T00:00:00")} renderer={renderTimer} />;
};
export default Timer;
