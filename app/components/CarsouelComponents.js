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

export default function CarsouelComponents() {
  return (
    <div className="w-full md:w-[48vw] md:h-[70vh] h-[50vh] relative">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-7xl font-bold text-white">
        GAZA NOW
      </h2>
      <Carousel
        className="w-full h-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        {" "}
        <CarouselContent className="w-full md:w-[48vw] md:h-[70vh] h-[50vh] relative ">
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
    </div>
  );
}

const images = [
  "/images/rubble1.avif",
  "/images/original.jpg",
  "/images/rubble2.avif",
  "/images/explode.avif",
  "/images/rubble3.avif",
  "/images/child.avif",
  "/images/original.avif",
];
