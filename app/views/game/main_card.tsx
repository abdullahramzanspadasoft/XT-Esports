import ChevronDownIcon from "@/icons/ChevronDownIcon";
import RightArrowIcon from "@/icons/RightArrowIcon";
import Image from "next/image";
import XtEsportsBanner from "@/layout/footer";
import gameMainCard from "@/constant/game/main_card.json";

const gameMainCardContent = gameMainCard.content;
const gameMainCardImages = gameMainCard.images;

const Game = () => {
  const gridCards = Array.from(
    { length: 16 },
    () => gameMainCardImages.gridCard
  );

  return (
    <div className="w-full bg-[linear-gradient(163.9deg,#000409_0%,#002446_75.63%)] text-white">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 pt-[108px] sm:px-6 sm:pt-[124px] lg:px-10 lg:pt-[140px] 2xl:px-[171px] 2xl:pt-[183px]">
        <div className="grid w-full overflow-hidden rounded-[24px] sm:rounded-[40px] 2xl:rounded-[61px]">
          <Image
            src={gameMainCardImages.heroCard}
            alt={gameMainCardContent.alts.hero}
            width={1572}
            height={789}
            className="col-start-1 row-start-1 h-auto w-full object-cover"
            priority
          />
          <Image
            src={gameMainCardImages.heroOverlay}
            alt={gameMainCardContent.alts.overlay}
            width={1572}
            height={789}
            className="col-start-1 row-start-1 h-auto w-full object-cover"
            priority
          />

          <div className="col-start-1 row-start-1 flex h-full w-full flex-col px-4 sm:px-8 lg:px-12 2xl:px-[65px]">
            <h1 className="mt-4 w-fit font-['Poppins'] text-[38px] font-bold leading-none sm:mt-8 sm:text-[52px] lg:mt-12 lg:text-[64px] 2xl:mt-[74px] 2xl:text-[77px]">
              {gameMainCardContent.title}
            </h1>

            <div className="mt-8 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between 2xl:mt-[340px]">
              <div className="max-w-[639.38px]">
                <h1 className="font-[Poppins] text-[38px] font-bold leading-none sm:text-[52px] lg:text-[64px] 2xl:text-[77px]">
                  {gameMainCardContent.featuredGame}
                </h1>
                <p className="mt-4 font-[Poppins] text-[16px] font-normal text-white sm:text-[18px] lg:text-[20px] 2xl:text-[22.03px]">
                  {gameMainCardContent.description}
                </p>
              </div>

              <div className="flex items-center self-start lg:self-end">
                {gameMainCardImages.logos.map((logoImage, index) => (
                  <Image
                    key={index}
                    src={logoImage}
                    alt={gameMainCardContent.alts.logo}
                    width={38}
                    height={38}
                    className="h-[32px] w-[32px] border-[2.25px] border-transparent object-cover sm:h-[34px] sm:w-[34px] 2xl:h-[37.74px] 2xl:w-[37.74px]"
                    style={{ marginLeft: index === 0 ? 0 : "-15px" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-[9px] 2xl:mt-[39px]">
          <div className="h-[22px] w-[22px] rounded-full bg-[#002649]" />
          <div className="h-[22px] w-[22px] rounded-full bg-[#002649]" />
          <div className="h-[30px] w-[30px] rounded-full bg-[#0184E9]" />
          <div className="h-[22px] w-[22px] rounded-full bg-[#002649]" />
        </div>

        <div className="mt-10 flex w-full flex-col gap-4 2xl:mt-[124px] 2xl:flex-row 2xl:items-center 2xl:gap-[18px]">
          <div className="flex h-[80px] w-full max-w-[443px] items-center gap-[40px] rounded-[17px] bg-[#000B15] px-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={gameMainCardContent.icons.searchPath} fill="#008FFF" />
            </svg>

            <input
              type="text"
              placeholder={gameMainCardContent.searchPlaceholder}
              className="w-full bg-transparent font-[Poppins] text-[22px] text-white outline-none placeholder:text-[#FFFFFF33]"
            />
          </div>

          <div className="flex h-[80px] w-full max-w-[218px] items-center rounded-[17px] bg-[#000B15] px-7">
            <div className="flex w-full items-center justify-between font-[Poppins] text-[22.03px] font-normal leading-[100%] tracking-[0%] text-[#FFFFFF33]">
              <span>{gameMainCardContent.categoryLabel}</span>
              <ChevronDownIcon className="ml-8 shrink-0" />
            </div>
          </div>

          <button className="flex h-[80px] w-full max-w-[218px] items-center justify-center rounded-[17px] bg-[#0184E9] font-[Poppins] text-[22.03px] font-normal leading-[100%] tracking-[0%] text-[#011425]">
            {gameMainCardContent.findButtonLabel}
          </button>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 justify-items-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-items-start xl:gap-x-[28px] 2xl:mt-[81px]">
          {gridCards.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={gameMainCardContent.alts.gameCard}
              width={366}
              height={550}
              className="h-auto w-full max-w-[366px] rounded-[31px] object-cover"
            />
          ))}
        </div>

        <div className="mt-12 flex w-full items-center justify-center gap-1.5 2xl:mt-[145px]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[7px] border border-[#0074F4] bg-[#011324] text-[22.03px] leading-[33px]">
            {gameMainCardContent.pagination.active}
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[7px] bg-[#011324] text-[22.03px] leading-[33px]">
            {gameMainCardContent.pagination.page2}
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[7px] bg-[#011324] text-[22.03px] leading-[33px]">
            {gameMainCardContent.pagination.page3}
          </div>
          <div className="flex items-center gap-[2px] px-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-[16px] w-[16px] rounded-[7px] bg-[#011324]" />
            ))}
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[7px] bg-[#011324] text-[22.03px] leading-[33px]">
            {gameMainCardContent.pagination.lastPage}
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[7px] bg-[#011324]">
            <div className="h-[24px] w-[24px]">
              <RightArrowIcon />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-8 w-full 2xl:mt-[30px]">
        <XtEsportsBanner />
      </div>
    </div>
  );
};

export default Game;
