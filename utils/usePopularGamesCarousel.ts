"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PopularGameItem } from "@/types/populargame";
import {
  POPULAR_GAME_CARD_GAP,
  POPULAR_GAME_CARD_WIDTH,
  POPULAR_GAME_LAPTOP_VISIBLE,
  POPULAR_GAME_MOBILE_GAP,
  POPULAR_GAME_MOBILE_VISIBLE,
  POPULAR_GAME_TABLET_VISIBLE,
  POPULAR_GAME_VISIBLE_COUNT,
  type PopularGamesScreenSize,
} from "@/utils/popularGameCarouselConstants";

function useCarouselTrack<T>(
  items: T[],
  visibleCount: number,
  cardWidth: number,
  cardGap: number,
) {
  const n = items.length;
  const cloned = useMemo(
    () => [
      ...items.slice(-visibleCount),
      ...items,
      ...items.slice(0, visibleCount),
    ],
    [items, visibleCount],
  );

  const cardStep = cardWidth + cardGap;
  const viewportWidth =
    visibleCount * cardWidth + (visibleCount - 1) * cardGap;

  const [index, setIndex] = useState(visibleCount);
  const [transitioning, setTransitioning] = useState(true);
  const animating = useRef(false);

  const goTo = useCallback((direction: "prev" | "next") => {
    if (animating.current) return;
    animating.current = true;
    setTransitioning(true);
    setIndex((prev) => prev + (direction === "next" ? 1 : -1));
  }, []);

  const onTransitionEnd = useCallback(() => {
    animating.current = false;
    setIndex((prev) => {
      if (prev >= n + visibleCount) {
        setTransitioning(false);
        return visibleCount;
      }
      if (prev < visibleCount) {
        setTransitioning(false);
        return n + visibleCount - 1;
      }
      return prev;
    });
  }, [n, visibleCount]);

  const translateX = -index * cardStep;

  return {
    cloned,
    index,
    goTo,
    onTransitionEnd,
    translateX,
    transitioning,
    viewportWidth,
    cardStep,
  };
}

export function usePopularGamesCarousel(games: PopularGameItem[]) {
  const gameCount = games.length;

  const [screenSize, setScreenSize] = useState<PopularGamesScreenSize>("mobile");
  const [mobileCardWidth, setMobileCardWidth] = useState(280);
  const [tabletCardWidth, setTabletCardWidth] = useState(320);
  const [laptopCardWidth, setLaptopCardWidth] = useState(400);
  const [lgDesktopCardWidth, setLgDesktopCardWidth] = useState(
    POPULAR_GAME_CARD_WIDTH,
  );

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1600) {
        setScreenSize("desktop");
      } else if (w >= 1280) {
        setScreenSize("large-desktop");
        const arrowArea = 52 * 2 + 32 * 2;
        const containerPad = w >= 1400 ? 192 : 128;
        const available = w - arrowArea - containerPad;
        const cardW = Math.floor(
          (available - POPULAR_GAME_CARD_GAP * (POPULAR_GAME_VISIBLE_COUNT - 1)) /
            POPULAR_GAME_VISIBLE_COUNT,
        );
        setLgDesktopCardWidth(
          Math.min(POPULAR_GAME_CARD_WIDTH, Math.max(220, cardW)),
        );
      } else if (w >= 1024) {
        setScreenSize("laptop");
        const arrowArea = 52 * 2 + 24 * 2;
        const containerPad = 128;
        const available = w - arrowArea - containerPad;
        const cardW = Math.floor((available - POPULAR_GAME_MOBILE_GAP) / 2);
        setLaptopCardWidth(Math.min(460, Math.max(300, cardW)));
      } else if (w >= 640) {
        setScreenSize("tablet");
        const arrowArea = 52 * 2 + 16 * 2;
        const containerPad = w >= 768 ? 64 : 32;
        const available = w - arrowArea - containerPad;
        const cardW = Math.floor((available - POPULAR_GAME_MOBILE_GAP) / 2);
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

  const desktop = useCarouselTrack(
    games,
    POPULAR_GAME_VISIBLE_COUNT,
    POPULAR_GAME_CARD_WIDTH,
    POPULAR_GAME_CARD_GAP,
  );

  const lgDesktop = useCarouselTrack(
    games,
    POPULAR_GAME_VISIBLE_COUNT,
    lgDesktopCardWidth,
    POPULAR_GAME_CARD_GAP,
  );

  const laptop = useCarouselTrack(
    games,
    POPULAR_GAME_LAPTOP_VISIBLE,
    laptopCardWidth,
    POPULAR_GAME_MOBILE_GAP,
  );

  const tablet = useCarouselTrack(
    games,
    POPULAR_GAME_TABLET_VISIBLE,
    tabletCardWidth,
    POPULAR_GAME_MOBILE_GAP,
  );

  const mobile = useCarouselTrack(
    games,
    POPULAR_GAME_MOBILE_VISIBLE,
    mobileCardWidth,
    POPULAR_GAME_MOBILE_GAP,
  );

  const tabletActiveDot =
    (tablet.index - POPULAR_GAME_TABLET_VISIBLE + gameCount) % gameCount;
  const mobileActiveDot =
    (mobile.index - POPULAR_GAME_MOBILE_VISIBLE + gameCount) % gameCount;
  const laptopActiveDot =
    (laptop.index - POPULAR_GAME_LAPTOP_VISIBLE + gameCount) % gameCount;

  return {
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
  };
}
