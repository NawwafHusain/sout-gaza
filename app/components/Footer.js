import React from "react";
import Image from "next/image";
import { Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-green-200 flex justify-between px-20 py-10">
      <div className="flex flex-col justify-start items-start">
        <Image
          src="/images/logo.png"
          width={300}
          height={300}
          className="lg:w-[11vw] object-contain"
        />
        <p className="text-center text-3xl font-bold">Sout Gaza</p>
        <p className="text-xl text-center">Contact: CV@SoutGaza.com </p>
        <p className="text-xl text-center">Send CV's to: CV@SoutGaza.com </p>
      </div>
      <div>
        Illustration by{" "}
        <a href="https://icons8.com/illustrations/author/eEbrZFlkyZbD">
          Anna A
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </div>
    </footer>
  );
}
