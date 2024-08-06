import React from "react";
import { oswald } from "../layout";
import Image from "next/image";

import Link from "next/link";

export default function Page() {
  return (
    <main
      className={`flex flex-col items-center justify-start ${oswald.className}`}
    >
      <h1 className="lg:text-[6vw] text-[8vw] mt-10 lg:mt-0">GAZAN TALENTS</h1>
      <h2 className="lg:text-[2vw] text-[4vw]">Persevered through adversity</h2>
      <div className="flex flex-col lg:w-[60vw] mt-10 mb-24 gap-4">
        {heros.map((hero, index) => (
          <div
            className="flex flex-row  gap-10 flex-1 justify-between lg:items-start items-center h-full"
            key={index}
          >
            <h3 className="lg:text-[2vw] text-[5vw]">{hero.name}</h3>
            {/* <p className="text-[1.5vw]">{hero.paragraph}</p> */}
            <Link
              href={`/CVs/${hero.cv}`}
              target="_blank"
              className="border-2 border-black hover:border-transparent  shadow-lg rounded-md px-4 py-3 text-center self-end"
            >
              View CV
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

const heros = [
  {
    name: "Aya Hammad",
    img: "/images/rubble1.avif",
    cv: "aya.pdf",
  },
  {
    name: "Mousa Yousef Abu Harbid ",
    img: "/images/rubble1.avif",
    cv: "mousa.pdf",
  },
  {
    name: "Maher A. H . Al-Talla",
    img: "/images/rubble1.avif",
    cv: "maher.pdf",
  },
  {
    name: "Eisha Saleh Hashem Zaqzouq",
    img: "/images/rubble1.avif",
    cv: "eisha.pdf",
  },
];

// <div
// className="flex  items-start justify-center gap-4 mb-8"
// key={index}
// >
// <Image
//   src={hero.img}
//   alt={hero.name}
//   width={500}
//   height={500}
//   className="w-[50%]"
// />

// <div className="flex flex-col gap-4 flex-1 justify-between h-full">
//   <h3 className="text-[2vw]">{hero.name}</h3>
//   {/* <p className="text-[1.5vw]">{hero.paragraph}</p> */}
//   <Link
//     href={`/CVs/${hero.cv}`}
//     target="_blank"
//     className="border-2 border-black hover:border-0  shadow-lg rounded-md px-4 py-3 text-center self-end"
//   >
//     View CV
//   </Link>
// </div>
// </div>
