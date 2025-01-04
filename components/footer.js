"use client";
import Image from "next/image";
import {useIsVisible} from "./visibilityobserver";
import {useRef} from "react";
const Footer = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  return (
    <div className={`w-[367px] h-44 bg-gray-400 mx-auto mt-7 mb-2 ${isVisible ? "animate-fadeIn" : "opacity-0"}`} ref={ref}>
      <Image src="/footer.jpg" alt="Footer" width={367} height={176} />
    </div>
  );
};

export default Footer;
