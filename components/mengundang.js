// app/components/TurutMengundang.tsx
"use client";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const TurutMengundang = () => {
  const keluargaBesar = [
  
  ];

  return (
    <section className="bg-slate-950 text-white py-20 px-6 animate-fadeInSlow shadow-inner shadow-pink-100/10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center space-y-12"
      >
        {/* Judul */}
        <div className="space-y-4">
          <HeartHandshake className="w-14 h-14 mx-auto text-rose-400/80 transition-transform transform hover:scale-110" />
          <h2 className="text-4xl font-extrabold text-rose-300 tracking-wider">
            Turut Mengundang Kedua Keluarga Besar Mempelai
          </h2>
          <p className="text-gray-400 text-lg italic max-w-3xl mx-auto">
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu dalam momen bahagia ini.
          </p>
        </div>

        {/* Daftar Keluarga Besar */}
        <div className="flex flex-wrap justify-center gap-10 text-left">
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-full max-w-xs">
            <ul className="space-y-3 text-gray-300 text-base">
              {keluargaBesar.map((nama, index) => (
                <li key={index} className="border-l-4 border-rose-400 pl-4 hover:bg-rose-500/10 transition-colors duration-300 rounded-md py-2">
                  {nama}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TurutMengundang;
