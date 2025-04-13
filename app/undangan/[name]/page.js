"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Josefin_Sans } from "next/font/google";
import Announce from "@/components/announce";
import Timer from "@/components/timer";
import Couple from "@/components/couple";
import Memories from "@/components/memories";
import RSVP from "@/components/rsvp";
import Plan from "@/components/plan";
import Footer from "@/components/footer";
import Image from "next/image";
import "/app/globals.css"; // sesuaikan path jika berbeda

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function UndanganPage() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const name = params.name || "Tamu Undangan";

  return (
    <main className={josefin.className}>
      <div className="bg-slate-900 text-white flex  justify-center min-h-screen">
        <div className="w-[412px] overflow-hidden">
          {!isOpen ? (
            <div className="flex flex-col justify-center p-0 translate-x-0 ease-in-out animation-delay-100  items-center h-screen text-center">
              <Image
                src="/married.jpg"
                width={300}
                height={200}
                alt="Undangan Pernikahan"
                className="z-0 h-4/6  w-4/5   animate-fadeInSlow  border-white rounded-3xl "
                priority 
              />
              <h1 className="text-3xl font-bold mt-4 animate-fadeInLeft animation-delay-500 "> Selamat Datang, {decodeURIComponent(name  || "Tamu Undangan")}</h1>
              <p className="text-sm mb-4">Kami mengundangmu ke acara pernikahan kami.</p>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-yellow-400 text-white animate-fadeInSlow  px-5 py-2 rounded-full hover:bg-slate-300 duration-300 font-semibold"
              >
                Buka Undangan
              </button>
            </div>
          ) : (
            <>
              <Announce />
              
              <Couple />
              <Timer />
              <Memories />
              <RSVP />
              <Plan />
             
              <Footer />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
