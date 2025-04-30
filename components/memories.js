"use client";
import Image from "next/image";
import {useState, useRef} from "react";
import {useIsVisible} from "./visibilityobserver";
import {Italianno} from "next/font/google";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

const Memories = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef(null);
  const isVisible4 = useIsVisible(ref4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  return (
    <div>
      <h1 className={`${italianno.className} text-[3.5rem] flex justify-center my-7 ${isVisible1 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref1}>
        Our Sweets Memories
      </h1>
      <div className="flex flex-col gap-y-6">
        <div className="flex justify-evenly" ref={ref2}>
          <div className={`w-40 h-44 flex justify-center items-center bg-white shadow-md shadow-black/25 ${isVisible2 ? "animate-fadeInLeft" : "opacity-0"}`} onClick={() => openModal("/moment-1.jpg")}> 
            <div className="w-36 h-40 bg-gray-400 overflow-hidden cursor-pointer">
             
            </div>
          </div>
         
        </div>
        <div className="flex justify-evenly" ref={ref3}>
          <div className={`w-28 h-32 flex justify-center items-center rounded-l-full bg-white shadow-md shadow-black/25 ${isVisible3 ? "animate-fadeInLeft" : "opacity-0"}`} onClick={() => openModal("/moment-left-1.png")}>
            <div className="w-24 h-28 rounded-l-full bg-gray-400 overflow-hidden">
              <Image src="/moment-left-1.png" alt="Our Moment" width={96} height={112} />
            </div>
          </div>
          <div className={`w-28 h-32 flex justify-center items-center bg-white shadow-md shadow-black/25 ${isVisible3 ? "animate-fadeInSlow" : "opacity-0"}`} onClick={() => openModal("/moment-3.jpg")}>
            <div className="w-24 h-28 bg-gray-400 overflow-hidden">
              <Image src="/moment-3.jpg" alt="Our Moment" width={96} height={112} className="object-bottom object-none" />
            </div>
          </div>
          <div className={`w-28 h-32 flex justify-center items-center rounded-r-full bg-white shadow-md shadow-black/25 ${isVisible3 ? "animate-fadeInRight" : "opacity-0"}`} onClick={() => openModal("/moment-right-1.png")}>
            <div className="w-24 h-28 rounded-r-full bg-gray-400 overflow-hidden">
              <Image src="/moment-right-1.png" alt="Our Moment" width={96} height={112} />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly" ref={ref4}>
          <div className={`w-40 h-44 flex justify-center items-center bg-white shadow-md shadow-black/25 ${isVisible4 ? "animate-fadeInLeft" : "opacity-0"}`} onClick={() => openModal("/moment-4.jpg")}>
            <div className="w-36 h-40 bg-gray-400 overflow-hidden">
              <Image src="/moment-4.jpg" alt="Our Moment" width={144} height={160} />
            </div>
          </div>
        
        </div>
        {/* Popup Picture */}
        {isModalOpen && (
          <div className="fixed inset-0   bg-black/50 flex justify-center items-center z-50 animate-fadeIn" onClick={closeModal}>
            <div className="relative bg-white shadow-lg overflow-hidden w-72 h-80" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Expanded Moment" width={288} height={320} className="w-full h-full object-contain" priority />
              <button className="absolute top-2 right-2 bg-white rounded-full p-2 w-7 h-7 flex justify-center items-center" onClick={closeModal}>
                <p className="text-base">✕</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Memories;
