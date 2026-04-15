"use client";
import Image from "next/image";
import { SearchIcon, ShieldCheckIcon, ChevronDownIcon } from "@/icons";
import XtEsportsBanner from "@/layout/footer";
import spaceData from "@/constant/space_section/data.json";

import card from "@/public/Image/PopularSpace/popular-space-card-thumb-02.png";
import cardtow from "@/public/Image/PopularSpace/popular-space-card-thumb-05.png";
import cardthree from "@/public/Image/PopularSpace/popular-space-card-thumb-04.png";
import cardfour from "@/public/Image/PopularSpace/popular-space-card-thumb-03.png";
import cardfive from "@/public/Image/PopularSpace/popular-space-card-thumb-01.png";
import cardsix from "@/public/Image/PopularSpace/popular-space-card-thumb-wide.png";
import assasin from "@/public/Image/space/space-hero-bg-assassins.png";
import dark from "@/public/Image/space/space-hero-bg-dark-souls.png";
import thelast from "@/public/Image/space/space-hero-bg-the-last-of-us.png";
import the from "@/public/Image/space/space-hero-bg-scene-alt.png";

const spaceImages = [card, cardtow, cardthree, cardfour, cardfive, cardsix];
const backgroundImages = [assasin, dark, thelast, the];

const SpacePage = () => {
  const renderSpaceCards = (
    games: { id: number | string; name: string; description: string }[],
    keyPrefix: string,
  ) => (
    <div className="w-full flex flex-wrap xl:flex-nowrap justify-center xl:justify-start gap-[27px]">
      {spaceImages.map((image, index) => (
        <div key={`${keyPrefix}-card-${index}`} className="w-[234px] flex flex-col">
          <Image
            src={image}
            alt="Game Image"
            className="w-[234px] h-[234px] rounded-[44px] object-cover opacity-100"
          />
          <div className="pt-[20px] px-[24px]">
            <div className="w-full flex items-start justify-between">
              <h1 className="w-[132px] h-[30px] text-white font-bold text-[20.31px] leading-[100%] tracking-[0%] font-[Poppins]">
                {games[index]?.name}
              </h1>
              <div className="w-[18.85px] h-[18.85px] opacity-100 shrink-0 mt-[6px]">
                <ShieldCheckIcon />
              </div>
            </div>
            <p className="w-[167px] h-[42px] text-[#02406F] font-medium text-[12.21px] leading-100% tracking-[0%] font-[Poppins] opacity-100 pt-[6px]">
              {games[index]?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="w-full min-h-[2350px] bg-linear-to-b from-[#020e1a] to-[#011a2c] text-white flex flex-col overflow-x-hidden">
        <div className="w-full max-w-[1920px] mx-auto flex flex-col">
          <section className="w-full flex flex-col pt-[179px]">
            <div className="w-full flex justify-center overflow-hidden">
              <div className="flex -space-x-[80px]">
                {backgroundImages
                  .slice()
                  .reverse()
                  .map((image, index) => (
                    <div
                      key={`background-${index}`}
                      className="w-[601px] h-[578px] rounded-[31px] opacity-100 mix-blend-multiply overflow-hidden shrink-0"
                    >
                      <Image
                        src={image}
                        alt="Game Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full flex flex-col xl:pl-[333px] px-4 xl:px-0 -mt-[500px] z-10">
              <h1 className="w-auto xl:w-[289px] xl:h-[116px] text-[52px] xl:text-[77px] leading-[100%] font-bold font-[Poppins] tracking-[0%] text-white opacity-100">
                {spaceData.heroSection.title}
              </h1>
              <p className="w-full xl:w-[639.38px] xl:h-[165px] text-[18px] xl:text-[22.03px] leading-100% font-normal font-[Poppins] tracking-[0%] text-white opacity-100 pt-[16px] xl:pt-0">
                {spaceData.heroSection.description}
              </p>

              <div className="w-full flex flex-wrap xl:flex-nowrap items-center gap-4 xl:gap-[16px] pt-[28px] xl:pt-[20px]">
                <div className="w-full xl:w-[443px] h-[80px] bg-[#000B15] rounded-[17px] opacity-100 flex items-center px-[19px] gap-[40px]">
                  <div className="w-[24px] h-[24px] opacity-100 shrink-0">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    placeholder={spaceData.searchSection.searchPlaceholder}
                    className="w-full bg-transparent outline-none text-[22.03px] leading-[100%] font-normal font-[Poppins] tracking-[0%] text-white placeholder:text-[#FFFFFF33]"
                  />
                </div>

                <button className="w-full xl:w-[218px] h-[80px] bg-[#000B15] rounded-[17px] opacity-100 flex items-center justify-center gap-[44px]">
                  <span className="cursor-pointer w-[104px] h-[33px] text-[22.03px] leading-[100%] font-normal font-[Poppins] tracking-[0%] text-[#FFFFFF33] opacity-100">
                    {spaceData.searchSection.categoryButtonLabel}
                  </span>
                  <div className="w-[24px] h-[24px] opacity-100">
                    <ChevronDownIcon />
                  </div>
                </button>

                <button className="w-full xl:w-[218px] h-[80px] rounded-[17px] bg-[#0184E9] flex items-center justify-center">
                  <span className="font-poppins font-normal text-[22.03px] leading-[100%] tracking-[0%] text-[#011425]">
                    {spaceData.searchSection.findButtonLabel}
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col xl:pl-[226px] px-4 xl:px-0 pt-[143px]">
            <h1 className="w-auto xl:w-[663px] xl:h-[116px] font-poppins font-bold text-[52px] xl:text-[77px] leading-[100%] tracking-[0%] text-white rotate-0 opacity-100">
              {spaceData.featuredSpaces.title}
            </h1>
            <div className="pt-[41px]">{renderSpaceCards(spaceData.featuredSpaces.games, "featured")}</div>
            <button className="mt-[39px] rounded-tl-[200px] rounded-br-[200px] w-[259.44px] h-[69.48px] bg-linear-to-r from-[#0185EB] via-[#0185EB] to-[#00599E] text-white font-bold text-[15.7px] leading-[100%] tracking-[0%] font-[Poppins] opacity-100 rounded-md">
              {spaceData.featuredSpaces.createSpaceButtonLabel}
            </button>
          </section>

          <section className="w-full flex flex-col xl:pl-[226px] px-4 xl:px-0 pt-[21px] pb-[58px]">
            <div className="w-full max-w-[1570px] flex items-start justify-between">
              <h1 className="w-auto xl:w-[615px] xl:h-[116px] text-white font-bold text-[52px] xl:text-[77px] leading-100% tracking-[0%] font-[Poppins] opacity-100">
                {spaceData.popularSpaces.title}
              </h1>
            </div>
            <div className="pt-[41px]">
              {renderSpaceCards(spaceData.popularSpaces.games, "popular")}
            </div>
            <div className="pt-[41px]">
              {renderSpaceCards(spaceData.secondRowGames, "popular-second")}
            </div>
            <button className="w-[41px] h-[24px] mt-[23px] text-[#008EFF] font-bold text-[15.7px] leading-[100%] tracking-[0%] font-[Poppins] opacity-100 rounded self-end xl:mr-[569px]">
              {spaceData.popularSpaces.moreButtonLabel}
            </button>
          </section>
        </div>
      </div>
      <XtEsportsBanner />
    </>
  );
};

export default SpacePage;
