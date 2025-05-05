import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Satria & Fannia",
  description: "Undangan digital pernikahan Satria & Fannia. Klik untuk lihat acara, dan lainnya.",
  icons: {
    icon: "/LOve.ico", // pastikan file ini ada di folder public
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
      </head>
      <body>
        {children}
        {/* Menambahkan Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
