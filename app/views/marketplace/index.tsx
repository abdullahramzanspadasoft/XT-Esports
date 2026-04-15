"use client";

import Image from "next/image";
import { SearchIcon, ChevronDownIcon } from "@/icons";
import XtEsportsBanner from "@/layout/footer";
import marketplacePage from "@/constant/marketplace/page.json";

const marketplacePageContent = marketplacePage.content;
const marketplacePageImages = marketplacePage.images;

const AddIcon = () => (
  <svg width="46" height="54" viewBox="0 0 46 54" fill="none">
    <circle cx="23" cy="27" r="23" transform="rotate(-90 23 27)" fill="#009FFF" />
    <path
      d="M14.0722 27.7951H22.0771V35.8719H24.4104V27.7951H32.3795V25.6413H24.4104V17.5645H22.0771V25.6413H14.0722V27.7951Z"
      fill="#000911"
    />
  </svg>
);

export default function MarketplacePage() {
  const cardIndexes = marketplacePageImages.cards.map((_, index) => index);

  return (
    <>
      <main className="w-full overflow-hidden bg-[linear-gradient(163.9deg,#000409_0%,#002446_75.63%)]">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 xl:px-0">
        <section className="flex w-full flex-col pt-24 md:pt-28 xl:pt-[227px] xl:pl-[207px]">
        <div className="flex w-full flex-col xl:flex-row xl:items-start">
              <div className="w-full xl:w-[639.38px] xl:pt-[136px]">
                <h1 className="text-[62.06px] font-black leading-[100%] text-white">
                  {marketplacePageContent.heroTitle[0]}
                  <br />
                  {marketplacePageContent.heroTitle[1]}
                  <br />
                  {marketplacePageContent.heroTitle[2]}
                </h1>
                <p className="mt-[67px] w-full text-[22.03px] text-white xl:w-[639.38px]">
                  {marketplacePageContent.heroDescription}
                </p>
                <button
                  className="mt-[80px] h-[69.48px] w-[259.44px] rounded-tl-[200px] rounded-br-[200px] text-[15.7px] font-bold text-white"
                  style={{ background: "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)" }}
                >
                  {marketplacePageContent.cta}
                </button>
              </div>
              <div className="mt-8 flex xl:mt-0 xl:-ml-[35px]">
                <Image
                  src={marketplacePageImages.banner}
                  alt={marketplacePageContent.alts.banner}
                  width={1016}
                  height={676}
                  className="h-auto w-full max-w-[1016px] xl:h-[676px] xl:w-[1016px]"
                />
              </div>
            </div>
          </section>

          <section className="flex w-full flex-col pt-[85px] xl:pl-[274px]">
            <div className="flex w-full flex-wrap items-center gap-4 xl:flex-nowrap xl:gap-[16px]">
              <div className="flex h-[80px] w-full items-center gap-[13px] rounded-[17px] bg-[#000B15] px-[19px] xl:w-[443px]">
                <div className="h-[24px] w-[24px] shrink-0">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder={marketplacePageContent.searchPlaceholder}
                  className="h-full w-full bg-transparent text-[22.03px] text-white/20 placeholder:text-white/20 outline-none"
                />
              </div>

              <button className="flex h-[80px] w-full items-center justify-center gap-[44px] rounded-[17px] bg-[#000B15] xl:w-[218px]">
                <span className="text-[22.03px] text-[#FFFFFF33]">{marketplacePageContent.categoryLabel}</span>
                <div className="h-[24px] w-[24px]">
                  <ChevronDownIcon />
                </div>
              </button>

              <button className="flex h-[80px] w-full items-center justify-center rounded-[17px] bg-[#0184E9] xl:w-[218px]">
                <span className="text-[22.03px] text-[#011425]">{marketplacePageContent.findLabel}</span>
              </button>
            </div>

            <div className="pt-[132px] xl:w-[1372px]">
              <div className="grid grid-cols-1 justify-items-center gap-y-[69px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[32px]">
                {cardIndexes.map((index) => (
                  <div key={index} className="relative h-[529.18px] w-[436px] rounded-[29.91px] bg-[#032B51]">
                    <Image
                      src={marketplacePageImages.cards[index]}
                      alt={marketplacePageContent.alts.item}
                      width={413}
                      height={353}
                      className="absolute left-[11.5px] top-[13.8px] h-[353.17px] w-[412.99px] rounded-[25.31px] object-cover"
                    />
                    <h2 className="absolute left-[40.26px] top-[378.48px] text-[35.34px] font-bold text-white">
                      {marketplacePageContent.cardTitle}
                    </h2>
                    <p className="absolute left-[40.26px] top-[440.6px] w-[192.12px] text-[14.05px] font-medium text-[#036CB9]">
                      {marketplacePageContent.cardDescription}
                    </p>
                    <div className="absolute left-[315.21px] top-[436px]">
                      <AddIcon />
                    </div>
                    <h3 className="absolute left-[291.05px] top-[378.48px] text-[35.34px] font-bold text-white">
                      {marketplacePageContent.cardPrice}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex w-full flex-col pt-[185px] pb-[377px] xl:pl-[286px]">
            <div className="relative h-auto w-full rounded-[29.91px] bg-[#032B51] px-[28px] py-[24px] xl:h-[263px] xl:w-[1360px] xl:px-0 xl:py-0">
              <Image
                src={marketplacePageImages.banner}
                alt={marketplacePageContent.alts.banner}
                width={472}
                height={314}
                className="w-full max-w-[472px] xl:absolute xl:left-[892px] xl:top-[-51px] xl:h-[314px] xl:w-[472px]"
              />
              <h1 className="mt-6 text-[58.75px] font-bold text-white xl:mt-0 xl:pl-[64px] xl:pt-[38px]">
                {marketplacePageContent.footerTitle}
              </h1>
              <p className="w-full max-w-[388.62px] pt-[16px] text-[13.39px] text-white xl:pl-[64px] xl:pt-[18px]">
                {marketplacePageContent.footerDescription}
              </p>
              <button
                className="mt-[22px] h-[69.48px] w-[259.44px] rounded-tl-[200px] rounded-br-[200px] text-[15.7px] font-bold text-white xl:ml-[28px] xl:mt-[26px]"
                style={{ background: "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)" }}
              >
                {marketplacePageContent.cta}
              </button>
            </div>
          </section>
        </div>
      </main>
      <XtEsportsBanner />
    </>
  );
}
