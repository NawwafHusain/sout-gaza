"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarsouelComponent() {
  return (
    <div className="w-full md:w-screen md:h-screen h-full absolute z-0 ">
      <h2
        className={`absolute bottom-2 text-center z-10 text-[5vw] font-bold text-white w-full text-border  `}
      >
        GAZA NOW
      </h2>
      <Carousel
        className="w-full h-full relative z-0"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        {" "}
        <CarouselContent className="w-full  md:h-screen h-full relative">
          {images.map((img, index) => (
            <CarouselItem key={index} className="h-full ">
              <Image
                src={img}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-5" />
        <CarouselNext className="right-5" /> */}
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full bg-black z-[5] opacity-40"></div>
    </div>
  );
}

const images = [
  "/images/1.jpg",
  "/images/2.png",

  "/images/4.jpg",
  "/images/5.jpg",
];
