import type { Metadata } from "next";

import "./globals.css";
import { Mona_Sans } from "next/font/google";
import { Toaster } from "sonner";
// const monoSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const monoSans = Mona_Sans({
  variable: "--font-mono-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});




export const metadata: Metadata = {
  title: "Ecoprep App",
  description: "An AI Job Interview Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monoSans.className} antialiased`}
      >
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
