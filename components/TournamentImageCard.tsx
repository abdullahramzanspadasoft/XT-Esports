import Image from "next/image";

interface TournamentImageCardProps {
  coverImage: string;
  width: string;
  height: string;
}

const TournamentImageCard = ({
  coverImage,
  width,
  height,
}: TournamentImageCardProps) => {
  return (
    <div
      className="shrink-0 transition-all duration-300 ease-in-out hover:-translate-y-4"
      style={{ width }}
    >
      <div
        className="relative w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:rounded-[30.21px] hover:border-[2.38px] hover:border-[#009FFF] hover:border-solid"
        style={{ height }}
      >
        <Image
          src={coverImage}
          alt="Tournament"
          fill
          sizes={width}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default TournamentImageCard;
