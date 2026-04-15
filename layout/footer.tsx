"use client";

import { BrandLogoIcon } from "@/icons";
import xtEsportsBannerData from "@/constant/xt_esports_banner.json";

const XtEsportsBanner = () => {
  const { xtEsportsBanner } = xtEsportsBannerData;

  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center min-h-[250px] lg:h-[420px] py-16 lg:py-0 bg-[#011324]">
      <section
        className="relative z-10 w-full max-w-full mx-auto 
             px-4
             flex flex-col lg:flex-row 
             items-center justify-center lg:justify-between
             gap-[10px] lg:gap-[53px] lg:ml-[100px]"
      >
        <div className="flex items-center justify-center shrink-0 w-[160px] sm:w-[220px] lg:w-[304px] h-auto lg:h-[35vw]">
          <BrandLogoIcon className="w-full h-full block" />
        </div>
        <div className="flex-1 max-w-full min-w-0">
          <p
            className="font-['Poppins'] font-medium 
                       text-[13px] sm:text-[16px] lg:text-[23px] 
                       text-white 
                       text-center lg:text-left
                       leading-[1.5] whitespace-pre-line"
          >
            {xtEsportsBanner.text}
          </p>
        </div>
      </section>
    </div>
  );
};

export default XtEsportsBanner;