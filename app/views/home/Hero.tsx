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
} from "@/app/icons";

const Hero = () => {
  const { hero } = heroData;

  return (
    <section className="relative z-0 w-full h-screen overflow-hidden pt-[194px]">
      <Image
        src={HeroImage}
        alt="XT Esports Hero"
        fill
        priority
        className="absolute z-0 object-cover"
      />

      <Image
        src={BlacImage}
        alt="Black Background"
        width={2183.5}
        height={1344.5}
        priority
        className="absolute z-30 top-[189px] left-[-23px] w-[2183.5px] h-[1344.5px] opacity-100"
      />

      <div className="absolute inset-0 z-10 bg-[#011425]/80" />

      <Image
        src={Image2}
        alt="Hero Overlay"
        width={1726}
        height={971}
        priority
        className="absolute z-20 top-[35px] left-[203px] w-[1726px] h-[971px]"
      />

      <div className="absolute z-30 top-[256px] left-[168px] w-[8px] h-[186px]">
        <VerticalLineIcon />
      </div>

      <div className="absolute z-30 top-[500px] left-[159px]">
        <FacebookIcon />
      </div>

      <div className="absolute z-30 top-[550px] left-[153px] w-[30px] h-[25px] opacity-100">
        <TwitterIcon />
      </div>

      <div className="absolute z-30 top-[599px] left-[155px]">
        <DiscordIcon />
      </div>

      <div className="absolute z-30 top-[692px] left-[168px] w-[8px] h-[186px]">
        <VerticalLineBottomIcon />
      </div>

      <div className="relative z-30 flex items-center h-full">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="max-w-2xl">
            <h1
              style={{ fontFamily: "var(--font-roboto)" }}
              className="font-black text-[89.73px]  leading-[104.5px] text-white w-[436px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              {hero.title.line1}
              <br />
              <span className="whitespace-nowrap">
                {hero.title.line2}{" "}
                <span className="bg-gradient-to-b from-[#0185EB] to-[#003F6E] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(1,133,235,0.5)]">
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
              className="inline-flex items-center gap-3 font-inter text-[27.89px] text-[#0185EB] group"
            >
              {hero.button.text}
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
