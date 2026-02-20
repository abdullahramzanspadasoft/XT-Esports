"use client";

import Image from "next/image";
import popularGameData from "@/constant/populargame.json";
import { RightArrowIcon } from "@/app/icons";
import PopularGameCard from "@/app/components/PopularGameCard";
import BlacImage from "@/public/Image/Hero/BlacImage.png";
import PopularImage from "@/public//PopularGame/PapularGameBackground.png";
import Shadow from "@/public//PopularGame/Shadow.png";

const PopularGame = () => {
  const { popularGames } = popularGameData;

  return (
    <div className="w-full relative">
      <section className="relative w-full min-h-screen bg-gradient-to-b from-[#011425] via-[#000810] to-[#000000] overflow-hidden py-16 md:py-24">
        <Image
          src={PopularImage}
          alt="Popular Game Background"
          width={2183.5}
          height={1344.5}
          priority
          className="absolute z-20 bottom-[149px] left-[197px] w-[1571px] h-[587.53px] opacity-100 rounded-[32.36px]"
        />

        <Image
          src={Shadow}
          alt="Popular Game Background"
          width={2183.5}
          height={1344.5}
          priority
          className="absolute z-20 bottom-[149px] left-[197px] w-[1571px] h-[587.53px] opacity-70 rounded-[32.36px]"
        />

        <Image
          src={BlacImage}
          alt="Black Background"
          width={2183.5}
          height={1344.5}
          priority
          className="absolute z-[1] top-[calc(189px-100vh)] left-[-23px] w-[2183.5px] h-[1344.5px] opacity-100"
        />

        <div className="z-10 pointer-events-none opacity-100"></div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-[5] pointer-events-none w-[500px] md:w-[600px] lg:w-[700px] h-[800px] md:h-[1000px] lg:h-[1200px]">
          <Image
            src={popularGames.characterImage.src}
            alt={popularGames.characterImage.alt}
            fill
            className="object-contain opacity-90"
            priority
            sizes="(max-width: 768px) 500px, (max-width: 1024px) 600px, 700px"
          />
        </div>

        <div
          style={{ width: "550px" }}
          className="absolute right-0 left-[70px] top-[330px] -translate-y-1/2 z-[5] pointer-events-none md:w-[450px] lg:w-[500px] h-[650px] md:h-[800px] lg:h-[1000px]"
        >
          <Image
            src="/PopularGame/pngaaa.png"
            alt="Girl Character"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="text-center mb-[37.3px] mt-[38px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="font-['Poppins'] font-bold text-[82.43px] leading-[100%] tracking-[0%] w-[647px] h-[124px] text-white">
                {popularGames.title.part1}
              </span>{" "}
              <span className="font-['Poppins'] font-light text-[82.43px] leading-[100%] tracking-[0%] w-[647px] h-[124px] text-[#008EFF]">
                {popularGames.title.part2}
              </span>
            </h2>
          </div>

          <div className="mb-10 md:mb-16 px-4 md:px-8">
            <div className="flex gap-[21.29] flex-nowrap items-start justify-center">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="w-[300.58px] rounded-[28.95px] opacity-100"
                >
                  <PopularGameCard
                    name={popularGames.games[index].name}
                    coverImage={popularGames.games[index].coverImage}
                    time={popularGames.games[index].time}
                    region={popularGames.games[index].region}
                    matchType={popularGames.games[index].matchType}
                    price={popularGames.games[index].price}
                    slots={popularGames.games[index].slots}
                    width="300.58px"
                    height="422.34px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto px-4">
            <p className="font-['Poppins'] font-normal text-[19.1px] leading-[100%] mb-[48px] tracking-[0%] w-[848.08px] h-[61.31px] text-white">
              {popularGames.description}
            </p>
          </div>

          <div className="flex justify-end px-4 md:px-0">
            <a
              href={popularGames.button.href}
              className="inline-flex absolute items-center justify-center gap-2 md:gap-3 text-white transition-all duration-300 shadow-lg hover:shadow-xl
              bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)] 
              rounded-tl-[100px] rounded-br-[100px]
              font-['Poppins'] font-normal text-[21.86px] leading-[100%] tracking-[0%] 
              w-[346.56px] h-[92.81px] top-[39vw] right-[-9px]"
            >
              <span className="flex items-center justify-center">
                {popularGames.button.text}
              </span>
              <RightArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularGame;
