"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useIsVisible } from "./visibilityobserver";
import { Italianno } from "next/font/google";

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
    <div className="py-16 px-4">
      <h1
        ref={ref1}
        className={`${italianno.className} text-5xl text-center my-6 ${
          isVisible1 ? "animate-spinnerGrow" : "opacity-0"
        }`}
      >
        Our Sweet Memories
      </h1>

      {/* Narasi tambahan */}
      <p
        className={`text-center text-sm text-gray-300 max-w-md mx-auto mb-8 ${
          isVisible1 ? "animate-fadeInSlow" : "opacity-0"
        }`}
      >
        This is our story — from a beautiful first love in high school to a lifetime journey together. Cherished moments that shaped who we are today.
      </p>

      <div className="flex flex-col gap-8">

        {/* Gambar 1 (ws.jpg besar) */}
        <div ref={ref2} className="flex justify-evenly">
          <div
            className={`w-full max-w-lg rounded-lg shadow-md shadow-black/25 cursor-pointer overflow-hidden ${
              isVisible2 ? "animate-fadeInLeft" : "opacity-0"
            }`}
            onClick={() => openModal("/ws.jpg")}
          >
            <Image
              src="/ws.jpg"
              alt="Our Moment"
              width={1344}
              height={1334}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Gambar 2-4 (3 gambar baris) */}
        <div ref={ref3} className="flex justify-evenly gap-4">
          <div
            className={`rounded-l-full shadow-md shadow-black/25 cursor-pointer overflow-hidden ${
              isVisible3 ? "animate-fadeInLeft" : "opacity-0"
            }`}
            onClick={() => openModal("/memo1.jpg")}
          >
            <Image
              src="/memo1.jpg"
              alt="Our Moment"
              width={96}
              height={112}
              className="w-24 h-44 object-cover"
            />
          </div>

          <div
            className={`shadow-md shadow-black/25 cursor-pointer overflow-hidden ${
              isVisible3 ? "animate-fadeInSlow" : "opacity-0"
            }`}
            onClick={() => openModal("/memo2.jpg")}
          >
            <Image
              src="/memo2.jpg"
              alt="Our Moment"
              width={106}
              height={112}
              className="w-28 h-full object-cover"
            />
          </div>

          <div
            className={`rounded-r-full shadow-md shadow-black/25 cursor-pointer overflow-hidden ${
              isVisible3 ? "animate-fadeInRight" : "opacity-0"
            }`}
            onClick={() => openModal("/memo3.jpg")}
          >
            <Image
              src="/memo3.jpg"
              alt="Our Moment"
              width={96}
              height={112}
              className="w-24 h-44 object-cover"
            />
          </div>
        </div>

        {/* Gambar 5 (memo4.jpg) */}
        <div ref={ref4} className="flex justify-evenly">
          <div
            className={`w-40 h-44 rounded-lg shadow-md shadow-black/25 cursor-pointer overflow-hidden ${
              isVisible4 ? "animate-fadeInLeft" : "opacity-0"
            }`}
            onClick={() => openModal("/memo4.jpg")}
          >
            <Image
              src="/memo4.jpg"
              alt="Our Moment"
              width={144}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Popup Picture (Modal) */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-2xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded Moment"
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black transition"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Memories;
