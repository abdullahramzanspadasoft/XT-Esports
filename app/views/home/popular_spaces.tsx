"use client";

import { useEffect, useRef } from "react";
import type { ScrollContainer } from "@/types/type";
import Image from "next/image";
import popularSpacesData from "@/constant/popular_spaces.json";
import { TickIcon } from "@/icons";
import BlacImage from "@/public/Image/Hero/BlacImage.png";
import baground from "@/public/Image/PopularTournament/Rectangle 55.png";

const PopularSpaces = () => {
  const { popularSpaces } = popularSpacesData;
  const scrollRef = useRef<ScrollContainer | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId = 0;

    const startScrolling = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += 1;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(startScrolling);
    };

    animationFrameId = requestAnimationFrame(startScrolling);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () =>
      (animationFrameId = requestAnimationFrame(startScrolling));

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const doubledSpaces = [...popularSpaces.spaces, ...popularSpaces.spaces];

  return (
    <div className="w-full relative bg-[#010D18] overflow-hidden min-h-screen pt-0 -mt-12 pb-20">
      <Image
        src={BlacImage}
        alt="Background"
        fill
        className="object-cover opacity-30 z-0"
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
          className="object-cover object-bottom opacity-100"
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

      <section className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="mb-4 sm:mb-6 relative bottom-[12px]">
            <div className="flex flex-wrap gap-2 sm:gap-4 items-baseline">
              <span className="font-['Poppins'] font-bold text-[40px] sm:text-[56px] lg:text-[82.43px] leading-[100%] text-white">
                Popular
              </span>
              <span className="font-['Poppins'] font-light text-[40px] sm:text-[56px] lg:text-[82.43px] leading-[100%] text-[#0185EB]">
                Spaces
              </span>
            </div>
          </h2>
          <p className="font-['Poppins'] font-medium text-[14px] sm:text-[17px] lg:text-[23.21px] leading-[1.6] sm:leading-[1.5] lg:leading-[38px] text-white max-w-[90%] sm:max-w-[75%] lg:max-w-none">
            {popularSpaces.description}
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex flex-row items-start justify-start gap-4 sm:gap-5 lg:gap-6 overflow-x-hidden whitespace-nowrap pb-4"
          style={{ cursor: "grab" }}
        >
          {doubledSpaces.map((space, index) => (
            <div
              key={`${space.id}-${index}`}
              className="flex-shrink-0 flex flex-col items-start"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(160px, 20vw, 234px)",
                  height: "clamp(160px, 20vw, 234px)",
                  borderRadius: "clamp(24px, 3vw, 44px)",
                  backgroundColor: space.backgroundColor,
                }}
              >
                {space.image && (
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                    style={{ borderRadius: "clamp(24px, 3vw, 44px)" }}
                  />
                )}
              </div>

              <div
                className="flex items-center gap-2 mt-3 mb-2"
                style={{ width: "clamp(160px, 20vw, 234px)" }}
              >
                <h3
                  className="font-['Poppins'] font-bold text-white truncate"
                  style={{ fontSize: "clamp(13px, 1.6vw, 20.31px)" }}
                >
                  {space.title}
                </h3>
                <TickIcon />
              </div>

              <p
                className="font-['Poppins'] font-medium text-[#02406F] whitespace-normal"
                style={{
                  width: "clamp(160px, 20vw, 234px)",
                  fontSize: "clamp(9px, 1vw, 12.21px)",
                  lineHeight: "1.5",
                }}
              >
                {space.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularSpaces;
