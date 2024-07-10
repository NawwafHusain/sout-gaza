import React from "react";
import { oswald } from "../layout";
import Image from "next/image";
export default function Page() {
  return (
    <main
      className={`flex flex-col items-center justify-start ${oswald.className}`}
    >
      <h1 className="text-[6vw]">GAZAN TALENTS</h1>
      <h2 className="text-[2vw]">Persevered through adversity</h2>
      <div className="grid grid-cols-2 gap-x-8  px-10 mb-24 mt-16">
        {heros.map((hero, index) => (
          <div
            className="flex  items-start justify-center gap-4 mb-8"
            key={index}
          >
            <Image
              src={hero.img}
              alt={hero.name}
              width={500}
              height={500}
              className="w-[50%]"
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-[2vw]">{hero.name}</h3>
              <p className="text-[1.5vw]">{hero.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const heros = [
  {
    name: "Abdullah",
    img: "/images/rubble1.avif",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi. Quo, quod.",
  },
  {
    name: "Abdullah",
    img: "/images/rubble1.avif",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi. Quo, quod.",
  },
  {
    name: "Abdullah",
    img: "/images/rubble1.avif",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi. Quo, quod.",
  },
  {
    name: "Abdullah",
    img: "/images/rubble1.avif",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi. Quo, quod.",
  },
  {
    name: "Abdullah",
    img: "/images/rubble1.avif",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi. Quo, quod.",
  },
];
