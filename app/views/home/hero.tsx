"use client";

import Image from "next/image";
import HeroImage from "@/public/Image/Hero/HeroImage.png";
import Image2 from "@/public/Image/Hero/Alian.png";
import BlacImage from "@/public/Image/Hero/BlacImage.png";
import heroData from "@/constant/data.json";
import {
  FacebookIcon,
  TwitterIcon,
  DiscordIcon,
  ArrowRightIcon,
  VerticalLineIcon,
  VerticalLineBottomIcon,
} from "@/icons";

const Hero = () => {
  const { hero } = heroData;

  return (
    <section
      className="relative z-0 w-full overflow-hidden
      min-h-screen
      xl:h-screen xl:pt-[194px] xl:pb-0
    "
    >
      <Image
        src={HeroImage}
        alt="XT Esports Hero"
        fill
        priority
        className="absolute z-0 object-cover"
      />

      <div className="absolute inset-0 z-10 bg-[#011425]/99" />

      <Image
        src={BlacImage}
        alt="Black Background"
        width={2183.5}
        height={1344.5}
        priority
        className="hidden xl:block absolute z-30 top-[189px] left-[-23px] w-[2183.5px] h-[1344.5px] opacity-100"
      />

      <Image
        src={Image2}
        alt="Hero Overlay"
        width={1726}
        height={971}
        priority
        className="hidden xl:block absolute z-20 top-[35px] left-[203px] w-[1726px] h-[971px]"
      />

      <div className="hidden xl:block absolute z-30 top-[256px] left-[168px] w-[8px] h-[186px]">
        <VerticalLineIcon />
      </div>
      <div className="hidden xl:block absolute z-30 top-[500px] left-[159px]">
        <FacebookIcon />
      </div>
      <div className="hidden xl:block absolute z-30 top-[550px] left-[153px] w-[30px] h-[25px] opacity-100">
        <TwitterIcon />
      </div>
      <div className="hidden xl:block absolute z-30 top-[599px] left-[155px]">
        <DiscordIcon />
      </div>
      <div className="hidden xl:block absolute z-30 top-[692px] left-[168px] w-[8px] h-[186px]">
        <VerticalLineBottomIcon />
      </div>

      <div className="xl:hidden relative z-30 flex flex-col min-h-screen">
        <div
          className="flex flex-col items-center text-center px-5 sm:px-8 md:px-12 lg:px-16
          pt-[130px] sm:pt-[150px] md:pt-[170px] lg:pt-[200px]
          pb-0
          gap-3 sm:gap-4 md:gap-5 lg:gap-6
        "
        >
          <h1
            style={{ fontFamily: "var(--font-roboto)" }}
            className="
              font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
              text-[36px] leading-[1.12]
              sm:text-[52px]
              md:text-[64px]
              lg:text-[80px]
            "
          >
            {hero.title.line1}
            <br />
            <span className="whitespace-nowrap">
              {hero.title.line2}{" "}
              <span className="bg-gradient-to-b from-[#0185EB] to-[#003F6E] bg-clip-text text-transparent">
                {hero.title.line2Highlight}
              </span>
            </span>
          </h1>

          <p
            className="
              font-['Poppins'] font-bold text-[#009FFF]
              text-[17px]
              sm:text-[24px]
              md:text-[28px]
              lg:text-[34px]
            "
          >
            {hero.subtitle}
          </p>

          <p
            className="
              font-poppins font-normal text-white
              max-w-[300px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[740px]
              text-[12px]
              sm:text-[16px]
              md:text-[18px]
              lg:text-[21px]
            "
          >
            {hero.description}
          </p>

          <a
            href={hero.button.href}
            className="
              inline-flex items-center justify-center gap-2 font-inter text-[#0185EB] group
              text-[14px]
              sm:text-[18px]
              md:text-[21px]
              lg:text-[25px]
            "
          >
            {hero.button.text}
            <ArrowRightIcon />
          </a>

          <div className="flex items-center justify-center gap-4 mt-1">
            <span className="w-[14px] h-[14px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <FacebookIcon />
            </span>
            <span className="w-[14px] h-[14px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <TwitterIcon />
            </span>
            <span className="w-[14px] h-[14px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <DiscordIcon />
            </span>
          </div>
        </div>

        <div className="relative z-30 w-screen left-1/2 -translate-x-1/2 mt-auto">
          <Image
            src={Image2}
            alt="Hero Overlay"
            width={1726}
            height={971}
            priority
            className="w-full h-auto object-cover object-top block"
            style={{ display: "block", marginBottom: "-2px" }}
          />
        </div>
      </div>

      <div className="hidden xl:flex relative z-30 items-center h-full">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="max-w-2xl">
            <h1
              style={{ fontFamily: "var(--font-roboto)" }}
              className="font-black text-[89.73px] leading-[104.5px] text-white w-[436px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              {hero.title.line1}
              <br />
              <span className="whitespace-nowrap">
                {hero.title.line2}{" "}
                <span className="bg-gradient-to-b from-[#0185EB] to-[#003F6E] bg-clip-text text-transparent">
                  {hero.title.line2Highlight}
                </span>
              </span>
            </h1>

            <p className="font-['Poppins'] font-bold text-[36.54px] leading-[100%] tracking-[0%] text-[#009FFF] w-[256px] h-[55px] mt-[25.5px]">
              {hero.subtitle}
            </p>

            <p className="font-poppins font-normal text-[24.42px] text-white mb-[40px]">
              {hero.description}
            </p>

            <a
              href={hero.button.href}
              className="
    inline-flex items-center gap-3 font-inter text-[27.89px] text-[#0185EB] 
    group transition-transform duration-300 ease-in-out
    hover:text-[#0056b3] hover:scale-105 hover:translate-x-2
  "
            >
              {hero.button.text}
              <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
