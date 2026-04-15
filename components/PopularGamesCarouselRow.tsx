import type { ReactNode } from "react";
import {
  CarouselLeftArrowIcon,
  CarouselRightArrowIcon,
  CarouselSmallLeftArrowIcon,
  CarouselSmallRightArrowIcon,
} from "@/icons";
import PopularGameCarouselSlide from "@/components/PopularGameCarouselSlide";
import type { PopularGameItem } from "@/types/populargame";

const viewportChrome = {
  paddingTop: "24px",
  marginTop: "-24px",
  paddingBottom: "8px",
  marginBottom: "-8px",
} as const;

type ArrowVariant = "large" | "small";

type PopularGamesCarouselRowProps = {
  cloned: PopularGameItem[];
  viewportWidth: number;
  cardGap: number;
  cardWidthPx: number;
  cardHeight: string;
  translateX: number;
  transitioning: boolean;
  onTransitionEnd: () => void;
  onPrev: () => void;
  onNext: () => void;
  ariaPrevious: string;
  ariaNext: string;
  arrowVariant: ArrowVariant;
  prevButtonClassName: string;
  nextButtonClassName: string;
  outerClassName?: string;
  rowClassName?: string;
  viewportClassName?: string;
  slideClassName?: string;
  dots?: ReactNode;
};

export default function PopularGamesCarouselRow({
  cloned,
  viewportWidth,
  cardGap,
  cardWidthPx,
  cardHeight,
  translateX,
  transitioning,
  onTransitionEnd,
  onPrev,
  onNext,
  ariaPrevious,
  ariaNext,
  arrowVariant,
  prevButtonClassName,
  nextButtonClassName,
  outerClassName,
  rowClassName = "flex items-center justify-center gap-8",
  viewportClassName,
  slideClassName,
  dots,
}: PopularGamesCarouselRowProps) {
  const PrevIcon =
    arrowVariant === "large" ? CarouselLeftArrowIcon : CarouselSmallLeftArrowIcon;
  const NextIcon =
    arrowVariant === "large"
      ? CarouselRightArrowIcon
      : CarouselSmallRightArrowIcon;

  return (
    <div className={outerClassName}>
      <div className={rowClassName}>
        <button
          type="button"
          aria-label={ariaPrevious}
          onClick={onPrev}
          className={prevButtonClassName}
        >
          <PrevIcon />
        </button>
        <div
          style={{
            width: viewportWidth,
            overflow: "hidden",
            flexShrink: 0,
            ...viewportChrome,
          }}
          className={viewportClassName}
        >
          <div
            style={{
              display: "flex",
              gap: cardGap,
              transform: `translateX(${translateX}px)`,
              transition: transitioning
                ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                : "none",
              willChange: "transform",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {cloned.map((game, i) => (
              <PopularGameCarouselSlide
                key={`${game.id}-${i}`}
                game={game}
                widthPx={cardWidthPx}
                height={cardHeight}
                slideClassName={slideClassName}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label={ariaNext}
          onClick={onNext}
          className={nextButtonClassName}
        >
          <NextIcon />
        </button>
      </div>
      {dots}
    </div>
  );
}
