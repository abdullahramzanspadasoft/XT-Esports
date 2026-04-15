import PopularGameCard from "@/components/PopularGameCard";
import type { PopularGameItem } from "@/types/populargame";

type PopularGameCarouselSlideProps = {
  game: PopularGameItem;
  widthPx: number;
  height: string;
  slideClassName?: string;
};

export default function PopularGameCarouselSlide({
  game,
  widthPx,
  height,
  slideClassName = "rounded-[28.95px] opacity-100",
}: PopularGameCarouselSlideProps) {
  return (
    <div
      style={{ width: widthPx, flexShrink: 0 }}
      className={slideClassName}
    >
      <PopularGameCard
        name={game.name}
        coverImage={game.coverImage}
        time={game.time}
        region={game.region}
        matchType={game.matchType}
        price={game.price}
        slots={game.slots}
        width={`${widthPx}px`}
        height={height}
      />
    </div>
  );
}
