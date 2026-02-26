"use client";

import { BrandLogoIcon } from "@/icons";
import xtEsportsBannerData from "@/constant/xt_esports_banner.json";

const XtEsportsBanner = () => {
  const { xtEsportsBanner } = xtEsportsBannerData;

  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-center lg:h-[400px] min-h-[200px] py-10 lg:py-0"
      style={{ backgroundColor: "#011324", opacity: 1 }}
    >
      <section
        className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col lg:flex-row items-center justify-center"
        style={{ gap: "53px" }}
      >
        <div className="flex items-center shrink-0  w-[323px] h-[81px] opacity-100">
          <BrandLogoIcon />
        </div>

        <div className="max-w-[1000px]">
          <p
            className="font-['Poppins'] font-medium text-[16px] sm:text-[18px] lg:text-[23.21px] text-white text-center lg:text-left"
            style={{ lineHeight: "1.4", letterSpacing: "0%" }}
          >
            {xtEsportsBanner.text}
          </p>
        </div>
      </section>
    </div>
  );
};

export default XtEsportsBanner;
