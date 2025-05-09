"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import gsap from "gsap";

type MerchCarouselProps = {
  images: StaticImageData[];
};

export default function MerchCarousel({ images }: MerchCarouselProps) {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const animateOut = (direction: "left" | "right", onComplete: () => void) => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: direction === "left" ? -50 : 50,
      opacity: 0,
      duration: 0.4,
      onComplete,
    });
  };

  const animateIn = (direction: "left" | "right") => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { x: direction === "left" ? -50 : 50 },
      { x: 0, opacity: 1, duration: 0.4 }
    );
  };

  const handlePrev = () => {
    animateOut("right", () => {
      setCurrent((prev) => {
        const newIndex = prev === 0 ? images.length - 1 : prev - 1;
        animateIn("left");
        return newIndex;
      });
    });
  };

  const handleNext = () => {
    animateOut("left", () => {
      setCurrent((prev) => {
        const newIndex = prev === images.length - 1 ? 0 : prev + 1;
        animateIn("right");
        return newIndex;
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/2 z-20">
      <div ref={imageRef}>
        <Image
          src={images[current]}
          alt={`Merch Item ${current + 1}`}
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="bg-[#e65935] text-white px-4 py-2 font-bold rounded shadow-2xl hover:bg-[#ff6a6a]"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-[#e65935] text-white px-4 py-2 font-bold rounded shadow-2xl hover:bg-[#ff6a6a]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
