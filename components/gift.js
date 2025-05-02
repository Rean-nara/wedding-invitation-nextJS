"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import Image from "next/image";
import GiftSection from "./giftSection";

const bankOptions = [{
  name: "BRI",
  code: "	002",
  Symbolbank: "/bri.png",
  accountNumber: "353101037504538",
  accountName: "Dwi Fannia Ananda",
},
  {
    name: "Dana",
    code: "008",
    Symbolbank: "/dana.png",
    accountNumber: "083867691938",
 
    accountName: "satria arya diva",
  },
  {
    name: "BANK BCA",
    code: "014",
 
    Symbolbank: "/bca.png",
    accountNumber: "8005130235",
    accountName: "Satria Arya Diva",
  },
];

export default function WeddingGift() {
  const [selectedBank, setSelectedBank] = useState(bankOptions[0]);
  const [form, setForm] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedBank.accountNumber);
    alert("Account number copied!");
  };

  return (
    <div className=" mt-44 h-fit py-10 px-4   rounded-t-md    bg-[#145555] text-yellow-100 flex flex-col items-center font-sans">
      <h2 className="text-3xl font-bold mb-2">Wedding Gift</h2>
      <p className="text-center max-w-md mb-6 text-sm">
        Your blessing and coming to our wedding are enough for us. However, if you want to give a gift we provide a Digital Envelope to make it easier for you. Thank you
      </p>

      <select
        className="mb-4 px-4 py-2 rounded bg-yellow-600 text-white focus:outline-none"
        value={selectedBank.name}
        onChange={(e) =>
          setSelectedBank(
            bankOptions.find((bank) => bank.name === e.target.value) || bankOptions[0]
          )
        }
      >
        {bankOptions.map((bank) => (
          <option key={bank.name} value={bank.name} className=" ">
            {bank.name}
          </option>
        ))}
      </select>

      <div className="bg-white text-yellow-900 h-fit flex flex-col rounded-lg p-4 w-full max-w-md items-center shadow-md mb-4">
       <Image src={selectedBank.Symbolbank} alt={selectedBank.name} width={200} height={400} className=" p-4 " />
        <p className="text-center font-bold text-sm mb-2">
          {selectedBank.name} ({selectedBank.code})
        </p>
        <p className="text-sm">
          <span className="text-gray-500">Account Number:</span>{" "}
          <span className="font-semibold">{selectedBank.accountNumber}</span>
        </p>
        <p className="text-sm">
          <span className="text-gray-500">Account Name:</span>{" "}
          <span className="font-semibold">{selectedBank.accountName}</span>
        </p>
        <button
          onClick={handleCopy}
          className="flex items-center bg-green-500 font-semibold p-2  rounded-full  gap-1 mx-auto mt-3 text-sm border-t   text-white hover:text-yellow-800"
        >
          <Copy size={14}  /> Copy
        </button>
      </div>

      <GiftSection/>
    </div>
  );
}
