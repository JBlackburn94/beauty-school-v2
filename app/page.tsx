"use client";
import Hero from "./components/Hero";
import { ParallaxBanner } from "react-scroll-parallax";
import Merch from "./components/Merch";

export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxBanner
        layers={[{ image: "/parallax-1.jpg", speed: -15 }]}
        className="aspect-[2/1 h-screen"
      />
      <Merch />
      <ParallaxBanner
        layers={[{ image: "/parallax-2.jpg", speed: -15 }]}
        className="aspect-[2/1 h-screen"
      />
    </main>
  );
}
