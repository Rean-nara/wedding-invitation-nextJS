import Image from "next/image";
import Groom from "@/components/groom";
import Bride from "@/components/bride";
const Couple = () => (
  <div className="flex gap-3 justify-center">
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
);
export default Couple;
