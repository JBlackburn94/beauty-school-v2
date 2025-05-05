"use client";
import Image from "next/image";
import logo from "../../public/bs-logo.png";
import hero from "../../public/hero.jpg";
import Link from "next/link";
import Overlay from "./Overlay";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const logoRef = useRef(null);
  const iconsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Entry animation
    tl.fromTo(
      logoRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).fromTo(
      iconsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );

    // Fade out logo after 50px scroll with explicit fromTo
    gsap.fromTo(
      logoRef.current,
      { y: 0, opacity: 1 },
      {
        y: -50,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=50 top",
          end: "+=200",
          scrub: true,
        },
      }
    );

    // Fade out icons after 75px scroll with explicit fromTo
    gsap.fromTo(
      iconsRef.current,
      { y: 0, opacity: 1 },
      {
        y: -50,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=75 top",
          end: "+=250",
          scrub: true,
        },
      }
    );

    // Pin the section for brief sticky effect
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300",
      pin: true,
      pinSpacing: true,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black relative h-screen flex justify-center items-center px-[50px]"
    >
      <Overlay />
      <div className="relative z-20 flex flex-col justify-center items-center gap-10">
        <div ref={logoRef}>
          <Image src={logo} alt="Beauty School logo" height={200} />
        </div>
        <div ref={iconsRef} className="flex gap-4">
          <Link href={"/"}>
            <FaInstagram className="text-[#e65935]" size={32} />
          </Link>
          <Link href={"/"}>
            <FaSpotify className="text-[#e65935]" size={32} />
          </Link>
          <Link href={"/"}>
            <FaTiktok className="text-[#e65935]" size={32} />
          </Link>
          <Link href={"/"}>
            <FaTwitter className="text-[#e65935]" size={32} />
          </Link>
          <Link href={"/"}>
            <FaYoutube className="text-[#e65935]" size={32} />
          </Link>
        </div>
      </div>
      <Image
        src={hero}
        alt="Beauty School promo"
        className="absolute inset-0 h-full w-full object-cover z-10"
      />
    </section>
  );
}
