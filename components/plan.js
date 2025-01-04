import {Italianno} from "next/font/google";
import Image from "next/image";
import Drinks from "@/components/drinks";
import Ring from "@/components/ring";
import Camera from "@/components/camera";
import Lunch from "@/components/lunch";
import Closing from "@/components/closing";
import Love from "@/components/love";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
const Plan = () => (
  <div className="relative">
    <h1 className={`${italianno.className} text-[3.5rem] flex justify-center my-7`}>Our Wedding Plan</h1>
    {/* Rundown */}
    <div className="w-60 h-[545px] rounded-t-full outline-[6px] outline outline-gray-300 mx-auto bg-white shadow-lg shadow-black/25 relative">
      {/* Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300">
        <div className="absolute top-[6.5rem] left-1/2 transform -translate-x-1/2">
          <span>
            <Love />
          </span>
        </div>
        <div className="absolute top-52 left-1/2 transform -translate-x-1/2">
          <span>
            <Love />
          </span>
        </div>
        <div className="absolute top-[19.5rem] left-1/2 transform -translate-x-1/2">
          <span>
            <Love />
          </span>
        </div>
        <div className="absolute top-[25rem] left-1/2 transform -translate-x-1/2">
          <span>
            <Love />
          </span>
        </div>
        <div className="absolute top-[31rem] left-1/2 transform -translate-x-1/2">
          <span>
            <Love />
          </span>
        </div>
      </div>
      {/* Activity */}
      <div className="absolute top-20 w-full flex flex-col items-center gap-10 -left-[3.75rem]">
        <div className="text-center">
          <Drinks />
          <p className="text-sm text-gray-500 mt-1">Welcome Drinks</p>
        </div>
        <div className="text-center">
          <Ring />
          <p className="text-sm text-gray-500 mt-1">Ceremony</p>
        </div>
        <div className="text-center">
          <Camera />
          <p className="text-sm text-gray-500 mt-1">Party Photos</p>
        </div>
        <div className="text-center">
          <Lunch />
          <p className="text-sm text-gray-500 mt-1">Lunch Time</p>
        </div>
        <div className="text-center">
          <Closing />
          <p className="text-sm text-gray-500 mt-1">Closing</p>
        </div>
      </div>
      {/* Time */}
      <div className={`${italianno.className} absolute top-0 w-full -right-[3.75rem]`}>
        <p className="text-2xl text-gray-500 absolute top-[6rem] left-1/2 transform -translate-x-1/2">11.00 am</p>
        <p className="text-2xl text-gray-500 absolute top-[12.5rem] left-1/2 transform -translate-x-1/2">12.00 pm</p>
        <p className="text-2xl text-gray-500 absolute top-[19rem] left-1/2 transform -translate-x-1/2">01.00 pm</p>
        <p className="text-2xl text-gray-500 absolute top-[24.5rem] left-1/2 transform -translate-x-1/2">02.00 pm</p>
        <p className="text-2xl  text-gray-500 absolute top-[30.5rem] left-1/2 transform -translate-x-1/2">03.00 pm</p>
      </div>
    </div>
    {/* Moving flower */}
    <div className="absolute top-20 right-0">
      <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
    </div>
    <div className="absolute top-[23.5rem] -right-5">
      <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
    </div>
    <div className="absolute top-20 left-0 -scale-x-100">
      <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
    </div>
    <div className="absolute top-[23.5rem] -left-5 -scale-x-100">
      <Image src="/moving-flower.png" alt="Moving Flower" width={130} height={126} />
    </div>
  </div>
);

export default Plan;
