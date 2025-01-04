import {Italianno} from "next/font/google";
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
const When = () => (
  <div>
    <h1 className={`${italianno.className} text-[3.5rem] flex justify-center my-7`}>When and Where</h1>
    <p className="flex justify-center">
      Saturday, 17 July 2027, 11:00 AM - 03.00 PM <br /> Avalon Castle, Cockatoo VIC 3781, Australia
    </p>
  </div>
);
export default When;
