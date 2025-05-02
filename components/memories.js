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
      <h1 className={`${italianno.className} mt-20 text-[3.5rem] flex justify-center my-7 ${isVisible1 ? "animate-spinnerGrow" : "opacity-0"}`} ref={ref1}>
        Our Sweets Memories
      </h1>
      <div className="flex flex-col gap-y-6">
        <div className="flex justify-evenly bg-fixed bg-cover" ref={ref2}>
          <div className={`w-full rounded h-44 bg-cover justify-center items-center shadow-md shadow-black/25 ${isVisible2 ? "animate-fadeInLeft" : "opacity-0"}`} onClick={() => openModal("/ws.jpg")}> 
            <div className="w-full h-full  bg-cover  overflow-hidden cursor-pointer">
            
              <Image src="/ws.jpg" alt="Our Moment" width={1344} height={1334} />
       
            </div>
          </div>
         
        </div>
        <div className="flex justify-evenly" ref={ref3}>
          <div className={`w-28 h-32 flex justify-center items-center rounded-l-full  shadow-md shadow-black/25 ${isVisible3 ? "animate-fadeInLeft" : "opacity-0"}`} onClick={() => openModal("/memo1.jpg")}>
            <div className="w-24 h-28 rounded-l-full bg-gray-400 overflow-hidden">
              <Image src="/memo1.jpg" alt="Our Moment" width={96} height={112} />
            </div>
          </div>
          <div className={`w-38 h-32 flex justify-center items-center  shadow-md shadow-black/25 ${isVisible3 ? "animate-fadeInSlow" : "opacity-0"}`} onClick={() => openModal("/memo2.jpg")}>
            <div className="w-24 h-28 overflow-hidden">
              <Image src="/memo2.jpg" alt="Our Moment" width={106} height={112} className="object-bottom object-none" />
            </div>
          </div>
          <div className={`w-28 h-32 flex justify-center items-center rounded-r-full   shadow-md shadow-black/25 ${isVisible3 ? "animate-fadeInRight" : "opacity-0"}`} onClick={() => openModal("/memo3.jpg")}>
            <div className="w-24 h-28 rounded-r-full bg-gray-400 overflow-hidden">
              <Image src="/memo3.jpg" alt="Our Moment" width={96} height={112} />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly" ref={ref4}>
          <div className={`w-40 h-44 z-50 flex justify-center items-center backdrop:shadow-md shadow-black/25 ${isVisible4 ? "animate-fadeInLeft" : "opacity-0"}`} onClick={() => openModal("/memo4.jpg")}>
            <div className="w-36 h-40 bg-gray-400 overflow-hidden">
              <Image src="/memo4.jpg" alt="Our Moment" width={144} height={160} />
            </div>
          </div>
        
        </div>
        {/* Popup Picture */}
        {isModalOpen && (
          <div className="fixed inset-0   bg-black/50 flex justify-center items-center z-50 animate-fadeIn" onClick={closeModal}>
            <div className="relative   shadow-lg overflow-hidden w-4/5 h-2/3" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Expanded Moment" width={388} height={320} className="w-full h-full object-contain" priority />
              <button className="absolute top-2 right-2  rounded-full p-2 w-7 h-7 flex justify-center items-center" onClick={closeModal}>
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
