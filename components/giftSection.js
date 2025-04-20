"use client";
import { useState } from "react";
import Image from "next/image";
import { Copy } from "lucide-react";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Jalan Kenari");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gifts = [
    {
      name: "Bed Cover",
      price: 500000,
      total: 2,
      image: "/images/bedcover.jpg", // ganti sesuai path gambar kamu
    },
    {
      name: "Mirror",
      price: 300000,
      total: 2,
      image: "/images/mirror.jpg", // ganti sesuai path gambar kamu
    },
  ];

  return (
    <section className="bg-emerald-900 min-h-screen p-4 text-yellow-100 font-sans">
 
      <p className="text-center text-sm mb-6">
        Silahkan kirimkan hadiah kepada kedua mempelai
      </p>

      <div className="bg-yellow-50 text-yellow-900 rounded-lg p-4 mb-6">
        <p>
          <span className="font-semibold">Recipient&apos;s Name:</span> Sandi
        </p>
        <p>
          <span className="font-semibold">Phone Number:</span> 081425462354
        </p>
        <p>
          <span className="font-semibold">Alamat Pengiriman:</span> Jalan Kenari
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

      <div className="space-y-4">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className="bg-yellow-50 text-yellow-900 rounded-lg flex gap-4 p-4 items-center"
          >
            <Image
              src={gift.image}
              alt={gift.name}
              width={100}
              height={100}
              className="rounded object-cover"
            />
            <div>
              <p className="font-bold">{gift.name}</p>
              <p>Rp {gift.price.toLocaleString("id-ID")}</p>
              <p>Total: {gift.total}</p>
              <button className="text-xs text-green-700 mt-2 hover:underline">
                Gift Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
