"use client";

import { useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Announce from "@/components/announce";
import Timer from "@/components/timer";
import Couple from "@/components/couple";
import Memories from "@/components/memories";
import RSVP from "@/components/rsvp";
import Plan from "@/components/plan";
import Footer from "@/components/footer";
import "/app/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const params = useParams();
  const name = decodeURIComponent(params?.name || "");

  const handleOpenInvitation = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Durasi animasi keluar
  };

  return (
    <main className={josefin.className}>
      <div className="bg-slate-900 text-white flex justify-center min-h-screen">
        <div className="w-[412px] overflow-hidden">
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                className="flex flex-col justify-center items-center h-screen px-4 text-center"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -800, opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <Image
                    src="/married.jpg"
                    alt="Cover"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-lg brightness-75"
                    priority
                  />
                </motion.div>

                <motion.h1
                  className="text-3xl font-bold mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Selamat Datang {name}
                </motion.h1>

                <motion.p
                  className="text-sm mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Undangan Pernikahan
                </motion.p>

                <motion.button
                  onClick={handleOpenInvitation}
                  className="mt-4 bg-white text-slate-900 px-5 py-2 rounded-full hover:bg-slate-300 duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  Buka Undangan
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {isOpen && (
            <>
              <Announce />
             
              <Couple />
              <Memories />
               <Timer />
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
