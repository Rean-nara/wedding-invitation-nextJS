import Image from "next/image";
import {Italianno} from "next/font/google";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
const Announce = () => (
  <div>
    <Image src="/header-flower.png" alt="Header Flower" width={412} height={38} priority className="animate-slideInDown" />
    <h1 className={`${italianno.className} text-[3.5rem] flex justify-center animate-spinnerGrow`}>We're Getting Married</h1>
    <div className="flex justify-center relative animate-spinnerGrow">
      <Image className="z-20" src="/frame-couple.png" alt="Frame Couple" width={326} height={396} priority />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-max h-max">
        <Image src="/couple.png" alt="Frame Couple" width={233} height={265} priority />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center animate-spinnerGrow">
      <h1 className={`${italianno.className} text-[3.5rem]/[3rem] flex justify-center`}>Naruto & Hinata</h1>
      <h2>We're getting Married in</h2>
      <h2>17.02.2027</h2>
    </div>
    <Image src="/bottom-flower.png" alt="Bottom Flower" width={411} height={196} className={`h-[196px] object-cover`} />
  </div>
);

export default Announce;
