import Image from "next/image";
const Timer = () => (
  <div className="flex gap-7 justify-center my-7">
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
);
export default Timer;
