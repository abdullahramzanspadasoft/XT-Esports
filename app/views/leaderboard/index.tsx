import Image from "next/image";
import XtEsportsBanner from "@/layout/footer";
import leaderboardPage from "@/constant/leaderboard/page.json";

const leaderboardPageContent = leaderboardPage.content;
const leaderboardPageImages = leaderboardPage.images;
const LeaderboardPage = () => {
  return (
    <>
      <div className="pt-[200px] relative min-h-[3750px] w-full overflow-hidden bg-[linear-gradient(163.9deg,_#000409_0%,_#002446_75.63%)]">
        <div className="flex justify-center flex-col items-center  w-[639.38px] mx-auto">
          {" "}
          <h1 className="text-white font-black text-[75.38px]  tracking-[0%] opacity-100 font-roboto">
            {leaderboardPageContent.title}
          </h1>
          <p
            style={{ fontFamily: "Poppins, sans-serif" }}
            className=" text-[22.03px]  tracking-[0%] font-normal text-white opacity-100"
          >
            {leaderboardPageContent.intro}
          </p>
        </div>
        <Image
          src={leaderboardPageImages.background}
          alt={leaderboardPageContent.alts.background}
          width={1763}
          height={1080}
          className="absolute w-[1763px] h-[1080px] top-[179px] left-[78px] rounded-[48px] opacity-100"
        />
        <Image
          src={leaderboardPageImages.podiums.first}
          alt={leaderboardPageContent.alts.podium}
          width={266}
          height={656}
          className="absolute w-[265.63px] h-[656.49px] top-[495.5px] left-[849.16px] opacity-100"
        />
        <h1 className="absolute w-[81px] h-[125px] top-[819.61px] left-[941.61px] font-[Poppins] font-bold text-[83.25px] leading-[100%] tracking-[0%] text-white opacity-100">
          {leaderboardPageContent.firstRank}
        </h1>
        <h1 className="absolute w-[46px] h-[24px] top-[970.52px] left-[958.45px] font-[Poppins] font-bold text-[15.97px] leading-[100%] tracking-[0%] text-[#009FFF] opacity-100">
          {leaderboardPageContent.rankLabel}
        </h1>
        <Image
          src={leaderboardPageImages.podiums.third}
          alt={leaderboardPageContent.alts.podium}
          width={266}
          height={514}
          className="absolute w-[265.96173095703125px] h-[514.2283935546875px] top-[637.76px] left-[1125.93px] opacity-100"
        />
        <Image
          src={leaderboardPageImages.podiums.second}
          alt={leaderboardPageContent.alts.podium}
          width={266}
          height={514}
          className="absolute w-[266.2020568847656px] h-[514.2283935546875px] top-[637.76px] left-[571.74px] opacity-100"
        />
        <h1 className="absolute text-white w-[49px] h-[52px] top-[928.83px] left-[678.12px] font-[Poppins] font-bold text-[34.95px] leading-[100%] tracking-[0%] opacity-100">
          {leaderboardPageContent.secondRank}
        </h1>
        <h1 className="absolute w-[46px] h-[24px] top-[970.52px] left-[681.97px] font-[Poppins] font-bold text-[15.97px] leading-[100%] tracking-[0%] text-[#009FFF] opacity-100">
          {leaderboardPageContent.rankLabel}
        </h1>
        <h1 className="absolute w-[93px] h-[44px] top-[986.45px] left-[658.95px] font-[Poppins] font-bold text-[29.53px] leading-[100%] tracking-[0%] text-[#009FFF] opacity-100">
          {leaderboardPageContent.score}
        </h1>
        <Image
          src={leaderboardPageImages.banner}
          alt={leaderboardPageContent.alts.banner}
          width={883}
          height={461}
          className="absolute w-[883.2415161132812px] h-[461.41326904296875px] top-[1066.39px] left-[546.38px] rounded-[21.03px] opacity-100"
        />
        <div className="absolute w-[45px] h-[52px] top-[927.85px] left-[1235.41px] text-white font-bold font-[Poppins] text-[34.95px] leading-[100%] opacity-100">
          {leaderboardPageContent.thirdRank}
        </div>
        <div className="absolute w-[93px] h-[44px] top-[986.45px] left-[935.43px] text-[#009FFF] font-bold font-[Poppins] text-[29.53px] leading-[100%] opacity-100">
          {leaderboardPageContent.score}
        </div>
        <h1 className="absolute w-[46px] h-[24px] top-[970.52px] left-[1235.54px] opacity-100 text-[#009FFF] font-bold text-[15.97px] leading-[100%] tracking-[0%] font-[Poppins]">
          {leaderboardPageContent.rankLabel}
        </h1>
        <h1 className="absolute w-[93px] h-[44px] top-[986.45px] left-[1212.52px] opacity-100 text-[#009FFF] font-bold text-[29.53px] leading-[100%] tracking-[0%] font-[Poppins]">
          {leaderboardPageContent.score}
        </h1>
        <div className="absolute w-[34.64px] h-[34.64px] top-[1546.36px] left-[986.76px] rounded-full bg-[#009FFF] opacity-100"></div>
        <div className="absolute w-[24.74px] h-[24.74px] top-[1551.31px] left-[959.55px] bg-[#043868] rounded-full opacity-100"></div>

        <div className="absolute w-[24px] h-[24px] top-[1827px] left-[550px] opacity-100"></div>

        <div className="absolute w-[24.74px] h-[24.74px] top-[1551.31px] left-[1023.87px] bg-[#043868] rounded-full opacity-100"></div>
        <div className="absolute w-[24.74px] rounded-full h-[24.74px] top-[1551.31px] left-[927.38px] bg-[#043868] opacity-100"></div>
        <div className="absolute w-[443px] h-[80px] top-[1799px] left-[531px] bg-[#000B15] rounded-[17px] opacity-100"></div>
        <div className="absolute w-[218px] h-[80px] top-[1799px] left-[990px] bg-[#000B15] rounded-[17px] opacity-100"></div>
        <button className="absolute w-[218px] h-[80px] top-[1799px] left-[1226px] bg-[#0184E9] rounded-[17px] opacity-100ont-[Poppins] font-normal text-[22.03px] leading-[100%] tracking-[0%] text-[#011425]">
          {leaderboardPageContent.findButtonLabel}
        </button>
        <div className="absolute w-[24px] h-[24px] top-[1827px] left-[550px] opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_262_1639)">
              <path
                d={leaderboardPageContent.icons.searchPath}
                fill="#008FFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_262_1639">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1 className="absolute w-[118px] mt-1.5 h-[33px] top-[1822px] left-[614px] opacity-100 font-[Poppins] font-normal text-[22.03px] leading-[100%] tracking-[0%] text-[#FFFFFF33]">
          {leaderboardPageContent.searchPlaceholder}
        </h1>
        <div className="absolute w-[24px] h-[24px] top-[1827px] left-[1166px] opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={leaderboardPageContent.icons.chevronPath}
              fill="#0185EB"
            />
          </svg>
        </div>
        <h1 className="absolute mt-1.5 w-[104px] h-[33px] top-[1822px] left-[1018px] opacity-100 font-[Poppins] font-normal text-[22.03px] leading-[100%] tracking-[0%] text-[#FFFFFF33]">
          {leaderboardPageContent.categoryLabel}
        </h1>
        <div className="absolute w-[1479px] h-[143px] top-[2101px] left-[223px] bg-[#00284E] rounded-[24px] opacity-100"></div>
        <Image
          src={leaderboardPageImages.avatars[0]}
          alt={leaderboardPageContent.alts.avatar}
          width={118}
          height={117}
          className="w-[118px] h-[117px] absolute top-[2114px] left-[239px] rounded-[18px] opacity-100 rotate-0"
        />
        <h1 className="absolute top-[2139px] text-white left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal opacity-100">
          {leaderboardPageContent.playerName}
        </h1>
        <p className="absolute top-[2180px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
          {leaderboardPageContent.playerHandle}
        </p>
        <h1 className="absolute top-[2141px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal text-white opacity-100">
          {leaderboardPageContent.rankLabel}
        </h1>
        <h1 className="absolute top-[2152px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
          {leaderboardPageContent.listScore}
        </h1>
        <div className="absolute top-[2274px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
        <Image
          src={leaderboardPageImages.avatars[1]}
          alt={leaderboardPageContent.alts.avatar}
          width={118}
          height={117}
          className="absolute top-[2287px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
        />
        <h1 className="absolute top-[2309px] text-white left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal opacity-100">
          {leaderboardPageContent.playerName}
        </h1>
        <p className="absolute top-[2350px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
          {leaderboardPageContent.playerHandle}
        </p>
        <h1 className="absolute top-[2312px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal text-white opacity-100">
          {leaderboardPageContent.rankLabel}
        </h1>
        <h1 className="absolute top-[2323px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
          {leaderboardPageContent.listScore}
        </h1>
        <div className="absolute top-[2447px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
        <Image
          src={leaderboardPageImages.avatars[2]}
          alt={leaderboardPageContent.alts.avatar}
          width={118}
          height={117}
          className="absolute top-[2460px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
        />
        <h1 className="absolute top-[2485px] left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] text-white tracking-normal opacity-100">
          {leaderboardPageContent.playerName}
        </h1>
        <p className="absolute top-[2523px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
          {leaderboardPageContent.playerHandle}
        </p>
        <h1 className="absolute top-[2487px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
          {leaderboardPageContent.rankLabel}
        </h1>
        <h1 className="absolute top-[2498px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
          {leaderboardPageContent.listScore}
        </h1>
        <div className="absolute top-[2620px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      </div>

      <Image
        src={leaderboardPageImages.avatars[3]}
        alt={leaderboardPageContent.alts.avatar}
        width={118}
        height={117}
        className="absolute top-[2633px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
      />
      <h1 className="absolute top-[2658px] left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] text-white tracking-normal opacity-100">
        {leaderboardPageContent.playerName}
      </h1>
      <p className="absolute top-[2696px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        {leaderboardPageContent.playerHandle}
      </p>
      <h1 className="absolute top-[2658px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        {leaderboardPageContent.rankLabel}
      </h1>
      <h1 className="absolute top-[2669px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        {leaderboardPageContent.listScore}
      </h1>
      <div className="absolute top-[2793px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      <Image
        src={leaderboardPageImages.avatars[4]}
        alt={leaderboardPageContent.alts.avatar}
        width={118}
        height={117}
        className="absolute top-[2806px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
      />
      <h1 className="absolute top-[2831px] left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] text-white tracking-normal opacity-100">
        {leaderboardPageContent.playerName}
      </h1>
      <p className="absolute top-[2869px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        {leaderboardPageContent.playerHandle}
      </p>
      <h1 className="absolute top-[2833px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        {leaderboardPageContent.rankLabel}
      </h1>
      <h1 className="absolute top-[2844px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        {leaderboardPageContent.listScore}
      </h1>
      <div className="absolute top-[2966px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      <Image
        src={leaderboardPageImages.avatars[5]}
        alt={leaderboardPageContent.alts.avatar}
        width={118}
        height={117}
        className="w-[118px] h-[117px] absolute top-[2979px] left-[239px] rounded-[18px] opacity-100 rotate-0"
      />
      <h1 className="absolute top-[3004px] text-white left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal opacity-100">
        {leaderboardPageContent.playerName}
      </h1>
      <p className="absolute top-[3045px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        {leaderboardPageContent.playerHandle}
      </p>
      <h1 className="absolute top-[3007px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        {leaderboardPageContent.rankLabel}
      </h1>
      <h1 className="absolute top-[3018px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        {leaderboardPageContent.listScore}
      </h1>
      <div className="absolute top-[3139px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      <Image
        src={leaderboardPageImages.avatars[6]}
        alt={leaderboardPageContent.alts.avatar}
        width={118}
        height={117}
        className="absolute top-[3152px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
      />
      <h1 className="absolute top-[3174px] text-white left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal opacity-100">
        {leaderboardPageContent.playerName}
      </h1>
      <p className="absolute top-[3215px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        {leaderboardPageContent.playerHandle}
      </p>
      <h1 className="absolute top-[3177px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        {leaderboardPageContent.rankLabel}
      </h1>
      <h1 className="absolute top-[3188px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        {leaderboardPageContent.listScore}
      </h1>
      <div className="absolute top-[3312px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      <Image
        src={leaderboardPageImages.avatars[7]}
        alt={leaderboardPageContent.alts.avatar}
        width={118}
        height={117}
        className="absolute top-[3325px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
      />
      <h1 className="absolute top-[3350px] left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] text-white tracking-normal opacity-100">
        {leaderboardPageContent.playerName}
      </h1>
      <p className="absolute top-[3391px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        {leaderboardPageContent.playerHandle}
      </p>
      <h1 className="absolute top-[3353px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        {leaderboardPageContent.rankLabel}
      </h1>
      <h1 className="absolute top-[3364px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        {leaderboardPageContent.listScore}
      </h1>
      <div className="absolute top-[3485px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      <Image
        src={leaderboardPageImages.avatars[8]}
        alt={leaderboardPageContent.alts.avatar}
        width={118}
        height={117}
        className="w-[118px] h-[117px] absolute top-[3498px] left-[239px] rounded-[18px] opacity-100 rotate-0"
      />
      <h1 className="absolute top-[3523px] text-white left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal opacity-100">
        {leaderboardPageContent.playerName}
      </h1>
      <p className="absolute top-[3564px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        {leaderboardPageContent.playerHandle}
      </p>
      <h1 className="absolute top-[3526px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        {leaderboardPageContent.rankLabel}
      </h1>
      <h1 className="absolute top-[3537px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        {leaderboardPageContent.listScore}
      </h1>
      {/* <div className="absolute top-[3658px] left-[223px] w-[1479px] h-[143px] rounded-[24px] bg-[#00284E] opacity-100"></div>
      <Image
        src={secondmen}
        alt="secondmen"
        className="absolute top-[3671px] left-[239px] w-[118px] h-[117px] rounded-[18px] opacity-100"
      />
      <h1 className="absolute top-[3693px] text-white left-[396px] w-[212px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal opacity-100">
        Simon Adam
      </h1>
      <p className="absolute top-[3734px] left-[396px] w-[127px] h-[27px] font-[Poppins] font-normal text-[17.69px] leading-[100%] tracking-normal text-[#045CB5] opacity-100">
        @simonadam
      </p>
      <h1 className="absolute top-[3696px] left-[1589px] w-[33px] h-[17px] font-[Poppins] font-bold text-[11.55px] leading-[100%] tracking-normal opacity-100 text-white">
        RANK
      </h1>
      <h1 className="absolute top-[3707px] left-[1566px] w-[80px] h-[48px] font-[Poppins] font-bold text-[31.86px] leading-[100%] tracking-normal text-white opacity-100">
        4523
      </h1> */}
      <XtEsportsBanner />
    </>
  );
};

export default LeaderboardPage;
