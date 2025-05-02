"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsVisible } from "./visibilityobserver";

const Timer = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const targetDate = new Date("2025-05-10T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Waktu habis
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer(); // panggil langsung biar ga delay 1 detik
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i  ) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center   min-h-fit    ">
      <div className="grid grid-cols-2 gap-4  mt-5 z-40">
        {timeUnits.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="relative    align-middle"
            variants={boxVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={i}
          >
            <Image
              src="/flower-circle.png"
              alt="Flower Circle"
              width={96}
              height={94}
              priority={i < 2}
              className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]"
            />
            <div className="rounded-full w-[72px] h-[76px] bg-gray-300 flex flex-col justify-center items-center text-yellow-900 font-semibold relative z-30 text-sm text-center shadow-md">
              {unit.value}
              <span className="text-[11px] mt-0.5 font-normal">{unit.label}</span>
            </div>
          </motion.div>
        ))}
       
        <div ref={ref} className="w-full h-1  bg-transparent" />
      </div>
      
    </div>
  );
};

export default Timer;
