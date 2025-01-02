import Image from "next/image";
import {Josefin_Sans, Josefin_Sans} from "next/font/google";
import {Italianno} from "next/font/google";
import "./globals.css";
import Groom from "@/components/groom";
import Bride from "@/components/bride";
import Drinks from "@/components/drinks";
import Ring from "@/components/ring";
import Camera from "@/components/camera";
import Lunch from "@/components/lunch";
import Closing from "@/components/closing";
import Love from "@/components/love";
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
        <div className="w-[412px] overflow-x-hidden">
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
          {/* Couple */}
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
          <h1 className={`${italianno.className} text-[3.5rem] flex justify-center my-7`}>Our Sweets Memories</h1>
          {/* Memories */}
          <div className="flex flex-col gap-y-6">
            <div className="flex justify-evenly">
              <div className="w-40 h-44 flex justify-center items-center bg-white shadow-md shadow-black/25">
                <div className="w-36 h-40 bg-gray-400 overflow-hidden">
                  <Image src="/moment-1.jpg" alt="Our Moment" width={144} height={160} />
                </div>
              </div>
              <div className="w-40 h-44 flex justify-center items-center bg-white shadow-md shadow-black/25">
                <div className="w-36 h-40 bg-gray-400 overflow-hidden">
                  <Image src="/moment-2.jpg" alt="Our Moment" width={144} height={160} />
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="w-28 h-32 flex justify-center items-center rounded-l-full bg-white shadow-md shadow-black/25">
                <div className="w-24 h-28 rounded-l-full bg-gray-400 overflow-hidden">
                  <Image src="/moment-left-1.png" alt="Our Moment" width={96} height={112} />
                </div>
              </div>
              <div className="w-28 h-32 flex justify-center items-center bg-white shadow-md shadow-black/25">
                <div className="w-24 h-28 bg-gray-400 overflow-hidden">
                  <Image src="/moment-3.jpg" alt="Our Moment" width={96} height={112} className="object-bottom object-none" />
                </div>
              </div>
              <div className="w-28 h-32 flex justify-center items-center rounded-r-full bg-white shadow-md shadow-black/25">
                <div className="w-24 h-28 rounded-r-full bg-gray-400 overflow-hidden">
                  <Image src="/moment-right-1.png" alt="Our Moment" width={96} height={112} />
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="w-40 h-44 flex justify-center items-center bg-white shadow-md shadow-black/25">
                <div className="w-36 h-40 bg-gray-400 overflow-hidden">
                  <Image src="/moment-4.jpg" alt="Our Moment" width={144} height={160} />
                </div>
              </div>
              <div className="w-40 h-44 flex justify-center items-center bg-white shadow-md shadow-black/25">
                <div className="w-36 h-40 bg-gray-400 overflow-hidden">
                  <Image src="/moment-5.jpg" alt="Our Moment" width={144} height={160} />
                </div>
              </div>
            </div>
          </div>
          <h1 className={`${italianno.className} text-[3.5rem] flex justify-center my-7`}>When and Where</h1>
          <p className="flex justify-center">
            Saturday, 17 July 2027, 11:00 AM - 03.00 PM <br /> Avalon Castle, Cockatoo VIC 3781, Australia
          </p>
          {/* Map and RSVP */}
          <div className="flex flex-col mt-4 bg-white shadow-md shadow-black/25 w-max h-max mx-auto">
            <div className="w-80 h-[200px] bg-gray-400">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1136080377696!2d145.5111083!3d-37.927776300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b29d8b91c4e508f%3A0x62d79fdfeb8b7bfc!2sAvalon%20Castle!5e0!3m2!1sen!2sid!4v1735689780501!5m2!1sen!2sid" width={320} height={200} className="border-none" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="w-80 h-auto bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg flex flex-col p-4 animate-fade-in">
              <h1 className="text-2xl font-bold text-gray-700 text-center mb-2">RSVP</h1>
              <h1 className={`text-3xl text-center text-pink-500 italic ${italianno.className}`}>Naruto & Hinata</h1>
              <hr className="w-full border-t-2 border-gray-300 mt-2 mb-4" />
              <form action="" method="post" className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <label htmlFor="names" className="text-sm font-medium text-gray-600">
                    Name(s):
                  </label>
                  <input type="text" id="names" className="w-full outline-none border border-gray-300 rounded-md text-sm px-2 py-1 focus:border-blue-400 focus:ring focus:ring-blue-100 placeholder-gray-400" placeholder="Type here..." />
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="rsvp" id="radio-attend" className="text-sm focus:ring focus:ring-blue-400" />
                  <label htmlFor="radio-attend" className="text-sm text-gray-600">
                    Yes, I will be there
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="rsvp" id="radio-not" className="text-sm focus:ring focus:ring-red-400" />
                  <label htmlFor="radio-not" className="text-sm text-gray-600">
                    Sorry, I can't come
                  </label>
                </div>
                <div className="flex justify-center mt-4">
                  <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm px-6 py-2 shadow-lg transform transition-transform hover:scale-105">
                    RSVP
                  </button>
                </div>
              </form>
            </div>
          </div>
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
          <div className="w-[367px] h-44 bg-gray-400 mx-auto mt-7 mb-2"></div>
        </div>
      </div>
    </main>
  );
}
