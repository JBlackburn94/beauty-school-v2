import Image from "next/image";
import merchImg from "../../public/merch-img.jpeg";
import Link from "next/link";
import MerchCarousel from "./MerchCarousel";

export default function Merch() {
  return (
    <section className="h-screen bg-[#e65935] flex flex-col justify-center lg:flex-row gap-10 lg:gap-[100px] items-center px-[50px] md:px-[100px] lg:px-[250px]">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Merch
        </h2>
        <div>
          <p className="text-white w-[300px]">
            Grab your official Beauty School merch and rep the band wherever you
            go. Every purchase helps us keep making music, touring, and doing
            what we love.
          </p>
          <Link
            href={"#"}
            className="bg-white py-3 px-4 text-[#e65935] mt-[100px] rounded-lg font-bold text-center shadow-2xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <MerchCarousel images={[merchImg, merchImg, merchImg, merchImg]} />
    </section>
  );
}
