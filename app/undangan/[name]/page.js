"use client";

import { useState, useRef } from "react";
import { Josefin_Sans } from "next/font/google";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";

import Announce from "@/components/announce";
import Timer from "@/components/timer";
import Couple from "@/components/couple";
import Memories from "@/components/memories";
import RSVP from "@/components/rsvp";
import Plan from "@/components/plan";
import Footer from "@/components/footer";
 

import WeddingGift from "@/components/gift";
import AudioPlayer from "@/components/AudioPlayer";


import "/app/globals.css";
import TurutMengundang from "@/components/mengundang";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const audioRef = useRef(null);


  const params = useParams();
  const name = decodeURIComponent(params?.name || "");

  const handleOpenInvitation = () => {
    setIsAnimatingOut(true);

    // Play audio dari komponen AudioPlayer
    audioRef.current?.play();

    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  };

  return (
    <main className={josefin.className}>
      <AudioPlayer ref={audioRef} />

      <div className="bg-slate-900 text-white flex justify-center min-h-screen">
        <div className="w-[352px] overflow-hidden  ">
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
                    src="/Cover.png"
                    alt="Cover"
                    width={400}
                    height={300}
                    className="rounded-2xl max-w-full shadow-lg"
                    priority
                  />
                </motion.div>

                <motion.h1
                  className="text-2xl font-bold mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Selamat Datang <span className="text-yellow-400 capitalize ">{name}</span>
                </motion.h1>

                <motion.p
                  className="text-sm mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                
                </motion.p>

                <motion.div className="flex flex-row justify-center items-center">
                  <Image
                    src="/Orn-04.png"
                    width={80}
                    height={80}
                    className="object-cover animate-flowerAnimationLeft"
                    alt="Ornament"
                    priority
                  />
                  <motion.button
                    onClick={handleOpenInvitation}
                    className="mt-4 bg-white text-center flex font-bold text-slate-900 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-white hover:font-semibold duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <MailOpen /> Open Invitation
                  </motion.button>
                  <Image
                    src="/Orn-02.png"
                    width={80}
                    height={80}
                    className="object-cover animate-flowerAnimationRight"
                    alt="Ornament"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {isOpen && (
            < >
              <Announce />
              <Couple />
              <Memories />
              <Timer />
              <RSVP />
              <Plan />
              <WeddingGift />
              <TurutMengundang/>
              <Footer />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
