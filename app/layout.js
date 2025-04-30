import "./globals.css";
import "./globals.css";
 

export const metadata  = {
  metadataBase: new URL("https://satriafania.vercel.app"),
  title: "Satria & Fannia",
  description: "Undangan digital pernikahan Satria & Fannia. Klik untuk lihat acara , dan lainnya.",
  icons: {
    icon: "/LOve.ico",
    shortcut: "/LOve.ico",
  },
  openGraph: {
    title: "Undangan Pernikahan Satria & Fannia",
    description: "Kami mengundang Anda ke hari bahagia kami.",
    url: "https://satriafania.vercel.app",
    images: [
      {
        url: "/LOve.ico",
        width: 800,
        height: 600,
        alt: "Cover Pernikahan",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
