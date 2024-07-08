"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useRef } from "react";

export default function Help() {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const imageRef = useRef(null);
  const [imgSrc, setImgSrc] = React.useState("/images/talk.png");

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        //markers: true,
        onEnter: () => {
          setImgSrc("/images/talk.png");
        },
        onEnterBack: () => {
          setImgSrc("/images/talk.png");
        },
      },
    });
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef1.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        //markers: true,
        onEnter: () => {
          setImgSrc("/images/social.png");
        },
        onEnterBack: () => {
          setImgSrc("/images/social.png");
        },
      },
    });
  });

  return (
    <section
      className="w-screen  h-auto flex flex-col lg:flex-row items-start justify-center py-10 lg:px-20 px-4 gap-4 relative "
      id="help"
    >
      <div className="flex flex-col items-center justify-center flex-1 h-max-content h-[300vh] ">
        <div
          className="flex-1 h-[100vh] flex justify-center flex-col items-start"
          ref={sectionRef}
        >
          <h1 className="text-4xl">ShaRE "Sout Gaza"'s website</h1>
          <p>Sharing on Social Media Can be t</p>
        </div>
        <div
          className="flex-1 h-[100vh] flex justify-center flex-col items-start"
          ref={sectionRef1}
        >
          <h1 className="text-4xl">Share on Social Media</h1>
          <p>Sharing on Social Media Can be t</p>
        </div>
        <div
          className="flex-1 h-[100vh] flex justify-center flex-col items-start"
          ref={sectionRef2}
        >
          <h1 className="text-4xl">Let it be a tale.</h1>
          <p>Sharing on Social Media Can be t</p>
        </div>
      </div>
      <div className="h-[100vh] flex justify-center items-center w-full md:w-[40vw] sticky top-0">
        <Image
          src={imgSrc}
          width={1000}
          height={1000}
          className=" object-contain md:h-[70vh] w-full"
          ref={imageRef}
        />
      </div>
    </section>
  );
}
