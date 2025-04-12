import { useRouter } from "next/router";
import Link from "next/link";

export default function CoverPage() {
 

  const formatName = (name) => {
    if (!name) return "";
    return name.split("-").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-center p-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/Satrial.png')" }}
    >
      <div className="backdrop-blur-sm bg-black/50 p-5 rounded-xl animate-fadeIn">
        <p className="text-gray-200 mb-2 text-sm">Kami mengundangmu,</p>
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">{formatName(name)}</h1>

        <Link href={`/undangan/${name}/detail`}>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full transition duration-300">
            Buka Undangan
          </button>
        </Link>
      </div>
    </div>
  );
}
