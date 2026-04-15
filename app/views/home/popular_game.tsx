"use client";

import Image from "next/image";
import popularGameData from "@/constant/popular_game.json";
import { RightArrowIcon } from "@/icons";
import PopularGamesCarouselRow from "@/components/PopularGamesCarouselRow";
import BlacImage from "@/public/Image/Hero/hero-dark-curtain-overlay.png";
import PopularImage from "@/public/Image/Hero/PopularGame/popular-games-section-background.png";
import Shadow from "@/public/Image/Hero/PopularGame/popular-games-card-shadow.png";
import popularGameViewContent from "@/constant/home/popular_game_view.json";
import {
  POPULAR_GAME_CARD_GAP,
  POPULAR_GAME_CARD_WIDTH,
  POPULAR_GAME_MOBILE_GAP,
} from "@/utils/popularGameCarouselConstants";
import { usePopularGamesCarousel } from "@/utils/usePopularGamesCarousel";

const PopularGame = () => {
  const { popularGames } = popularGameData;
  const games = popularGames.games;

  const carousel = usePopularGamesCarousel(games);
  const {
    screenSize,
    mobileCardWidth,
    tabletCardWidth,
    laptopCardWidth,
    lgDesktopCardWidth,
    desktop,
    lgDesktop,
    laptop,
    tablet,
    mobile,
    tabletActiveDot,
    mobileActiveDot,
    laptopActiveDot,
  } = carousel;

  const dotClass = (active: boolean) =>
    `h-2 rounded-full transition-all duration-300 ${active ? "bg-[#0185EB] w-4" : "bg-[#374957] w-2"}`;

  return (
    <div className="w-full relative">
      <section className="relative w-full min-h-screen bg-gradient-to-b from-[#011425] via-[#000810] to-[#000000] overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="relative w-[95%] sm:w-[90%] lg:w-[1571px] h-[500px] sm:h-[550px] lg:h-[587.53px]">
            <Image
              src={PopularImage}
              alt={popularGameViewContent.alts.sectionBackground}
              fill
              priority
              className="object-cover mt-[60px] md:object-fill rounded-[32.36px] opacity-100"
            />
            <Image
              src={Shadow}
              alt={popularGameViewContent.alts.sectionShadow}
              fill
              priority
              className="object-cover mt-[60px] md:object-fill rounded-[32.36px] opacity-70"
            />
          </div>
        </div>

        <Image
          src={popularGameViewContent.imagePaths.backgroundCard}
          alt={popularGameViewContent.alts.backgroundCard}
          fill
          className="object-cover mt-[-150px] rotate-[-10deg] ml-[500px] opacity-100 z-[5] hidden lg:block"
          priority
        />

        <Image
          src={BlacImage}
          alt={popularGameViewContent.alts.blackBackground}
          width={2183.5}
          height={1344.5}
          priority
          className="hidden lg:block absolute z-[1] top-[calc(189px-100vh)] left-[-23px] w-[2183.5px] h-[1344.5px] opacity-100"
        />

        <div
          style={{ width: "550px" }}
          className="hidden xl:block absolute right-0 left-[70px] top-[330px] -translate-y-1/2 z-[5] pointer-events-none h-[1000px]"
        >
          <Image
            src={popularGames.characterImage.src}
            alt={popularGames.characterImage.alt}
            fill
            className="object-contain"
            priority
            sizes="550px"
          />
        </div>

        <div
          style={{ width: "340px" }}
          className="hidden lg:block xl:hidden absolute left-[12px] top-[290px] -translate-y-1/2 z-[5] pointer-events-none h-[680px]"
        >
          <Image
            src={popularGames.characterImage.src}
            alt={popularGames.characterImage.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="text-center mb-8 md:mb-[37.3px] mt-6 md:mt-[38px]">
            <h2 className="leading-tight mt-[-60px] flex justify-center gap-6 relative bottom-5">
              <span className="font-['Poppins'] font-bold text-[40px] sm:text-[56px] lg:text-[66px] xl:text-[82.43px] leading-[100%] tracking-[0%] text-white">
                {popularGames.title.part1}
              </span>{" "}
              <span className="font-['Poppins'] font-light text-[40px] sm:text-[56px] lg:text-[66px] xl:text-[82.43px] leading-[100%] tracking-[0%] text-[#008EFF]">
                {popularGames.title.part2}
              </span>
            </h2>
          </div>

          {screenSize === "desktop" && (
            <PopularGamesCarouselRow
              outerClassName="mb-10 md:mb-16 px-4 md:px-8"
              cloned={desktop.cloned}
              viewportWidth={desktop.viewportWidth}
              cardGap={POPULAR_GAME_CARD_GAP}
              cardWidthPx={POPULAR_GAME_CARD_WIDTH}
              cardHeight="422.34px"
              translateX={desktop.translateX}
              transitioning={desktop.transitioning}
              onTransitionEnd={desktop.onTransitionEnd}
              onPrev={() => desktop.goTo("prev")}
              onNext={() => desktop.goTo("next")}
              ariaPrevious={popularGameViewContent.aria.previous}
              ariaNext={popularGameViewContent.aria.next}
              arrowVariant="large"
              prevButtonClassName="shrink-0 flex items-center relative top-[69px] justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
              nextButtonClassName="shrink-0 flex relative top-[69px] items-center justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
            />
          )}

          {screenSize === "large-desktop" && (
            <PopularGamesCarouselRow
              outerClassName="mb-10 md:mb-16 px-4 md:px-8"
              cloned={lgDesktop.cloned}
              viewportWidth={lgDesktop.viewportWidth}
              cardGap={POPULAR_GAME_CARD_GAP}
              cardWidthPx={lgDesktopCardWidth}
              cardHeight="422.34px"
              translateX={lgDesktop.translateX}
              transitioning={lgDesktop.transitioning}
              onTransitionEnd={lgDesktop.onTransitionEnd}
              onPrev={() => lgDesktop.goTo("prev")}
              onNext={() => lgDesktop.goTo("next")}
              ariaPrevious={popularGameViewContent.aria.previous}
              ariaNext={popularGameViewContent.aria.next}
              arrowVariant="large"
              prevButtonClassName="shrink-0 flex items-center relative top-[69px] justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
              nextButtonClassName="shrink-0 flex relative top-[69px] items-center justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
            />
          )}

          {screenSize === "laptop" && (
            <PopularGamesCarouselRow
              outerClassName="mb-10 px-2"
              rowClassName="flex items-center justify-center gap-6"
              cloned={laptop.cloned}
              viewportWidth={laptop.viewportWidth}
              cardGap={POPULAR_GAME_MOBILE_GAP}
              cardWidthPx={laptopCardWidth}
              cardHeight="432px"
              translateX={laptop.translateX}
              transitioning={laptop.transitioning}
              onTransitionEnd={laptop.onTransitionEnd}
              onPrev={() => laptop.goTo("prev")}
              onNext={() => laptop.goTo("next")}
              ariaPrevious={popularGameViewContent.aria.previous}
              ariaNext={popularGameViewContent.aria.next}
              arrowVariant="large"
              prevButtonClassName="shrink-0 flex items-center relative top-[69px] justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
              nextButtonClassName="shrink-0 flex relative top-[69px] items-center justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
              dots={
                <div className="flex justify-center gap-2 mt-6">
                  {games.map((_, i) => (
                    <div key={i} className={dotClass(laptopActiveDot === i)} />
                  ))}
                </div>
              }
            />
          )}

          {screenSize === "tablet" && (
            <PopularGamesCarouselRow
              outerClassName="mb-8"
              rowClassName="flex items-center justify-center gap-4"
              cloned={tablet.cloned}
              viewportWidth={tablet.viewportWidth}
              cardGap={POPULAR_GAME_MOBILE_GAP}
              cardWidthPx={tabletCardWidth}
              cardHeight="420px"
              translateX={tablet.translateX}
              transitioning={tablet.transitioning}
              onTransitionEnd={tablet.onTransitionEnd}
              onPrev={() => tablet.goTo("prev")}
              onNext={() => tablet.goTo("next")}
              ariaPrevious={popularGameViewContent.aria.previous}
              ariaNext={popularGameViewContent.aria.next}
              arrowVariant="small"
              prevButtonClassName="shrink-0 flex items-center justify-center w-[52px] h-[52px] focus:outline-none cursor-pointer touch-manipulation"
              nextButtonClassName="shrink-0 flex items-center justify-center w-[52px] h-[52px] focus:outline-none cursor-pointer touch-manipulation"
              viewportClassName="shrink-0"
              slideClassName="rounded-[28.95px]"
              dots={
                <div className="flex justify-center gap-2 mt-4">
                  {games.map((_, i) => (
                    <div key={i} className={dotClass(tabletActiveDot === i)} />
                  ))}
                </div>
              }
            />
          )}

          {screenSize === "mobile" && (
            <PopularGamesCarouselRow
              outerClassName="mb-8"
              rowClassName="flex items-center justify-center gap-3"
              cloned={mobile.cloned}
              viewportWidth={mobile.viewportWidth}
              cardGap={POPULAR_GAME_MOBILE_GAP}
              cardWidthPx={mobileCardWidth}
              cardHeight="394px"
              translateX={mobile.translateX}
              transitioning={mobile.transitioning}
              onTransitionEnd={mobile.onTransitionEnd}
              onPrev={() => mobile.goTo("prev")}
              onNext={() => mobile.goTo("next")}
              ariaPrevious={popularGameViewContent.aria.previous}
              ariaNext={popularGameViewContent.aria.next}
              arrowVariant="small"
              prevButtonClassName="shrink-0 flex items-center justify-center w-[44px] h-[44px] focus:outline-none cursor-pointer touch-manipulation"
              nextButtonClassName="shrink-0 flex items-center justify-center w-[44px] h-[44px] focus:outline-none cursor-pointer touch-manipulation"
              viewportClassName="shrink-0"
              slideClassName="rounded-[28.95px]"
              dots={
                <div className="flex justify-center gap-2 mt-4">
                  {games.map((_, i) => (
                    <div key={i} className={dotClass(mobileActiveDot === i)} />
                  ))}
                </div>
              }
            />
          )}

          <div className="text-center mb-8 md:mb-10 lg:mb-16 max-w-3xl mx-auto px-4">
            <p className="font-['Poppins'] mt-1.5 relative bottom-[50px] font-normal text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[19.1px] leading-[1.6] lg:leading-[29px] w-full xl:w-[848.08px] xl:mx-auto text-white text-center">
              {popularGames.description}
            </p>
          </div>

          {screenSize === "desktop" ? (
            <div className="hidden mb-[20px] lg:flex justify-end px-4 md:px-0">
              <a
                href={popularGames.button.href}
                className="inline-flex absolute items-center justify-center gap-2 md:gap-3 text-white transition-all duration-300 shadow-lg hover:shadow-xl bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)] rounded-tl-[100px] rounded-br-[100px] font-['Poppins'] font-normal text-[21.86px] leading-[100%] tracking-[0%] w-[346.56px] h-[92.81px] top-[39vw] right-[-9px] min-[1600px]:right-[4%]"
              >
                <span className="flex items-center justify-center">
                  {popularGames.button.text}
                </span>
                <RightArrowIcon />
              </a>
            </div>
          ) : (
            <div className="flex justify-center mb-8 mt-[-30px]">
              <a
                href={popularGames.button.href}
                className="inline-flex items-center justify-center gap-2 md:gap-3 text-white transition-all duration-300 shadow-lg hover:shadow-xl bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)] rounded-tl-[100px] rounded-br-[100px] font-['Poppins'] font-normal text-[16px] sm:text-[18px] xl:text-[21.86px] leading-[100%] tracking-[0%] px-6 sm:px-8 xl:w-[346.56px] h-[56px] sm:h-[64px] xl:h-[92.81px] w-auto max-w-[90vw]"
              >
                <span>{popularGames.button.text}</span>
                <RightArrowIcon />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PopularGame;
