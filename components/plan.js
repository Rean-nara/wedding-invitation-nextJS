"use client";
import {Italianno} from "next/font/google";
import Image from "next/image";
import {useIsVisible} from "./visibilityobserver";
import {useRef} from "react";
import Drinks from "../public/drinks.svg";
import Ring from "../public/ring.svg";
import Camera from "../public/camera.svg";
import Lunch from "../public/lunch.svg";
import Closing from "../public/closing.svg";
import Love from "../public/love.svg";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
const Plan = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div className="relative">
      <h1 className={`${italianno.className} text-[3.5rem] flex justify-center my-7 ${isVisible ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref}>
        Our Wedding Plan
      </h1>
      {/* Rundown */}
      <div className={`w-60 h-[545px] rounded-t-full outline-[6px] outline outline-gray-300 mx-auto bg-white shadow-lg shadow-black/25 relative ${isVisible1 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref1}>
        {/* Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300">
          <div className="absolute top-[6.5rem] left-1/2 transform -translate-x-1/2">
            <span>
              <div className="w-max h-max">
                <Love />
              </div>
            </span>
          </div>
          <div className="absolute top-52 left-1/2 transform -translate-x-1/2">
            <span>
              <div className="w-max h-max">
                <Love />
              </div>
            </span>
          </div>
          <div className="absolute top-[19.5rem] left-1/2 transform -translate-x-1/2">
            <span>
              <div className="w-max h-max">
                <Love />
              </div>
            </span>
          </div>
          <div className="absolute top-[25rem] left-1/2 transform -translate-x-1/2">
            <span>
              <div className="w-max h-max">
                <Love />
              </div>
            </span>
          </div>
          <div className="absolute top-[31rem] left-1/2 transform -translate-x-1/2">
            <span>
              <div className="w-max h-max">
                <Love />
              </div>
            </span>
          </div>
        </div>
        {/* Activity */}
        <div className="absolute top-20 w-full flex flex-col items-center gap-10 -left-[3.75rem]">
          <div className="text-center">
            <div className="w-max h-max mx-auto">
              <Drinks />
            </div>
            <p className="text-sm text-yellow-500 mt-1">Welcome Drinks</p>
          </div>
          <div className="text-center">
            <div className="w-max h-max mx-auto">
              <Ring />
            </div>
            <p className="text-sm text-yellow-500 mt-1">Ceremony</p>
          </div>
          <div className="text-center">
            <div className="w-max h-max mx-auto">
              <Camera />
            </div>
            <p className="text-sm text-yellow-500 mt-1">Party Photos</p>
          </div>
          <div className="text-center">
            <div className="w-max h-max mx-auto">
              <Lunch />
            </div>
            <p className="text-sm text-yellow-500 mt-1">Lunch Time</p>
          </div>
          <div className="text-center">
            <div className="w-max h-max mx-auto">
              <Closing />
            </div>
            <p className="text-sm text-yellow-500 mt-1">Closing</p>
          </div>
        </div>
        {/* Time */}
        <div className={`${italianno.className} absolute font-semibold top-0 w-full -right-[3.75rem]`}>
          <p className="text-2xl text-yellow-500 absolute top-[6rem] left-1/2 transform -translate-x-1/2">11.00 </p>
          <p className="text-2xl text-yellow-500 absolute top-[12.5rem] left-1/2 transform -translate-x-1/2">12.00 </p>
          <p className="text-2xl text-yellow-500  absolute top-[19rem] left-1/2 transform -translate-x-1/2">13.00 </p>
          <p className="text-2xl text-yellow-500 absolute top-[24.5rem] left-1/2 transform -translate-x-1/2">14.00 </p>
          <p className="text-2xl  text-yellow-500 absolute top-[30.5rem] left-1/2 transform -translate-x-1/2">20.00 </p>
        </div>
      </div>
      {/* Moving flower */}
      <div className="absolute top-20 right-0 animate-flowerAnimationRight">
        <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
      </div>
      <div className="absolute top-[23.5rem] -right-5 animate-flowerAnimationRight">
        <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
      </div>
      <div className="absolute top-20 left-0 animate-flowerAnimationLeft">
        <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
      </div>
      <div className="absolute top-[23.5rem] -left-5 animate-flowerAnimationLeft">
        <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
      </div>
    </div>
  );
};

export default Plan;
