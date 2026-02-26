import Image from "next/image";
import { PopularGameCardProps } from "@/types/populargame";

const TournamentCard = ({
  name,
  coverImage,
  time,
  region,
  matchType,
  price,
  slots,
  width,
  height,
}: PopularGameCardProps) => {
  return (
    <div
      className="shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-4"
      style={{ width }}
    >
      <div
        className="relative w-full rounded-xl overflow-hidden mb-4 shadow-2xl"
        style={{ height }}
      >
        <Image src={coverImage} alt={name} fill sizes={width} />
      </div>
      <div>
        <div className="text-white">
          <h3 className="font-['Poppins'] font-bold text-[31.28px] leading-none tracking-normal w-[126px] h-[47px] text-center mx-auto mb-2">
            {name}
          </h3>
          <p className="font-['Poppins'] text-center font-medium text-[11.29px] leading-none tracking-normal w-[115px] h-[17px] text-[#939090] mx-auto">
            {time}
          </p>
        </div>
        <p className="font-['Poppins'] font-normal text-[11.29px] leading-none tracking-normal text-[#6B6B6B] w-[175px] h-[17px] text-center mx-auto">
          {region} • {matchType} • {price} • {slots}
        </p>
      </div>
    </div>
  );
};

export default TournamentCard;
