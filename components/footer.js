// app/components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { Italianno } from "next/font/google";
import { Instagram, PhoneCall, Heart } from "lucide-react";

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 mt-20 shadow-inner shadow-pink-100/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        {/* Nama Pasangan + Tanggal */}
        <h2 className={`${italianno.className} text-5xl text-rose-300 mb-2`}>
          Fannia & Satria
        </h2>
        <p className="text-sm italic text-gray-400 tracking-wide">10 Mei 2025</p>

        {/* Divider elegan */}
        <div className="flex items-center justify-center gap-2 my-6">
          <div className="h-px w-16 bg-rose-400/30" />
          <Heart className="w-4 h-4 text-rose-400/70" />
          <div className="h-px w-16 bg-rose-400/30" />
        </div>

        {/* Quote manis */}
        <p className="max-w-xl mx-auto text-yellow-400 text-base leading-relaxed italic">
          "A journey of love, laughter, and happily ever after. Thank you for being part of our story."
        </p>

        {/* Ikon Sosial */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/satriaarya05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-500 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/6283867691938"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition"
          >
            <PhoneCall className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-8">
          © {currentYear} Fannia & Satria. Made with love 💕
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
