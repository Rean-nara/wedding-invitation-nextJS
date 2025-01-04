import {Josefin_Sans} from "next/font/google";
import "./globals.css";
import Announce from "@/components/announce";
import Timer from "@/components/timer";
import Couple from "@/components/couple";
import Memories from "@/components/memories";
import RSVP from "@/components/rsvp";
import Plan from "@/components/plan";
import Footer from "@/components/footer";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <main className={josefin.className}>
      <div className="bg-white flex justify-center">
        <div className="w-[412px] overflow-hidden">
          <Announce />
          <Timer />
          <Couple />
          <Memories />
          <RSVP />
          <Plan />
          <Footer />
        </div>
      </div>
    </main>
  );
}
