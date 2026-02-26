"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import popularGameData from "@/constant/popular_game.json";
import { RightArrowIcon } from "@/icons";
import PopularGameCard from "@/components/PopularGameCard";
import BlacImage from "@/public/Image/Hero/BlacImage.png";
import PopularImage from "@/public/Image/Hero/PopularGame/PapularGameBackground.png";
import Shadow from "@/public/Image/Hero/PopularGame/popular_game.png";

const CARD_WIDTH = 300.58;
const CARD_GAP = 21.29;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const VISIBLE_COUNT = 4;
const VIEWPORT_WIDTH =
  VISIBLE_COUNT * CARD_WIDTH + (VISIBLE_COUNT - 1) * CARD_GAP;

const TABLET_VISIBLE_COUNT = 2;
const LAPTOP_VISIBLE_COUNT = 2;
const MOBILE_VISIBLE_COUNT = 1;
const MOBILE_CARD_GAP = 16;

const LeftArrowIcon = () => (
  <svg
    width="26"
    height="52"
    viewBox="0 0 26 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.208 3.19454C25.2073 4.04111 24.8704 4.85274 24.2714 5.45099L7.93982 21.7826C7.44549 22.2768 7.05337 22.8635 6.78583 23.5093C6.5183 24.155 6.3806 24.8472 6.3806 25.5462C6.3806 26.2452 6.5183 26.9373 6.78583 27.5831C7.05337 28.2288 7.44549 28.8156 7.93982 29.3098L24.2501 45.6201C24.8318 46.2223 25.1536 47.0289 25.1463 47.8661C25.1391 48.7033 24.8032 49.5042 24.2112 50.0962C23.6192 50.6882 22.8183 51.024 21.9811 51.0313C21.1439 51.0386 20.3373 50.7167 19.7351 50.1351L3.42479 33.8376C1.2317 31.6402 0 28.6624 0 25.5579C0 22.4533 1.2317 19.4756 3.42479 17.2782L19.7564 0.93596C20.2029 0.489106 20.772 0.184761 21.3916 0.061435C22.0112 -0.0618909 22.6535 0.00134533 23.2371 0.243142C23.8207 0.484939 24.3195 0.894428 24.6704 1.4198C25.0212 1.94516 25.2083 2.56279 25.208 3.19454V3.19454Z"
      fill="#374957"
    />
  </svg>
);

const RightArrowSVGIcon = () => (
  <svg
    width="26"
    height="52"
    viewBox="0 0 26 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-3.85492e-05 47.8368C0.000706653 46.9903 0.337606 46.1786 0.936598 45.5804L17.2682 29.2488C17.7625 28.7546 18.1546 28.1679 18.4222 27.5221C18.6897 26.8763 18.8274 26.1842 18.8274 25.4852C18.8274 24.7862 18.6897 24.0941 18.4222 23.4483C18.1546 22.8025 17.7625 22.2158 17.2682 21.7216L0.957882 5.41132C0.376235 4.8091 0.0543897 4.00252 0.0616648 3.1653C0.0689399 2.32808 0.404754 1.52721 0.996779 0.935187C1.5888 0.343162 2.38967 0.00734797 3.22689 7.26953e-05C4.06411 -0.00720257 4.87069 0.314643 5.47291 0.89629L21.7832 17.1938C23.9763 19.3912 25.208 22.3689 25.208 25.4735C25.208 28.578 23.9763 31.5558 21.7832 33.7532L5.45163 50.0954C5.00506 50.5423 4.43598 50.8466 3.81639 50.9699C3.1968 51.0933 2.55455 51.03 1.97091 50.7882C1.38727 50.5464 0.888474 50.1369 0.537633 49.6116C0.186791 49.0862 -0.000324851 48.4686 -3.85492e-05 47.8368V47.8368Z"
      fill="#374957"
    />
  </svg>
);

const SmallLeftArrow = () => (
  <svg
    width="16"
    height="30"
    viewBox="0 0 26 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.208 3.19454C25.2073 4.04111 24.8704 4.85274 24.2714 5.45099L7.93982 21.7826C7.44549 22.2768 7.05337 22.8635 6.78583 23.5093C6.5183 24.155 6.3806 24.8472 6.3806 25.5462C6.3806 26.2452 6.5183 26.9373 6.78583 27.5831C7.05337 28.2288 7.44549 28.8156 7.93982 29.3098L24.2501 45.6201C24.8318 46.2223 25.1536 47.0289 25.1463 47.8661C25.1391 48.7033 24.8032 49.5042 24.2112 50.0962C23.6192 50.6882 22.8183 51.024 21.9811 51.0313C21.1439 51.0386 20.3373 50.7167 19.7351 50.1351L3.42479 33.8376C1.2317 31.6402 0 28.6624 0 25.5579C0 22.4533 1.2317 19.4756 3.42479 17.2782L19.7564 0.93596C20.2029 0.489106 20.772 0.184761 21.3916 0.061435C22.0112 -0.0618909 22.6535 0.00134533 23.2371 0.243142C23.8207 0.484939 24.3195 0.894428 24.6704 1.4198C25.0212 1.94516 25.2083 2.56279 25.208 3.19454Z"
      fill="#374957"
    />
  </svg>
);

const SmallRightArrow = () => (
  <svg
    width="16"
    height="30"
    viewBox="0 0 26 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-3.85492e-05 47.8368C0.000706653 46.9903 0.337606 46.1786 0.936598 45.5804L17.2682 29.2488C17.7625 28.7546 18.1546 28.1679 18.4222 27.5221C18.6897 26.8763 18.8274 26.1842 18.8274 25.4852C18.8274 24.7862 18.6897 24.0941 18.4222 23.4483C18.1546 22.8025 17.7625 22.2158 17.2682 21.7216L0.957882 5.41132C0.376235 4.8091 0.0543897 4.00252 0.0616648 3.1653C0.0689399 2.32808 0.404754 1.52721 0.996779 0.935187C1.5888 0.343162 2.38967 0.00734797 3.22689 7.26953e-05C4.06411 -0.00720257 4.87069 0.314643 5.47291 0.89629L21.7832 17.1938C23.9763 19.3912 25.208 22.3689 25.208 25.4735C25.208 28.578 23.9763 31.5558 21.7832 33.7532L5.45163 50.0954C5.00506 50.5423 4.43598 50.8466 3.81639 50.9699C3.1968 51.0933 2.55455 51.03 1.97091 50.7882C1.38727 50.5464 0.888474 50.1369 0.537633 49.6116C0.186791 49.0862 -0.000324851 48.4686 -3.85492e-05 47.8368Z"
      fill="#374957"
    />
  </svg>
);

const PopularGame = () => {
  const { popularGames } = popularGameData;
  const games = popularGames.games;

  const [screenSize, setScreenSize] = useState<
    "mobile" | "tablet" | "laptop" | "desktop"
  >("mobile");
  const [mobileCardWidth, setMobileCardWidth] = useState(280);
  const [tabletCardWidth, setTabletCardWidth] = useState(320);
  const [laptopCardWidth, setLaptopCardWidth] = useState(400);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) {
        setScreenSize("desktop");
      } else if (w >= 1024) {
        setScreenSize("laptop");
        const arrowArea = 52 * 2 + 24 * 2;
        const containerPad = 128;
        const available = w - arrowArea - containerPad;
        const cardW = Math.floor((available - MOBILE_CARD_GAP) / 2);
        setLaptopCardWidth(Math.min(460, Math.max(300, cardW)));
      } else if (w >= 640) {
        setScreenSize("tablet");
        const arrowArea = 52 * 2 + 16 * 2;
        const containerPad = w >= 768 ? 64 : 32;
        const available = w - arrowArea - containerPad;
        const cardW = Math.floor((available - MOBILE_CARD_GAP) / 2);
        setTabletCardWidth(Math.min(460, Math.max(200, cardW)));
      } else {
        setScreenSize("mobile");
        const arrowArea = 44 * 2 + 12 * 2;
        const containerPad = 32;
        const available = w - arrowArea - containerPad;
        setMobileCardWidth(Math.min(400, Math.max(220, available)));
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const laptopCardStep = laptopCardWidth + MOBILE_CARD_GAP;
  const laptopViewportWidth =
    LAPTOP_VISIBLE_COUNT * laptopCardWidth +
    (LAPTOP_VISIBLE_COUNT - 1) * MOBILE_CARD_GAP;

  const tabletCardStep = tabletCardWidth + MOBILE_CARD_GAP;
  const tabletViewportWidth =
    TABLET_VISIBLE_COUNT * tabletCardWidth +
    (TABLET_VISIBLE_COUNT - 1) * MOBILE_CARD_GAP;

  const mobileCardStep = mobileCardWidth + MOBILE_CARD_GAP;

  const desktopCloned = [
    ...games.slice(-VISIBLE_COUNT),
    ...games,
    ...games.slice(0, VISIBLE_COUNT),
  ];
  const [desktopIndex, setDesktopIndex] = useState(VISIBLE_COUNT);
  const [desktopTransitioning, setDesktopTransitioning] = useState(true);
  const isDesktopAnimating = useRef(false);

  const desktopGoTo = useCallback((direction: "prev" | "next") => {
    if (isDesktopAnimating.current) return;
    isDesktopAnimating.current = true;
    setDesktopTransitioning(true);
    setDesktopIndex((prev) => prev + (direction === "next" ? 1 : -1));
  }, []);

  const handleDesktopTransitionEnd = useCallback(() => {
    isDesktopAnimating.current = false;
    setDesktopIndex((prev) => {
      if (prev >= games.length + VISIBLE_COUNT) {
        setDesktopTransitioning(false);
        return VISIBLE_COUNT;
      }
      if (prev < VISIBLE_COUNT) {
        setDesktopTransitioning(false);
        return games.length + VISIBLE_COUNT - 1;
      }
      return prev;
    });
  }, [games.length]);

  const desktopTranslateX = -desktopIndex * CARD_STEP;

  const laptopCloned = [
    ...games.slice(-LAPTOP_VISIBLE_COUNT),
    ...games,
    ...games.slice(0, LAPTOP_VISIBLE_COUNT),
  ];
  const [laptopIndex, setLaptopIndex] = useState(LAPTOP_VISIBLE_COUNT);
  const [laptopTransitioning, setLaptopTransitioning] = useState(true);
  const isLaptopAnimating = useRef(false);

  const laptopGoTo = useCallback((direction: "prev" | "next") => {
    if (isLaptopAnimating.current) return;
    isLaptopAnimating.current = true;
    setLaptopTransitioning(true);
    setLaptopIndex((prev) => prev + (direction === "next" ? 1 : -1));
  }, []);

  const handleLaptopTransitionEnd = useCallback(() => {
    isLaptopAnimating.current = false;
    setLaptopIndex((prev) => {
      if (prev >= games.length + LAPTOP_VISIBLE_COUNT) {
        setLaptopTransitioning(false);
        return LAPTOP_VISIBLE_COUNT;
      }
      if (prev < LAPTOP_VISIBLE_COUNT) {
        setLaptopTransitioning(false);
        return games.length + LAPTOP_VISIBLE_COUNT - 1;
      }
      return prev;
    });
  }, [games.length]);

  const laptopTranslateX = -laptopIndex * laptopCardStep;

  const tabletCloned = [
    ...games.slice(-TABLET_VISIBLE_COUNT),
    ...games,
    ...games.slice(0, TABLET_VISIBLE_COUNT),
  ];
  const [tabletIndex, setTabletIndex] = useState(TABLET_VISIBLE_COUNT);
  const [tabletTransitioning, setTabletTransitioning] = useState(true);
  const isTabletAnimating = useRef(false);

  const tabletGoTo = useCallback((direction: "prev" | "next") => {
    if (isTabletAnimating.current) return;
    isTabletAnimating.current = true;
    setTabletTransitioning(true);
    setTabletIndex((prev) => prev + (direction === "next" ? 1 : -1));
  }, []);

  const handleTabletTransitionEnd = useCallback(() => {
    isTabletAnimating.current = false;
    setTabletIndex((prev) => {
      if (prev >= games.length + TABLET_VISIBLE_COUNT) {
        setTabletTransitioning(false);
        return TABLET_VISIBLE_COUNT;
      }
      if (prev < TABLET_VISIBLE_COUNT) {
        setTabletTransitioning(false);
        return games.length + TABLET_VISIBLE_COUNT - 1;
      }
      return prev;
    });
  }, [games.length]);

  const tabletTranslateX = -tabletIndex * tabletCardStep;

  const mobileCloned = [
    ...games.slice(-MOBILE_VISIBLE_COUNT),
    ...games,
    ...games.slice(0, MOBILE_VISIBLE_COUNT),
  ];
  const [mobileIndex, setMobileIndex] = useState(MOBILE_VISIBLE_COUNT);
  const [mobileTransitioning, setMobileTransitioning] = useState(true);
  const isMobileAnimating = useRef(false);

  const mobileGoTo = useCallback((direction: "prev" | "next") => {
    if (isMobileAnimating.current) return;
    isMobileAnimating.current = true;
    setMobileTransitioning(true);
    setMobileIndex((prev) => prev + (direction === "next" ? 1 : -1));
  }, []);

  const handleMobileTransitionEnd = useCallback(() => {
    isMobileAnimating.current = false;
    setMobileIndex((prev) => {
      if (prev >= games.length + MOBILE_VISIBLE_COUNT) {
        setMobileTransitioning(false);
        return MOBILE_VISIBLE_COUNT;
      }
      if (prev < MOBILE_VISIBLE_COUNT) {
        setMobileTransitioning(false);
        return games.length + MOBILE_VISIBLE_COUNT - 1;
      }
      return prev;
    });
  }, [games.length]);

  const mobileTranslateX = -mobileIndex * mobileCardStep;

  const tabletActiveDot =
    (tabletIndex - TABLET_VISIBLE_COUNT + games.length) % games.length;
  const mobileActiveDot =
    (mobileIndex - MOBILE_VISIBLE_COUNT + games.length) % games.length;
  const laptopActiveDot =
    (laptopIndex - LAPTOP_VISIBLE_COUNT + games.length) % games.length;

  return (
    <div className="w-full relative">
      <section className="relative w-full min-h-screen bg-gradient-to-b from-[#011425] via-[#000810] to-[#000000] overflow-hidden py-16 md:py-24">
        <Image
          src={PopularImage}
          alt="Popular Game Background"
          width={2183.5}
          height={1344.5}
          priority
          className="hidden xl:block absolute z-20 bottom-[149px] left-[197px] w-[1571px] h-[587.53px] opacity-100 rounded-[32.36px]"
        />
        <Image
          src={PopularImage}
          alt="Popular Game Background"
          width={1571}
          height={587}
          priority
          className="hidden lg:block xl:hidden absolute z-20 bottom-[120px] left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] h-auto opacity-100 rounded-[32.36px]"
        />

        <Image
          src="/Image/Hero/PopularGame/Rectangle 45 (2).png"
          alt="Popular Game Background Card"
          fill
          className="object-cover mt-[-150px] rotate-[-10deg] ml-[500px] opacity-100 z-10"
          priority
        />

        <Image
          src={Shadow}
          alt="Popular Game Shadow"
          width={2183.5}
          height={1344.5}
          priority
          className="hidden xl:block absolute z-20 bottom-[149px] left-[197px] w-[1571px] h-[587.53px] opacity-70 rounded-[32.36px]"
        />
        <Image
          src={Shadow}
          alt="Popular Game Shadow"
          width={1571}
          height={587}
          priority
          className="hidden lg:block xl:hidden absolute z-20 bottom-[120px] left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] h-auto opacity-70 rounded-[32.36px]"
        />

        <Image
          src={BlacImage}
          alt="Black Background"
          width={2183.5}
          height={1344.5}
          priority
          className="hidden lg:block absolute z-[1] top-[calc(189px-100vh)] left-[-23px] w-[2183.5px] h-[1344.5px] opacity-100"
        />

        <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-[5] pointer-events-none w-[700px] h-[1200px]">
          <Image
            src={popularGames.characterImage.src}
            alt={popularGames.characterImage.alt}
            fill
            className="object-contain opacity-90"
            priority
            sizes="700px"
          />
        </div>

        <div
          style={{ width: "550px" }}
          className="hidden xl:block absolute right-0 left-[70px] top-[330px] -translate-y-1/2 z-[5] pointer-events-none h-[1000px]"
        >
          <Image
            src="/PopularGame/pngaaa.png"
            alt="Girl Character"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          style={{ width: "340px" }}
          className="hidden lg:block xl:hidden absolute left-[12px] top-[290px] -translate-y-1/2 z-[5] pointer-events-none h-[680px]"
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
          <div className="text-center mb-8 md:mb-[37.3px] mt-6 md:mt-[38px]">
            <h2 className="leading-tight mt-[-60px] relative bottom-5">
              <span className="font-['Poppins'] font-bold text-[40px] sm:text-[56px] lg:text-[66px] xl:text-[82.43px] leading-[100%] tracking-[0%] text-white">
                {popularGames.title.part1}
              </span>{" "}
              <span className="font-['Poppins'] font-light text-[40px] sm:text-[56px] lg:text-[66px] xl:text-[82.43px] leading-[100%] tracking-[0%] text-[#008EFF]">
                {popularGames.title.part2}
              </span>
            </h2>
          </div>

          {screenSize === "mobile" && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3">
                <button
                  aria-label="Previous"
                  onClick={() => mobileGoTo("prev")}
                  className="flex-shrink-0 flex items-center justify-center w-[44px] h-[44px] focus:outline-none cursor-pointer touch-manipulation"
                >
                  <SmallLeftArrow />
                </button>

                <div
                  style={{
                    width: `${mobileCardWidth}px`,
                    overflow: "hidden",
                    paddingTop: "24px",
                    marginTop: "-24px",
                    paddingBottom: "8px",
                    marginBottom: "-8px",
                  }}
                  className="flex-shrink-0"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: `${MOBILE_CARD_GAP}px`,
                      transform: `translateX(${mobileTranslateX}px)`,
                      transition: mobileTransitioning
                        ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                        : "none",
                      willChange: "transform",
                    }}
                    onTransitionEnd={handleMobileTransitionEnd}
                  >
                    {mobileCloned.map((game, i) => (
                      <div
                        key={i}
                        style={{ width: `${mobileCardWidth}px`, flexShrink: 0 }}
                        className="rounded-[28.95px]"
                      >
                        <PopularGameCard
                          name={game.name}
                          coverImage={game.coverImage}
                          time={game.time}
                          region={game.region}
                          matchType={game.matchType}
                          price={game.price}
                          slots={game.slots}
                          width={`${mobileCardWidth}px`}
                          height="394px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  aria-label="Next"
                  onClick={() => mobileGoTo("next")}
                  className="flex-shrink-0 flex items-center justify-center w-[44px] h-[44px] focus:outline-none cursor-pointer touch-manipulation"
                >
                  <SmallRightArrow />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {games.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      mobileActiveDot === i
                        ? "bg-[#0185EB] w-4"
                        : "bg-[#374957] w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {screenSize === "tablet" && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4">
                <button
                  aria-label="Previous"
                  onClick={() => tabletGoTo("prev")}
                  className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] focus:outline-none cursor-pointer touch-manipulation"
                >
                  <SmallLeftArrow />
                </button>

                <div
                  style={{
                    width: `${tabletViewportWidth}px`,
                    overflow: "hidden",
                    paddingTop: "24px",
                    marginTop: "-24px",
                    paddingBottom: "8px",
                    marginBottom: "-8px",
                  }}
                  className="flex-shrink-0"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: `${MOBILE_CARD_GAP}px`,
                      transform: `translateX(${tabletTranslateX}px)`,
                      transition: tabletTransitioning
                        ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                        : "none",
                      willChange: "transform",
                    }}
                    onTransitionEnd={handleTabletTransitionEnd}
                  >
                    {tabletCloned.map((game, i) => (
                      <div
                        key={i}
                        style={{ width: `${tabletCardWidth}px`, flexShrink: 0 }}
                        className="rounded-[28.95px]"
                      >
                        <PopularGameCard
                          name={game.name}
                          coverImage={game.coverImage}
                          time={game.time}
                          region={game.region}
                          matchType={game.matchType}
                          price={game.price}
                          slots={game.slots}
                          width={`${tabletCardWidth}px`}
                          height="420px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  aria-label="Next"
                  onClick={() => tabletGoTo("next")}
                  className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] focus:outline-none cursor-pointer touch-manipulation"
                >
                  <SmallRightArrow />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {games.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      tabletActiveDot === i
                        ? "bg-[#0185EB] w-4"
                        : "bg-[#374957] w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {screenSize === "laptop" && (
            <div className="mb-10 px-2">
              <div className="flex items-center justify-center gap-6">
                <button
                  aria-label="Previous"
                  onClick={() => laptopGoTo("prev")}
                  className="flex-shrink-0 flex items-center relative top-[69px] justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
                >
                  <LeftArrowIcon />
                </button>

                <div
                  style={{
                    width: `${laptopViewportWidth}px`,
                    overflow: "hidden",
                    flexShrink: 0,
                    paddingTop: "24px",
                    marginTop: "-24px",
                    paddingBottom: "8px",
                    marginBottom: "-8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: `${MOBILE_CARD_GAP}px`,
                      transform: `translateX(${laptopTranslateX}px)`,
                      transition: laptopTransitioning
                        ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                        : "none",
                      willChange: "transform",
                    }}
                    onTransitionEnd={handleLaptopTransitionEnd}
                  >
                    {laptopCloned.map((game, i) => (
                      <div
                        key={i}
                        style={{ width: `${laptopCardWidth}px`, flexShrink: 0 }}
                        className="rounded-[28.95px] opacity-100"
                      >
                        <PopularGameCard
                          name={game.name}
                          coverImage={game.coverImage}
                          time={game.time}
                          region={game.region}
                          matchType={game.matchType}
                          price={game.price}
                          slots={game.slots}
                          width={`${laptopCardWidth}px`}
                          height="432px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  aria-label="Next"
                  onClick={() => laptopGoTo("next")}
                  className="flex-shrink-0 flex relative top-[69px] items-center justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
                >
                  <RightArrowSVGIcon />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {games.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      laptopActiveDot === i
                        ? "bg-[#0185EB] w-4"
                        : "bg-[#374957] w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {screenSize === "desktop" && (
            <div className="mb-10 md:mb-16 px-4 md:px-8">
              <div className="flex items-center justify-center gap-8">
                <button
                  aria-label="Previous"
                  onClick={() => desktopGoTo("prev")}
                  className="flex-shrink-0 flex items-center relative top-[69px] justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
                >
                  <LeftArrowIcon />
                </button>

                <div
                  style={{
                    width: `${VIEWPORT_WIDTH}px`,
                    overflow: "hidden",
                    flexShrink: 0,
                    paddingTop: "24px",
                    marginTop: "-24px",
                    paddingBottom: "8px",
                    marginBottom: "-8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: `${CARD_GAP}px`,
                      transform: `translateX(${desktopTranslateX}px)`,
                      transition: desktopTransitioning
                        ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                        : "none",
                      willChange: "transform",
                    }}
                    onTransitionEnd={handleDesktopTransitionEnd}
                  >
                    {desktopCloned.map((game, i) => (
                      <div
                        key={i}
                        style={{ width: `${CARD_WIDTH}px`, flexShrink: 0 }}
                        className="rounded-[28.95px] opacity-100"
                      >
                        <PopularGameCard
                          name={game.name}
                          coverImage={game.coverImage}
                          time={game.time}
                          region={game.region}
                          matchType={game.matchType}
                          price={game.price}
                          slots={game.slots}
                          width="300.58px"
                          height="422.34px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  aria-label="Next"
                  onClick={() => desktopGoTo("next")}
                  className="flex-shrink-0 flex relative top-[69px] items-center justify-center w-[52px] h-[52px] rounded-full focus:outline-none cursor-pointer"
                >
                  <RightArrowSVGIcon />
                </button>
              </div>
            </div>
          )}

          <div className="text-center mb-8 md:mb-10 lg:mb-16 max-w-3xl mx-auto px-4">
            <p className="font-['Poppins'] mt-1.5 relative bottom-[50px] font-normal text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[19.1px] leading-[1.6] lg:leading-[29px] w-full xl:w-[848.08px] xl:mx-auto text-white text-center">
              {popularGames.description}
            </p>
          </div>

          {screenSize !== "desktop" && (
            <div className="flex justify-center mb-8">
              <a
                href={popularGames.button.href}
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 shadow-lg hover:shadow-xl
                bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)]
                rounded-tl-[100px] rounded-br-[100px]
                font-['Poppins'] font-normal text-[16px] sm:text-[18px] leading-[100%] tracking-[0%]
                px-6 sm:px-8 h-[56px] sm:h-[64px]
                w-auto max-w-[90vw]"
              >
                <span>{popularGames.button.text}</span>
                <RightArrowIcon />
              </a>
            </div>
          )}

          {screenSize === "desktop" && (
            <div className="hidden mb-[20px] lg:flex justify-end px-4 md:px-0">
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
          )}
        </div>
      </section>
    </div>
  );
};

export default PopularGame;
