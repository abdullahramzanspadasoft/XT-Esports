import Image from "next/image";
import XtEsportsBanner from "@/layout/footer";
import tournamentPage from "@/constant/tournament/page.json";

const tournamentPageContent = tournamentPage.content;
const tournamentPageImages = tournamentPage.images;

function TournamentPage() {
  return (
    <>
    <div className="pt-[200px] relative min-h-[4420px] pb-[120px] w-full overflow-x-hidden bg-[linear-gradient(163.9deg,_#000409_0%,_#002446_75.63%)]">
      <Image
        src={tournamentPageImages.background}
        alt={tournamentPageContent.alts.background}
        width={3840}
        height={2192}
        className="absolute w-[3840px] h-[2192px] top-[189px] left-[168px] opacity-100 mix-blend-overlay"
      />
      <Image
        src={tournamentPageImages.secondaryBackground}
        alt={tournamentPageContent.alts.background}
        width={3840}
        height={2192}
        className="absolute w-[3840px] h-[2192px] top-[2021px] opacity-100 mix-blend-overlay"
      />
      <div className="absolute w-[443px] h-[80px] top-[217px] left-[176px] rounded-[17px] opacity-100 bg-[#000B15] rotate-0"></div>
      <h1 className="absolute mt-1.5 w-[219px] h-[33px] top-[240px] left-[259px] font-poppins font-normal text-[22.03px] leading-none text-[#FFFFFF33]">
        {tournamentPageContent.searchPlaceholder}
      </h1>
      <div className="absolute w-[24px] h-[24px] top-[245px] left-[195px] opacity-100 rotate-0">
        {" "}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_239_755)">
            <path
              d={tournamentPageContent.icons.searchPath}
              fill="#008FFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_239_755">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute w-[218px] h-[80px] top-[217px] left-[635px] rounded-[17px] bg-[#000B15]"></div>
      <h1 className="absolute w-[104px] h-[33px] top-[240px] left-[663px] font-poppins font-normal text-[22.03px] leading-none text-[#FFFFFF33]">
        {tournamentPageContent.categoryLabel}
      </h1>

      <div className="absolute w-[24px] h-[24px] top-[245px] left-[811px]">
        {" "}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={tournamentPageContent.icons.chevronPath}
            fill="#0185EB"
          />
        </svg>
      </div>
      <button className="absolute w-[218px] h-[80px] top-[217px] left-[871px] rounded-[17px] bg-[#0184E9]"></button>
      <span className="absolute w-[46px] h-[33px] top-[240px] left-[957px] font-poppins font-normal text-[22.03px] leading-none text-black">
        {tournamentPageContent.findButtonLabel}
      </span>
      <h1 className="absolute  h-[88px] top-[351px] left-[195px] font-roboto font-black text-[75.38px] leading-none text-white">
        {tournamentPageContent.upcomingTitle}
      </h1>
      <p className="absolute w-[639px] h-[165px] top-[480px] left-[195px] font-poppins font-normal text-[22.03px]  text-white">
        {tournamentPageContent.description}
      </p>
      <Image
        src={tournamentPageImages.upcomingCards[0]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[686px] left-[172px]"
      />
      <Image
        src={tournamentPageImages.upcomingCards[1]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[686px] left-[589px]"
      />
      <Image
        src={tournamentPageImages.upcomingCards[2]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[686px] left-[1006px]"
      />
      <Image
        src={tournamentPageImages.upcomingCards[3]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[686px] left-[1423px]"
      />
      <Image
        src={tournamentPageImages.upcomingCards[4]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[1473px] left-[172px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.upcomingCards[5]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[1473px] left-[589px]"
      />
      <Image
        src={tournamentPageImages.upcomingCards[6]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[1473px] left-[1006px]"
      />
      <Image
        src={tournamentPageImages.upcomingCards[7]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[366px] h-[746px] top-[1473px] left-[1423px]"
      />

      <button
        className="rounded-tl-[200px] rounded-br-[200px] absolute w-[259.4434px] h-[69.4824px] top-[2312px] left-[1530px] opacity-100 rotate-0 bg-[linear-gradient(116.09deg,_#0185EB_33.56%,_#00599E_91.39%)] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
        }}
      >
        <span className="font-['Poppins'] font-bold text-[15.7px] leading-[100%] tracking-[0%] text-white">
          {tournamentPageContent.expandLabel}
        </span>
      </button>
      <h1 className="absolute  h-[88px] top-[2381px] left-[195px] opacity-100 rotate-0 font-roboto font-black text-[75.38px] leading-[100%] tracking-[0%] text-white">
        {tournamentPageContent.ongoingTitle}
      </h1>
      <p className="absolute w-[639.3796px] h-[165.0012px] top-[2510px] left-[195px] font-poppins font-normal text-[22.03px]  tracking-[0%] text-white opacity-100">
        {tournamentPageContent.description}
      </p>
      <Image
        src={tournamentPageImages.ongoingCards[0]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[2675px] left-[172px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[1]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[2675px] left-[589px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[2]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[2675px] left-[1006px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[3]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[2675px] left-[1423px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[4]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[3467px] left-[172px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[5]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[3467px] left-[589px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[6]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[3467px] left-[1006px] opacity-100 rotate-0"
      />
      <Image
        src={tournamentPageImages.ongoingCards[7]}
        alt={tournamentPageContent.alts.card}
        width={366}
        height={746}
        className="absolute w-[365.6763px] h-[745.9795px] top-[3467px] left-[1423px] opacity-100 rotate-0"
      />
      <button
        className="rounded-tl-[200px] rounded-br-[200px] absolute flex items-center justify-center"
        style={{
          width: 259.443359375,
          height: 69.48237609863281,
          top: 4259,
          left: 1530,
          opacity: 1,
          transform: "rotate(0deg)",
          background:
            "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
        }}
      >
        <span className="font-['Poppins'] font-bold text-[15.7px] leading-[100%] tracking-[0%] text-white">
          {tournamentPageContent.expandLabel}
        </span>
      </button>     

    </div>
  <XtEsportsBanner/>
  </>
  );
}

export default TournamentPage;
