import hat from "../../public/logo-hat.jpg";
import tee1 from "../../public/cat-flag-tee.jpg";
import tee2 from "../../public/cowboy-tee.jpg";
import tee3 from "../../public/flower-tee.jpg";
import Link from "next/link";
import MerchCarousel from "./MerchCarousel";
import Image from "next/image";
import merchBackground from "../../public/WIFDBG.jpg";

export default function Merch() {
  return (
    <section className="h-screen relative bg-[#e65935] flex flex-col items-center justify-center lg:flex-row gap-10 lg:gap-[50px] px-[50px] md:px-[100px] lg:px-[250px]">
      <div className="flex justify-center items-center flex-col gap-6 relative z-20 w-full lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Merch</h2>
        <div className="flex flex-col gap-4">
          <p className="w-[300px] text-center">
            Grab your official Beauty School merch and rep the band wherever you
            go. Every purchase helps us keep making music, touring, and doing
            what we love.
          </p>
          <Link
            href={"#"}
            className="bg-[#e65935] min-w-1/4 py-3 px-4 text-white mt-6 rounded-lg font-bold text-center shadow-2xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <MerchCarousel images={[hat, tee1, tee2, tee3]} />
      <Image
        src={merchBackground}
        alt="An image of the sky"
        className="absolute inset-0 h-full w-full object-cover z-10"
      />
    </section>
  );
}
