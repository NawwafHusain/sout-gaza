import React from "react";
import Image from "next/image";
import { Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-auto border-t-4 border-primary text-black flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between items-center lg:px-[20vh] py-10 relative">
      <div className="absolute w-full left-0 border-b-4 border-red-600 top-3" />
      <div className="absolute w-full left-0 border-b-4 border-black top-1" />
      <div className="flex flex-col justify-start items-start">
        <Image
          src="/images/Logo.png"
          width={300}
          height={300}
          className="lg:w-[11vw] object-contain"
        />
        <p className="text-center text-3xl font-bold">Sout Gaza</p>
        <p className="text-xl text-center">Contact: CV@SoutGaza.com </p>
        <p className="text-xl text-center">
          Send CV&apos;s to: CV@SoutGaza.com{" "}
        </p>
      </div>
      <div className="flex h-full items-center gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64"
          height="64"
          viewBox="0 0 50 50"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="70"
          height="70"
          viewBox="0 0 64 64"
        >
          <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64"
          height="64"
          viewBox="0 0 50 50"
        >
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
        </svg>
      </div>
    </footer>
  );
}
