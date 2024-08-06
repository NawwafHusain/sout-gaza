import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Nav from "./components/Nav";
import { Cairo } from "next/font/google";
import Footer from "./components/Footer";
import { Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const cairo = Cairo({ subsets: ["latin"] });
export const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sout Gaza",
  description:
    "A non-profit organization that aims to provide stable future for Gazans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className} relative`}>
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
