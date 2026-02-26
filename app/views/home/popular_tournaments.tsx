"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import popularTournamentsData from "@/constant/popular_tournaments.json";
import TournamentImageCard from "@/components/TournamentImageCard";
import BlacImage from "@/public/Image/Hero/BlacImage.png";
import Ellipse7 from "@/public/Image/PopularTournament/Ellipse 7.png";
import Ellipse8 from "@/public/Image/PopularTournament/Ellipse 8.png";
import Ellipse9 from "@/public/Image/PopularTournament/Ellipse 9.png";
import CornerImage from "@/public/Image/PopularTournament/side-corner-image.png";
import blurbaground from "@/public/Image/PopularTournament/Rectangle 54 (1).png";

const CARD_WIDTH = 365.6763;
const CARD_GAP = 6.36;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const VISIBLE_COUNT = 4;
const VIEWPORT_WIDTH =
  VISIBLE_COUNT * CARD_WIDTH + (VISIBLE_COUNT - 1) * CARD_GAP;

const LAPTOP_VISIBLE_COUNT = 2;
const LAPTOP_CARD_GAP = 12;

const MOBILE_CARD_WIDTH = 260;
const MOBILE_CARD_HEIGHT = 440;
const MOBILE_CARD_GAP = 12;
const MOBILE_CARD_STEP = MOBILE_CARD_WIDTH + MOBILE_CARD_GAP;
const MOBILE_VISIBLE_COUNT = 1;

const PopularTournaments = () => {
  const { popularTournaments } = popularTournamentsData;
  const games = popularTournaments.tournaments;

  const ellipseImages = [Ellipse7, Ellipse8, Ellipse9, Ellipse7];

  const [screenSize, setScreenSize] = useState<"mobile" | "laptop" | "desktop">(
    "mobile",
  );
  const [laptopCardWidth, setLaptopCardWidth] = useState(420);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) {
        setScreenSize("desktop");
      } else if (w >= 1024) {
        setScreenSize("laptop");
        const arrowArea = 45 * 2 + 40 * 2;
        const containerPad = 160;
        const available = w - arrowArea - containerPad;
        const cardW = Math.floor((available - LAPTOP_CARD_GAP) / 2);
        setLaptopCardWidth(Math.min(480, Math.max(340, cardW)));
      } else {
        setScreenSize("mobile");
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const laptopCardStep = laptopCardWidth + LAPTOP_CARD_GAP;
  const laptopViewportWidth =
    LAPTOP_VISIBLE_COUNT * laptopCardWidth +
    (LAPTOP_VISIBLE_COUNT - 1) * LAPTOP_CARD_GAP;
  const laptopCardHeight = Math.round(laptopCardWidth * (620.85 / 365.68));
  const laptopBadgeSize = Math.round(laptopCardWidth * (93.8 / 365.68));
  const laptopBadgeOffset = Math.round(laptopBadgeSize * 0.5);

  const cloned = [
    ...games.slice(-VISIBLE_COUNT),
    ...games,
    ...games.slice(0, VISIBLE_COUNT),
  ];
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimating = useRef(false);

  const goTo = useCallback((direction: "prev" | "next") => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + (direction === "next" ? 1 : -1));
  }, []);

  const handleTransitionEnd = useCallback(() => {
    isAnimating.current = false;
    setCurrentIndex((prev) => {
      if (prev >= games.length + VISIBLE_COUNT) {
        setIsTransitioning(false);
        return VISIBLE_COUNT;
      }
      if (prev < VISIBLE_COUNT) {
        setIsTransitioning(false);
        return games.length + VISIBLE_COUNT - 1;
      }
      return prev;
    });
  }, [games.length]);

  const translateX = -currentIndex * CARD_STEP;

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
  const laptopActiveDot =
    (laptopIndex - LAPTOP_VISIBLE_COUNT + games.length) % games.length;

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

  const mobileTranslateX = -mobileIndex * MOBILE_CARD_STEP;
  const activeDotIndex =
    (mobileIndex - MOBILE_VISIBLE_COUNT + games.length) % games.length;

  return (
    <div className="w-full relative bg-[#010D18] overflow-hidden min-h-screen py-20">
      <div className="hidden lg:block absolute h-[95%] right-0 top-0 w-[500px] z-10">
        <Image
          src={CornerImage}
          alt="Corner"
          fill
          className="object-contain object-top-right"
        />
      </div>

      <Image
        src={blurbaground}
        alt="Corners"
        fill
        className="object-contain object-top-right -ml-[60vw] opacity-100% z-1"
      />

      <Image
        src={BlacImage}
        alt="Background"
        fill
        className="object-cover opacity-30 z-1"
      />

      <section className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-8 md:mb-12 flex flex-col gap-4 md:gap-[30px]">
          <h2 className="flex flex-wrap items-baseline gap-2 md:gap-4">
            <span className="font-['Poppins'] font-bold text-[40px] sm:text-[56px] lg:text-[82.43px] leading-[100%] tracking-normal text-white">
              Popular
            </span>
            <span className="font-['Poppins'] font-light text-[40px] sm:text-[56px] lg:text-[82.43px] leading-[100%] tracking-normal text-[#0185EB]">
              Tournaments
            </span>
          </h2>

          <p className="font-['Poppins'] font-medium text-[15px] sm:text-[18px] lg:text-[23.21px] leading-[1.5] tracking-normal text-white max-w-[853px]">
            {popularTournaments.description}
          </p>
        </div>

        <div className="mb-10 md:mb-16 mt-6 md:mt-[80px] overflow-hidden">
          <svg
            viewBox="0 0 627 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[627px] h-auto"
          >
            <path
              d="M0.439331 9.98529C-0.146423 10.5711 -0.146423 11.5208 0.439331 12.1066L9.98529 21.6526C10.571 22.2383 11.5208 22.2383 12.1066 21.6526C12.6924 21.0668 12.6924 20.117 12.1066 19.5312L3.62134 11.046L12.1066 2.56067C12.6924 1.97488 12.6924 1.02514 12.1066 0.43935C11.5208 -0.146436 10.571 -0.146436 9.98529 0.439351L0.439331 9.98529ZM626.5 9.5459L1.5 9.54595L1.5 12.546L626.5 12.5459L626.5 9.5459Z"
              fill="#0185EB"
            />
          </svg>
        </div>

        {screenSize === "mobile" && (
          <div className="lg:hidden">
            <div className="flex items-center justify-center gap-4">
              <button
                aria-label="Previous"
                onClick={() => mobileGoTo("prev")}
                className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity cursor-pointer p-2"
              >
                <svg
                  width="22"
                  height="44"
                  viewBox="0 0 45 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.8563 5.6845C44.8549 7.19093 44.2555 8.63518 43.1896 9.69972L14.1285 38.7608C13.2488 39.6402 12.5511 40.6843 12.075 41.8334C11.5989 42.9825 11.3539 44.2141 11.3539 45.4579C11.3539 46.7017 11.5989 47.9334 12.075 49.0825C12.5511 50.2316 13.2488 51.2756 14.1285 52.155L43.1517 81.1783C44.1867 82.2499 44.7594 83.6852 44.7465 85.1749C44.7335 86.6647 44.136 88.0898 43.0825 89.1433C42.029 90.1968 40.6039 90.7943 39.1141 90.8073C37.6244 90.8202 36.1891 90.2475 35.1175 89.2125L6.09422 60.212C2.19174 56.3018 0 51.0031 0 45.4788C0 39.9544 2.19174 34.6557 6.09422 30.7456L35.1553 1.66549C35.95 0.870336 36.9626 0.328771 38.0652 0.10932C39.1677 -0.110131 40.3105 0.00239394 41.3491 0.432657C42.3876 0.86292 43.2752 1.59158 43.8995 2.52644C44.5238 3.4613 44.8568 4.56035 44.8563 5.6845Z"
                    fill="#374957"
                  />
                </svg>
              </button>

              <div
                style={{ width: `${MOBILE_CARD_WIDTH}px`, overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: `${MOBILE_CARD_GAP}px`,
                    alignItems: "flex-end",
                    transform: `translateX(${mobileTranslateX}px)`,
                    transition: mobileTransitioning
                      ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                      : "none",
                    willChange: "transform",
                    paddingTop: "50px",
                  }}
                  onTransitionEnd={handleMobileTransitionEnd}
                >
                  {mobileCloned.map((tournament, i) => {
                    const ellipseImage =
                      ellipseImages[i % ellipseImages.length];
                    return (
                      <div
                        key={i}
                        style={{
                          width: `${MOBILE_CARD_WIDTH}px`,
                          flexShrink: 0,
                        }}
                        className="flex flex-col items-center relative"
                      >
                        <div
                          className="absolute -top-[40px] left-1/2 -translate-x-1/2 z-30"
                          style={{ width: "80px", height: "80px" }}
                        >
                          <Image
                            src={ellipseImage}
                            alt="Tournament badge"
                            width={80}
                            height={80}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div
                          style={{
                            width: `${MOBILE_CARD_WIDTH}px`,
                            height: `${MOBILE_CARD_HEIGHT}px`,
                          }}
                        >
                          <TournamentImageCard
                            coverImage={tournament.coverImage}
                            width={`${MOBILE_CARD_WIDTH}px`}
                            height={`${MOBILE_CARD_HEIGHT}px`}
                          />
                        </div>

                        <div className="mt-3 flex flex-col items-center text-center">
                          <h3 className="font-['Poppins'] font-bold text-[18px] leading-[100%] text-white">
                            {tournament.name}
                          </h3>
                          <p className="font-['Poppins'] font-normal text-[12px] leading-[100%] mt-1 text-white">
                            {tournament.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                aria-label="Next"
                onClick={() => mobileGoTo("next")}
                className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity cursor-pointer p-2"
              >
                <svg
                  width="22"
                  height="44"
                  viewBox="0 0 45 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-7.07492e-05 85.1229C0.00125556 83.6164 0.60075 82.1722 1.66662 81.1076L30.7278 52.0465C31.6074 51.1671 32.3051 50.1231 32.7812 48.974C33.2573 47.8249 33.5023 46.5932 33.5023 45.3494C33.5023 44.1056 33.2573 42.874 32.7812 41.7249C32.3051 40.5758 31.6074 39.5317 30.7278 38.6523L1.70451 9.6291C0.6695 8.55748 0.0967948 7.12222 0.109741 5.63244C0.122687 4.14265 0.720249 2.71756 1.77372 1.66408C2.8272 0.610609 4.2523 0.0130468 5.74208 0.000101137C7.23186 -0.0128445 8.66712 0.559861 9.73874 1.59487L38.762 30.5954C42.6645 34.5055 44.8562 39.8042 44.8562 45.3286C44.8562 50.853 42.6645 56.1517 38.762 60.0618L9.70086 89.1419C8.90622 89.937 7.89357 90.4786 6.79104 90.698C5.68852 90.9175 4.54567 90.805 3.50712 90.3747C2.46857 89.9444 1.58099 89.2158 0.956684 88.2809C0.332381 87.3461 -0.000580403 86.247 -7.07492e-05 85.1229Z"
                    fill="#374957"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-5">
              {games.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeDotIndex === i
                      ? "bg-[#0185EB] w-5"
                      : "bg-[#374957] w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {screenSize === "laptop" && (
          <div>
            <div className="flex relative z-20 items-center justify-center gap-10 w-full mt-[3vw]">
              <div
                className="flex-shrink-0 opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
                onClick={() => laptopGoTo("prev")}
              >
                <svg
                  width="45"
                  height="91"
                  viewBox="0 0 45 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.8563 5.6845C44.8549 7.19093 44.2555 8.63518 43.1896 9.69972L14.1285 38.7608C13.2488 39.6402 12.5511 40.6843 12.075 41.8334C11.5989 42.9825 11.3539 44.2141 11.3539 45.4579C11.3539 46.7017 11.5989 47.9334 12.075 49.0825C12.5511 50.2316 13.2488 51.2756 14.1285 52.155L43.1517 81.1783C44.1867 82.2499 44.7594 83.6852 44.7465 85.1749C44.7335 86.6647 44.136 88.0898 43.0825 89.1433C42.029 90.1968 40.6039 90.7943 39.1141 90.8073C37.6244 90.8202 36.1891 90.2475 35.1175 89.2125L6.09422 60.212C2.19174 56.3018 0 51.0031 0 45.4788C0 39.9544 2.19174 34.6557 6.09422 30.7456L35.1553 1.66549C35.95 0.870336 36.9626 0.328771 38.0652 0.10932C39.1677 -0.110131 40.3105 0.00239394 41.3491 0.432657C42.3876 0.86292 43.2752 1.59158 43.8995 2.52644C44.5238 3.4613 44.8568 4.56035 44.8563 5.6845Z"
                    fill="#374957"
                  />
                </svg>
              </div>

              <div
                style={{
                  width: `${laptopViewportWidth}px`,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: `${LAPTOP_CARD_GAP}px`,
                    alignItems: "flex-end",
                    transform: `translateX(${laptopTranslateX}px)`,
                    transition: laptopTransitioning
                      ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                      : "none",
                    willChange: "transform",
                    paddingTop: `${laptopBadgeOffset + 10}px`,
                  }}
                  onTransitionEnd={handleLaptopTransitionEnd}
                >
                  {laptopCloned.map((tournament, i) => {
                    const ellipseImage =
                      ellipseImages[i % ellipseImages.length];
                    return (
                      <div
                        key={i}
                        style={{ width: `${laptopCardWidth}px`, flexShrink: 0 }}
                        className="group relative flex flex-col items-center hover:z-50"
                      >
                        <div
                          className="absolute left-1/2 -translate-x-1/2 z-30 opacity-100"
                          style={{
                            width: `${laptopBadgeSize}px`,
                            height: `${laptopBadgeSize}px`,
                            top: `-${laptopBadgeOffset}px`,
                          }}
                        >
                          <Image
                            src={ellipseImage}
                            alt="Tournament badge"
                            width={laptopBadgeSize}
                            height={laptopBadgeSize}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div
                          className="transition-all duration-500 ease-in-out cursor-pointer"
                          style={{
                            width: `${laptopCardWidth}px`,
                            height: `${laptopCardHeight}px`,
                            opacity: 1,
                          }}
                        >
                          <TournamentImageCard
                            coverImage={tournament.coverImage}
                            width={`${laptopCardWidth}px`}
                            height={`${laptopCardHeight}px`}
                          />
                        </div>

                        <div className="mt-[15.9px] flex flex-col items-center text-center">
                          <h3 className="font-['Poppins'] font-bold text-[22px] leading-[100%] tracking-[0%] text-white whitespace-nowrap opacity-100">
                            {tournament.name}
                          </h3>
                          <p className="font-['Poppins'] font-normal text-[13px] leading-[100%] tracking-[0%] mt-2 text-white whitespace-nowrap opacity-100">
                            {tournament.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className="flex-shrink-0 opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
                onClick={() => laptopGoTo("next")}
              >
                <svg
                  width="45"
                  height="91"
                  viewBox="0 0 45 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-7.07492e-05 85.1229C0.00125556 83.6164 0.60075 82.1722 1.66662 81.1076L30.7278 52.0465C31.6074 51.1671 32.3051 50.1231 32.7812 48.974C33.2573 47.8249 33.5023 46.5932 33.5023 45.3494C33.5023 44.1056 33.2573 42.874 32.7812 41.7249C32.3051 40.5758 31.6074 39.5317 30.7278 38.6523L1.70451 9.6291C0.6695 8.55748 0.0967948 7.12222 0.109741 5.63244C0.122687 4.14265 0.720249 2.71756 1.77372 1.66408C2.8272 0.610609 4.2523 0.0130468 5.74208 0.000101137C7.23186 -0.0128445 8.66712 0.559861 9.73874 1.59487L38.762 30.5954C42.6645 34.5055 44.8562 39.8042 44.8562 45.3286C44.8562 50.853 42.6645 56.1517 38.762 60.0618L9.70086 89.1419C8.90622 89.937 7.89357 90.4786 6.79104 90.698C5.68852 90.9175 4.54567 90.805 3.50712 90.3747C2.46857 89.9444 1.58099 89.2158 0.956684 88.2809C0.332381 87.3461 -0.000580403 86.247 -7.07492e-05 85.1229Z"
                    fill="#374957"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {games.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    laptopActiveDot === i
                      ? "bg-[#0185EB] w-5"
                      : "bg-[#374957] w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {screenSize === "desktop" && (
          <div className="flex relative z-20 items-center justify-center gap-10 w-full mt-[3vw]">
            <div
              className="flex-shrink-0 opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
              onClick={() => goTo("prev")}
            >
              <svg
                width="45"
                height="91"
                viewBox="0 0 45 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.8563 5.6845C44.8549 7.19093 44.2555 8.63518 43.1896 9.69972L14.1285 38.7608C13.2488 39.6402 12.5511 40.6843 12.075 41.8334C11.5989 42.9825 11.3539 44.2141 11.3539 45.4579C11.3539 46.7017 11.5989 47.9334 12.075 49.0825C12.5511 50.2316 13.2488 51.2756 14.1285 52.155L43.1517 81.1783C44.1867 82.2499 44.7594 83.6852 44.7465 85.1749C44.7335 86.6647 44.136 88.0898 43.0825 89.1433C42.029 90.1968 40.6039 90.7943 39.1141 90.8073C37.6244 90.8202 36.1891 90.2475 35.1175 89.2125L6.09422 60.212C2.19174 56.3018 0 51.0031 0 45.4788C0 39.9544 2.19174 34.6557 6.09422 30.7456L35.1553 1.66549C35.95 0.870336 36.9626 0.328771 38.0652 0.10932C39.1677 -0.110131 40.3105 0.00239394 41.3491 0.432657C42.3876 0.86292 43.2752 1.59158 43.8995 2.52644C44.5238 3.4613 44.8568 4.56035 44.8563 5.6845Z"
                  fill="#374957"
                />
              </svg>
            </div>

            <div
              style={{
                width: `${VIEWPORT_WIDTH}px`,
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: `${CARD_GAP}px`,
                  alignItems: "flex-end",
                  transform: `translateX(${translateX}px)`,
                  transition: isTransitioning
                    ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                    : "none",
                  willChange: "transform",
                  paddingTop: "56.9px",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {cloned.map((tournament, i) => {
                  const ellipseImage = ellipseImages[i % ellipseImages.length];
                  const isSecondCard = i % 4 === 1;

                  return (
                    <div
                      key={i}
                      style={{ width: `${CARD_WIDTH}px`, flexShrink: 0 }}
                      className="group relative flex flex-col items-center hover:z-50"
                    >
                      <div
                        className="absolute -top-[46.9px] left-1/2 -translate-x-1/2 z-30 opacity-100 rotate-0"
                        style={{
                          width: "93.80391693115234px",
                          height: "93.80391693115234px",
                        }}
                      >
                        <Image
                          src={ellipseImage}
                          alt="Tournament badge"
                          width={93.80391693115234}
                          height={93.80391693115234}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div
                        className="transition-all duration-500 ease-in-out group-hover:w-[448.35px] group-hover:h-[761.22px] group-hover:scale-110 cursor-pointer"
                        style={{
                          width: "365.6763000488281px",
                          height: "620.854736328125px",
                          opacity: 1,
                          borderRadius: isSecondCard ? "24.64px" : undefined,
                          transform: isSecondCard ? "rotate(0deg)" : undefined,
                        }}
                      >
                        <TournamentImageCard
                          coverImage={tournament.coverImage}
                          width="365.6763000488281px"
                          height="620.854736328125px"
                        />
                      </div>

                      <div className="mt-[15.9px] flex flex-col items-center text-center">
                        <h3 className="font-['Poppins'] font-bold text-[28.02px] leading-[100%] tracking-[0%] text-white whitespace-nowrap opacity-100">
                          {tournament.name}
                        </h3>
                        <p className="font-['Poppins'] font-normal text-[14.29px] leading-[100%] tracking-[0%] mt-2 text-white whitespace-nowrap opacity-100">
                          {tournament.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="flex-shrink-0 opacity-40 hover:opacity-100 cursor-pointer transition-opacity"
              onClick={() => goTo("next")}
            >
              <svg
                width="45"
                height="91"
                viewBox="0 0 45 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-7.07492e-05 85.1229C0.00125556 83.6164 0.60075 82.1722 1.66662 81.1076L30.7278 52.0465C31.6074 51.1671 32.3051 50.1231 32.7812 48.974C33.2573 47.8249 33.5023 46.5932 33.5023 45.3494C33.5023 44.1056 33.2573 42.874 32.7812 41.7249C32.3051 40.5758 31.6074 39.5317 30.7278 38.6523L1.70451 9.6291C0.6695 8.55748 0.0967948 7.12222 0.109741 5.63244C0.122687 4.14265 0.720249 2.71756 1.77372 1.66408C2.8272 0.610609 4.2523 0.0130468 5.74208 0.000101137C7.23186 -0.0128445 8.66712 0.559861 9.73874 1.59487L38.762 30.5954C42.6645 34.5055 44.8562 39.8042 44.8562 45.3286C44.8562 50.853 42.6645 56.1517 38.762 60.0618L9.70086 89.1419C8.90622 89.937 7.89357 90.4786 6.79104 90.698C5.68852 90.9175 4.54567 90.805 3.50712 90.3747C2.46857 89.9444 1.58099 89.2158 0.956684 88.2809C0.332381 87.3461 -0.000580403 86.247 -7.07492e-05 85.1229Z"
                  fill="#374957"
                />
              </svg>
            </div>
          </div>
        )}

        <div className="mt-20 flex items-center justify-end w-full">
          <div className="flex items-center gap-[25px] max-w-3xl w-full">
            <span className="font-['Poppins'] font-normal text-[21.86px] leading-[100%] h-[33px] text-white whitespace-nowrap">
              Explore more
            </span>

            <div className="flex items-center w-full">
              <svg
                viewBox="0 0 627 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[625px] h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M626.061 12.1066C626.646 11.5208 626.646 10.571 626.061 9.98524L616.515 0.439297C615.929 -0.14649 614.979 -0.14649 614.393 0.439297C613.808 1.02508 613.808 1.97483 614.393 2.56062L622.879 11.0459L614.393 19.5312C613.808 20.117 613.808 21.0667 614.393 21.6525C614.979 22.2383 615.929 22.2383 616.515 21.6525L626.061 12.1066ZM0 12.5459H625V9.5459H0V12.5459Z"
                  fill="#0185EB"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularTournaments;
