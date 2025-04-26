"use client";
import { Italianno } from "next/font/google";
import { useIsVisible } from "./visibilityobserver";
import { useRef } from "react";

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

const RSVP = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <div>
      <h1
        className={`${italianno.className} text-[3.5rem] flex justify-center my-7 ${
          isVisible1 ? "animate-slideInDown" : "opacity-0"
        }`}
        ref={ref1}
      >
        When and Where
      </h1>
      <p
        className={`flex justify-center text-center ${
          isVisible1 ? "animate-spinnerGrow" : "opacity-0"
        }`}
      >
        Sabtu , 10 Mei 2025, 11:00 - Selesai <br /> JL. HM Yamin, GG Lurah no 52,
        Medan, Sumatera Utara
      </p>

      <div
        className={`flex flex-col mt-4 bg-white shadow-md shadow-black/25 w-max h-max mx-auto ${
          isVisible2 ? "animate-spinnerGrow" : "opacity-0"
        }`}
        ref={ref2}
      >
        <div className="w-80 h-[200px] bg-gray-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.18941470563308!2d98.69685089824723!3d3.59872842963107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131a246e15f81%3A0xe36e00c71cc0397f!2sGg.%20Lurah%20No.52%2C%20Sei%20Kera%20Hilir%20II%2C%20Kec.%20Medan%20Perjuangan%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020222!5e1!3m2!1sid!2sid!4v1745703556448!5m2!1sid!2sid"
            width={320}
            height={300}
            className="border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-80 h-auto bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg flex flex-col p-4 animate-fade-in">
          <h1 className="text-2xl font-bold text-gray-700 text-center mb-2">
           Maps
          </h1>
          <h1
            className={`text-3xl text-center text-pink-500 italic ${italianno.className}`}
          >
            Satria & Fannia
          </h1>
          <hr className="w-full border-t-2 border-gray-300 mt-2 mb-4" />

          {/* Arahkan tombol ke link tujuan */}
          <div className="flex justify-center mt-4">
            <a
              href=" https://maps.app.goo.gl/PAhN5V35N2AuMoaA6" // <-- ganti link ini ke tujuan kamu
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm px-6 py-2 shadow-lg transform transition-transform hover:scale-105"
            >
              Arah ke lokasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
