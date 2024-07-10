"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="w-full lg:flex-row flex-col  flex  items-center px-24 lg:pt-4 pt-2  pb-6 border-b-4 border-primary relative">
      <Image
        src="/images/Logo.png"
        width={300}
        height={300}
        className="lg:w-[11vw] object-contain"
      />
      <ul className="flex  gap-4 md:text-xl md:absolute md:left-1/2 md:-translate-x-1/2 md:top-auto  md:w-auto w-max text-lg">
        <Link href={"/"} className={`${path == "/" && "underline"}`}>
          <li className="hover:font-bold">Home</li>
        </Link>
        <Link href={"/about"} className={`${path == "/about" && "underline"}`}>
          <li className="hover:font-bold">About Us</li>
        </Link>
        <Link
          href={"/talents"}
          className={`${path == "/talents" && "underline"}`}
        >
          <li className="hover:font-bold">Gazan Talents</li>
        </Link>
        <Link
          href={"/contact"}
          className={`${path == "/contact" && "underline"}`}
        >
          <li className="hover:font-bold">Contact Us</li>
        </Link>
      </ul>
      <div className="absolute w-full left-0 border-b-4 border-red-600 bottom-3" />
      <div className="absolute w-full left-0 border-b-4 border-black bottom-1" />
    </nav>
  );
}
