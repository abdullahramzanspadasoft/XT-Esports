"use client";

import Image from "next/image";
import marketPlaceData from "@/constant/market_place.json";
import { PlusIcon } from "@/icons";
import BlacImage from "@/public/Image/Hero/BlacImage.png";
import market from "@/public/Image/MarketPlace/Rectangle 65.png";
import baground from "@/public/Image/PopularTournament/Rectangle 55.png";

const MarketPlace = () => {
  const { marketplace } = marketPlaceData;

  return (
    <div className="w-full relative bg-[#010D18] overflow-hidden min-h-screen -mt-30 md:-mt-50 pt-0 pb-[60px] md:pb-[112px]">
      <Image
        src={BlacImage}
        alt="Background"
        fill
        className="object-cover opacity-20 z-0"
      />
      <div
        className="absolute left-0 right-0 bottom-0 overflow-hidden"
        style={{
          height: "1013.38px",
          width: "1920px",
          transform: "translateX(500px) rotate(-40deg)",
        }}
      >
        <Image
          src={baground}
          alt="Invite and Earn"
          fill
          priority
          className="object-cover object-bottom opacity-50"
          sizes="1920px"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,22,32,0.25) 0%, rgba(0,0,0,0.0) 60%)",
            backdropFilter: "blur(6px)",
          }}
        />
      </div>

      <section className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mt-0 mb-7 md:mb-10">
          <h2 className="font-['Poppins'] text-[38px] sm:text-[52px] md:text-[66px] lg:text-[82px] leading-tight text-white font-bold">
            Explore{" "}
            <span className="font-light text-[#0185EB]">Marketplace</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px] xl:gap-[32px] justify-items-center">
          {marketplace.products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-[#032B51] border border-white/5 w-full transition-colors duration-300 hover:bg-[#043a6d]"
              style={{
                padding: "clamp(8px, 1vw, 10px)",
                height: "clamp(360px, 40vw, 460px)",
                borderRadius: "26px",
                maxWidth: "379px",
              }}
            >
              <div
                className="relative overflow-hidden w-full flex-shrink-0"
                style={{
                  height: "clamp(220px, 26vw, 307px)",
                  borderRadius: "22px",
                }}
              >
                <Image
                  src={market}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow px-2 sm:px-3 pt-3 sm:pt-4 min-h-0">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3
                    className="text-white truncate font-bold"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "clamp(18px, 2.2vw, 30.72px)",
                      lineHeight: "100%",
                    }}
                  >
                    {product.title}
                  </h3>
                  <span
                    className="text-white flex-shrink-0 font-bold"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "clamp(18px, 2.2vw, 30.72px)",
                      lineHeight: "100%",
                    }}
                  >
                    {product.price}
                  </span>
                </div>

                <div className="flex items-end justify-between mt-auto pb-4 sm:pb-6 gap-3">
                  <p
                    className="leading-[16px] mb-[12px] flex-1 min-w-0"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: "clamp(10px, 1vw, 12.21px)",
                      lineHeight: "16px",
                      color: "#036CB9",
                    }}
                  >
                    {product.description ||
                      "Amet minim mollit non deserunt ullamco est sit"}
                  </p>

                  <button
                    className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#0185EB] hover:bg-[#00a2ff] transition-colors duration-300"
                    style={{
                      width: "clamp(36px, 3.5vw, 44px)",
                      height: "clamp(36px, 3.5vw, 44px)",
                    }}
                    aria-label="Add to cart"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MarketPlace;
