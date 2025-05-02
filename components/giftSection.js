"use client";
import { useState } from "react";
import Image from "next/image";
import { Copy } from "lucide-react";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("083867691938");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gifts = [
    {
      name: "Bed Cover",
      price: 500000,
      total: 2,
      image: "/bed.jpeg", // ganti sesuai path gambar kamu
    },
    {
      name: "Mirror",
      price: 300000,
      total: 2,
      image: "/mirror.jpeg", // ganti sesuai path gambar kamu
    }, 
  ];

  return (
    <section className="bg-[#145555] mt-4  h-fit p-4 text-yellow-100 font-sans">
 
      <p className="text-center text-sm mb-6">
        Silahkan kirimkan hadiah kepada kedua mempelai
      </p>

      <div className="bg-yellow-50 text-start text-yellow-900 rounded-lg p-4 mb-6">
        <p>
          <span className="font-semibold">Recipient&apos;s Name:</span> Fannia
        </p>
        <p>
          <span className="font-semibold">Phone Number:</span> 081425462354
        </p>
        <p>
          <span className="font-semibold">Alamat Pengiriman:</span>jl hm yamin gg lurah
        </p>
        <button
          onClick={handleCopy}
          className="text-xs mt-2 flex items-center gap-1 text-green-700 hover:underline"
        >
          <Copy size={14} /> {copied ? "Copied!" : "Copy Address"}
        </button>
      </div>

      <div className="text-yellow-100 font-semibold mb-2">
        Gift Recommendations
      </div>

      <div className="space-y-4 min-h-fit">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className="bg-yellow-50 text-yellow-900 rounded-lg flex gap-4a  items-center"
          >
            <Image
              src={gift.image}
              alt={gift.name}
              width={190}
              height={190}
              className="rounded p-0 bg-center bg-cover m-0 object-cover"
            />
            <div className="flex flex-col gap-3 pl-2" >
              <p className="font-bold text-[#145555]">{gift.name}</p>
              <p>Rp {gift.price.toLocaleString("id-ID")}</p>
              <p>Total: {gift.total}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
