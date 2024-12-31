import Image from "next/image";
import {Josefin_Sans, Josefin_Sans} from "next/font/google";
import {Italianno} from "next/font/google";
import "./globals.css";
import Groom from "@/components/groom";
import Bride from "@/components/bride";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <main className={josefin.className}>
      <div className="bg-white flex justify-center">
        <div className="w-[412px]">
          <Image src="/header-flower.png" alt="Header Flower" width={412} height={38} priority />
          <h1 className={`${italianno.className} text-[3.5rem] flex justify-center`}>We're Getting Married</h1>
          <div className="flex justify-center">
            <Image className="z-20" src="/frame-couple.png" alt="Frame Couple" width={326} height={396} priority />
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 w-max h-max">
              <Image src="/couple.png" alt="Frame Couple" width={233} height={265} priority />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className={`${italianno.className} text-[3.5rem]/[3rem] flex justify-center`}>Naruto & Hinata</h1>
            <h2>We're getting Married in</h2>
            <h2>17.02.2027</h2>
          </div>
          <Image src="/bottom-flower.png" alt="Bottom Flower" width={411} height={196} className="h-[196px] object-cover" />
          {/* Timer */}
          <div className="flex gap-7 justify-center mb-7 mt-7">
            <div className="relative">
              <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
              <div className="rounded-full w-[68px] h-[72px] bg-gray-300 flex justify-center items-center relative text-center">
                365 <br /> Days
              </div>
            </div>
            <div className="relative">
              <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
              <div className="rounded-full w-[68px] h-[72px] bg-gray-300 flex justify-center items-center relative text-center">
                05 <br /> Hours
              </div>
            </div>
            <div className="relative">
              <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
              <div className="rounded-full w-[68px] h-[72px] bg-gray-300 flex justify-center items-center relative text-center">
                35 <br /> Min
              </div>
            </div>
            <div className="relative">
              <Image src="/flower-circle.png" alt="Flower Circle" width={96} height={94} className="absolute w-[96px] h-[94px] object-cover origin-center rotate-[38deg] z-20 -top-[0.7rem] left-[0.2rem]" />
              <div className="rounded-full w-[68px] h-[72px] bg-gray-300 flex justify-center items-center relative text-center">
                35 <br /> Sec
              </div>
            </div>
          </div>
          {/* Couple */}
          <div className="flex gap-3 justify-center mb-7">
            <div className="rounded-t-full w-44 h-max bg-white shadow-md shadow-black/25 flex flex-col relative">
              <div className="flex justify-center">
                <Image src="/groom.jpg" alt="Groom" width={150} height={185} className="w-[150px] h-[185px] rounded-t-full mt-4" />
              </div>
              <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white left-2 bottom-[2.5rem]"></div>
              <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white left-[3.25rem] bottom-[2rem]"></div>
              <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white left-[4.25rem] bottom-[2.25rem]"></div>
              <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white left-[5.25rem] bottom-[2rem]"></div>
              <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white left-[7.50rem] bottom-[2rem]"></div>
              <Groom />
              <h1 className="z-30 ml-[0.8rem] text-sm">Uzumaki Naruto</h1>
              <p className="z-30 ml-[0.8rem] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. fringilla pellesque amet tempus.</p>
            </div>
            <div className="rounded-t-full w-44 h-max bg-white shadow-md shadow-black/25 flex flex-col relative">
              <div className="flex justify-center">
                <Image src="/bride.jpeg" alt="Groom" width={150} height={185} className="w-[150px] h-[185px] rounded-t-full mt-4" />
              </div>
              <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white right-2 bottom-[2.5rem]"></div>
              <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white right-[3.25rem] bottom-[2rem]"></div>
              <div className="absolute w-11 h-[101px] rounded-t-full z-20 bg-white right-[4.25rem] bottom-[2.25rem]"></div>
              <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white right-[5.25rem] bottom-[2rem]"></div>
              <div className="absolute w-11 h-[85px] rounded-t-full z-20 bg-white right-[7.50rem] bottom-[2rem]"></div>
              <Bride />
              <h1 className="z-30 mr-[0.8rem] text-sm text-end">Hinata Hyuga</h1>
              <p className="z-30 mr-[0.8rem] text-xs text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. fringilla pellesque amet tempus.</p>
            </div>
          </div>
          <h1 className={`${italianno.className} text-[3.5rem] flex justify-center`}>Our Sweets Memories</h1>
        </div>
      </div>
    </main>
  );
}
