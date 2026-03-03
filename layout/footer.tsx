"use client";

import { BrandLogoIcon } from "@/icons";
import xtEsportsBannerData from "@/constant/xt_esports_banner.json";

const XtEsportsBanner = () => {
  const { xtEsportsBanner } = xtEsportsBannerData;

  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center min-h-[250px] lg:h-[420px] py-16 lg:py-0 bg-[#011324]">
      <section
        className="relative z-10 w-full max-w-[1920px] mx-auto 
                   px-8 md:px-16 lg:px-24 xl:px-40
                   flex flex-col lg:flex-row 
                   items-center justify-center
                   gap-10 lg:gap-40"
      >
        {" "}
        <div className="flex items-center justify-center shrink-0 w-[304px] h-[35vw]">
          <BrandLogoIcon className="w-full h-full block" />
        </div>
        <div className="max-w-[1000px]">
          <p
            className="font-['Poppins'] font-medium 
                       text-[16px] sm:text-[18px] lg:text-[23px] 
                       text-white 
                       text-center lg:text-left 
                       leading-[1.5]"
          >
            {xtEsportsBanner.text}
          </p>
        </div>
      </section>
    </div>
  );
};

export default XtEsportsBanner;
