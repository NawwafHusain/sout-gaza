"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="w-full lg:flex-row flex-col  flex  items-center px-24 lg:pt-4 pt-2  pb-4 bg-green-100">
      <Image
        src="/images/logo.png"
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
        <Link href={"/heros"} className={`${path == "/heros" && "underline"}`}>
          <li className="hover:font-bold">Gazan Heros</li>
        </Link>
        <Link
          href={"/contact"}
          className={`${path == "/contact" && "underline"}`}
        >
          <li className="hover:font-bold">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
