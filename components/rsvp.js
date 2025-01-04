import {Italianno} from "next/font/google";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
const RSVP = () => (
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
);
export default RSVP;
