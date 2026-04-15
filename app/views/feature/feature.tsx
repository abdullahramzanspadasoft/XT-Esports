"use client";
import Image from "next/image";
import FeatureBgColumn1 from "@/public/Image/feature/feature-bg-gradient-column-1.png";
import FeatureBgColumn2 from "@/public/Image/feature/feature-bg-gradient-column-2.png";
import FeatureBgColumn3 from "@/public/Image/feature/feature-bg-gradient-column-3.png";
import FeatureBgColumn4 from "@/public/Image/feature/feature-bg-gradient-column-4.png";
import FeatureBgColumn5 from "@/public/Image/feature/feature-bg-gradient-column-5.png";
import FeatureHeroBadgeNumber from "@/public/Image/feature/feature-hero-badge-number.png";
import FeatureUiPanelB from "@/public/Image/feature/feature-ui-panel-variant-b.png";
import FeatureUiPanelA from "@/public/Image/feature/feature-ui-panel-variant-a.png";
import FeatureEsportsIllustration from "@/public/Image/feature/feature-esports-illustration.png";
import FeatureDecorativeWings1 from "@/public/Image/feature/feature-decorative-wings-1.png";
import FeatureDecorativeWings2 from "@/public/Image/feature/feature-decorative-wings-2.png";
import FeatureDecorativeWings3 from "@/public/Image/feature/feature-decorative-wings-3.png";
import XtEsportsBanner from "@/layout/footer";
import featureData from "@/constant/feature/data.json";

const Feature = () => {
  const sectionHeadingTextClass =
    "m-0 font-['Roboto',sans-serif] font-black leading-[100%] tracking-[0%] text-white text-[62.06px] max-[1000px]:text-[clamp(22px,4.5vw,44px)] max-[1000px]:leading-[1.15] max-[700px]:text-[clamp(22px,6.5vw,28px)] max-[320px]:text-[22px] min-[769px]:max-[1024px]:text-[38px] min-[1025px]:max-[1280px]:text-[48px] min-[1281px]:max-[1440px]:text-[56px] min-[1441px]:max-[1600px]:text-[60px]";
  const bodyTextClass =
    "m-0 font-['Poppins',sans-serif] font-normal tracking-[0%] text-white text-[24.42px] leading-normal max-[1000px]:text-[clamp(13px,2.2vw,18px)] max-[1000px]:leading-[1.65] max-[320px]:text-[13px] min-[769px]:max-[1024px]:text-[17px] min-[769px]:max-[1024px]:leading-[1.6] min-[1025px]:max-[1280px]:text-[19px] min-[1025px]:max-[1280px]:leading-[1.55] min-[1281px]:max-[1440px]:text-[21px] min-[1441px]:max-[1600px]:text-[23px]";
  const mobileFlowClass =
    "max-[1000px]:static max-[1000px]:top-auto max-[1000px]:left-auto max-[1000px]:right-auto max-[1000px]:bottom-auto max-[1000px]:w-full max-[1000px]:max-w-full max-[1000px]:h-auto max-[1000px]:m-0 max-[1000px]:box-border";

  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-[#011425] max-[1024px]:overflow-x-hidden">
      <div className="relative h-[3906px] w-full min-[769px]:max-[1024px]:h-[2265px] min-[1025px]:max-[1280px]:h-[2890px] min-[1281px]:max-[1440px]:h-[3437px] min-[1441px]:max-[1600px]:h-[3906px] max-[1000px]:flex max-[1000px]:h-auto max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:overflow-visible max-[1000px]:px-[20px] max-[1000px]:pt-[clamp(80px,12vw,120px)] max-[1000px]:pb-[60px] max-[700px]:px-[clamp(16px,5vw,24px)] max-[700px]:pt-[clamp(80px,14vw,100px)] max-[700px]:pb-[48px] max-[320px]:px-[14px] max-[320px]:pt-[76px] max-[320px]:pb-[40px] min-[769px]:max-[1024px]:px-0 min-[769px]:max-[1024px]:py-0 min-[769px]:max-[1024px]:items-start">
        <div className="absolute left-[-150px] top-[178px] h-[1062px] w-[782px] opacity-100 max-[1024px]:hidden min-[769px]:max-[1024px]:block min-[769px]:max-[1024px]:h-auto min-[769px]:max-[1024px]:w-[50vw] min-[1025px]:max-[1280px]:h-auto min-[1025px]:max-[1280px]:w-[55vw]">
            <Image
              src={FeatureBgColumn1}
              alt="Feature Background 79"
              fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute left-[283px] top-[178px] h-[1062px] w-[781px] opacity-100 max-[1024px]:hidden min-[769px]:max-[1024px]:block min-[769px]:max-[1024px]:h-auto min-[769px]:max-[1024px]:w-[50vw] min-[1025px]:max-[1280px]:h-auto min-[1025px]:max-[1280px]:w-[55vw]">
          <Image
            src={FeatureBgColumn2}
            alt="Feature Background 80"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute left-[855px] top-[178px] h-[1062px] w-[781px] opacity-100 max-[1024px]:hidden min-[769px]:max-[1024px]:block min-[769px]:max-[1024px]:h-auto min-[769px]:max-[1024px]:w-[50vw] min-[1025px]:max-[1280px]:h-auto min-[1025px]:max-[1280px]:w-[55vw]">
          <Image
            src={FeatureBgColumn3}
            alt="Feature Background 81"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute left-[1290px] top-[178px] h-[1062px] w-[782px] opacity-100 max-[1024px]:hidden min-[769px]:max-[1024px]:block min-[769px]:max-[1024px]:h-auto min-[769px]:max-[1024px]:w-[50vw] min-[1025px]:max-[1280px]:h-auto min-[1025px]:max-[1280px]:w-[55vw]">
          <Image
            src={FeatureBgColumn4}
            alt="Feature Background 82"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute left-[-13px] top-[178px] h-[2166px] w-[1920px] opacity-100 max-[1024px]:hidden min-[769px]:max-[1024px]:block min-[769px]:max-[1024px]:h-auto min-[769px]:max-[1024px]:w-[50vw] min-[1025px]:max-[1280px]:h-auto min-[1025px]:max-[1280px]:w-[55vw]">
          <Image
            src={FeatureBgColumn5}
            alt="Feature Background 83"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[503px] z-20 h-[219px] w-[573px] opacity-100 max-[1000px]:order-10 max-[1000px]:mb-[clamp(12px,2.5vw,24px)] max-[1000px]:pb-[14px] min-[769px]:max-[1024px]:left-[5vw] min-[769px]:max-[1024px]:top-[290px] min-[769px]:max-[1024px]:w-auto min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <h1 className="m-0 whitespace-normal font-['Roboto',sans-serif] text-[62.06px] font-black leading-[100%] tracking-[0%] text-white max-[1000px]:text-left max-[1000px]:text-[clamp(22px,5vw,38px)] max-[1000px]:leading-[1.2] max-[700px]:text-[clamp(22px,7vw,30px)] max-[320px]:text-[22px] min-[769px]:max-[1024px]:text-[38px] min-[769px]:max-[1024px]:leading-[1.15] min-[1025px]:max-[1280px]:text-[48px] min-[1025px]:max-[1280px]:leading-[1.1] min-[1281px]:max-[1440px]:text-[56px] min-[1281px]:max-[1440px]:leading-[1.05] min-[1441px]:max-[1600px]:text-[60px]">
            {featureData.hero.headingLine1} <br />
            {featureData.hero.headingLine2} <br />
            {featureData.hero.headingLine3}
          </h1>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[732px] z-20 h-[182.87px] w-[708.62px] opacity-100 max-[1000px]:order-11 max-[1000px]:mb-[clamp(16px,3vw,28px)] max-[1000px]:pb-[20px] min-[769px]:max-[1024px]:left-[5vw] min-[769px]:max-[1024px]:top-[420px] min-[769px]:max-[1024px]:w-[60vw] min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <p className={bodyTextClass}>{featureData.hero.body}</p>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[880px] z-20 h-[69.48px] w-[259.44px] opacity-100 max-[1000px]:order-12 max-[1000px]:mb-[clamp(32px,6vw,56px)] max-[1000px]:flex max-[1000px]:justify-start min-[769px]:max-[1024px]:max-w-[calc(100vw-48px)]`}
        >
          <button
            className="h-full w-full shrink-0 overflow-hidden rounded-[200px_0px_200px_0px] border-none bg-[linear-gradient(116.09deg,#0185EB_33.56%,#00599E_91.39%)] transition-opacity duration-200 hover:opacity-90 max-[1000px]:h-[clamp(48px,8vw,68px)] max-[1000px]:w-[clamp(185px,40vw,260px)] max-[320px]:h-[48px] max-[320px]:w-[185px] min-[769px]:max-[1024px]:h-[62px] min-[769px]:max-[1024px]:w-[240px]"
          >
            <div className="flex h-full w-full items-center justify-center gap-3">
              <svg
                width="32"
                height="20"
                viewBox="0 0 78 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.1991 1.49362L51.254 6.54039C43.1618 8.6942 34.6469 8.6942 26.5547 6.54039L7.60962 1.49362L31.4835 13.065C32.6407 13.624 33.6168 14.4982 34.2996 15.587C34.9823 16.6758 35.3441 17.9351 35.3433 19.2202V22.1288L38.92 24.0155L42.3082 22.1288V19.2989C42.3087 18.013 42.671 16.7531 43.3535 15.6633C44.036 14.5735 45.0113 13.6976 46.168 13.1358L70.1991 1.49362Z"
                  fill="white"
                />
                <path
                  d="M50.6093 13.0886C49.747 13.5044 49.0196 14.155 48.5106 14.9657C48.0017 15.7765 47.7318 16.7144 47.7321 17.6716V20.7767L39.0378 25.7999L38.9198 25.7292L38.802 25.7999L30.1077 20.7767V17.6716C30.1074 16.7155 29.8373 15.7789 29.3283 14.9695C28.8193 14.1601 28.0921 13.5109 27.2305 13.0965L0 0L18.4419 11.5164C19.8882 12.4277 21.0796 13.6911 21.9045 15.1883C22.7295 16.6856 23.1609 18.3676 23.1585 20.0771V22.1288C23.1617 22.9261 23.3738 23.7086 23.7738 24.3982C24.1738 25.0879 24.7478 25.6607 25.4383 26.0593L31.8528 29.7697L25.4383 33.4723C24.7478 33.8709 24.1738 34.4436 23.7738 35.1333C23.3738 35.823 23.1617 36.6055 23.1585 37.4028V45.0751L30.0841 51.136V38.8177L38.7784 33.7946L38.8963 33.8653L39.0143 33.7946L47.7085 38.8177V45.1066V51.2146L54.6262 45.1537V37.4814C54.6247 36.6847 54.414 35.9024 54.0154 35.2127C53.6167 34.5229 53.0439 33.9499 52.3544 33.5509L45.9319 29.8483L52.3465 26.1379C53.0381 25.7405 53.6128 25.168 54.013 24.4781C54.4131 23.7881 54.6247 23.005 54.6262 22.2074V20.1399C54.6218 18.429 55.0522 16.7451 55.8773 15.2462C56.7023 13.7474 57.8949 12.4829 59.3429 11.5715L77.7769 0.0629016L50.6093 13.0886Z"
                  fill="white"
                />
                <path
                  d="M42.3081 56.0256L38.9672 58.9734L35.3433 55.7897V37.3714L38.92 35.4847L42.3081 37.3714V56.0256Z"
                  fill="white"
                />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[15.7px] font-bold leading-[100%] text-white">
                {featureData.hero.cta}
              </span>
            </div>
          </button>
        </div>

        <div className="pointer-events-none absolute left-[-812px] top-[2087px] h-[2822.86px] w-[4584.39px] opacity-100 max-[1000px]:hidden min-[769px]:max-[1024px]:hidden min-[1025px]:max-[1280px]:hidden min-[1281px]:max-[1440px]:hidden">
          <Image
            src={FeatureUiPanelA}
            alt="Feature Background Decoration"
            fill
            className="object-contain -z-10"
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[204px] top-[2420px] z-20 h-[333px] w-[529px] opacity-100 max-[1000px]:order-40 max-[1000px]:mb-[clamp(12px,2.5vw,20px)] max-[1000px]:block max-[1000px]:aspect-529/333 max-[1000px]:max-w-[min(480px,90vw)] max-[1000px]:self-center min-[769px]:max-[1024px]:w-[300px] min-[1025px]:max-[1280px]:w-[350px]`}
        >
          <Image
            src={FeatureEsportsIllustration}
            alt="Esports Logo"
            fill
            className="object-contain"
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[1148px] top-[2391px] z-20 h-[354px] w-[376px] opacity-100 max-[1000px]:order-41 max-[1000px]:mb-[clamp(12px,2.5vw,20px)] max-[1000px]:block max-[1000px]:aspect-376/354 max-[1000px]:max-w-[min(400px,80vw)] max-[1000px]:self-center min-[769px]:max-[1024px]:w-[220px] min-[1025px]:max-[1280px]:w-[260px]`}
        >
          <Image
            src={FeatureDecorativeWings1}
            alt="Decorative wings graphic"
            fill
            className="object-contain"
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[2745px] z-20 h-[73px] w-[388px] opacity-100 max-[1000px]:order-50 max-[1000px]:mb-[clamp(8px,1.5vw,14px)] max-[1000px]:pb-[10px] max-[1000px]:pt-[12px]`}
        >
          <h2 className={sectionHeadingTextClass}>
            {featureData.sections.createTeams.heading}
          </h2>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[1005px] top-[2745px] z-20 h-[73px] w-[569px] opacity-100 max-[1000px]:order-60 max-[1000px]:mb-[clamp(8px,1.5vw,14px)] max-[1000px]:pb-[10px] max-[1000px]:pt-[12px]`}
        >
          <h2 className={sectionHeadingTextClass}>
            {featureData.sections.createTournaments.heading}
          </h2>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[1005px] top-[2828px] z-20 h-[182.87px] w-[708.62px] opacity-100 max-[1000px]:order-61 max-[1000px]:mb-[clamp(32px,6vw,52px)] max-[700px]:mb-[clamp(28px,8vw,44px)] min-[769px]:max-[1024px]:w-[42vw] min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <p className={bodyTextClass}>
            {featureData.sections.createTournaments.body}
          </p>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[3329px] z-20 h-[73px] w-[406px] opacity-100 max-[1000px]:order-70 max-[1000px]:mb-[clamp(8px,1.5vw,14px)] max-[1000px]:pb-[10px] max-[1000px]:pt-[12px]`}
        >
          <h2 className={sectionHeadingTextClass}>
            {featureData.sections.createSpaces.heading}
          </h2>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[3412px] z-20 h-[182.87px] w-[708.62px] opacity-100 max-[1000px]:order-71 max-[1000px]:mb-[clamp(32px,6vw,52px)] max-[700px]:mb-[clamp(28px,8vw,44px)] min-[769px]:max-[1024px]:w-[42vw] min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <p className={bodyTextClass}>{featureData.sections.createSpaces.body}</p>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[1005px] top-[3329px] z-20 h-[73px] w-[608px] opacity-100 max-[1000px]:order-72 max-[1000px]:mb-[clamp(8px,1.5vw,14px)] max-[1000px]:pb-[10px] max-[1000px]:pt-[12px]`}
        >
          <h2 className={sectionHeadingTextClass}>
            {featureData.sections.createMarketListing.heading}
          </h2>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[1005px] top-[3412px] z-20 h-[182.87px] w-[708.62px] opacity-100 max-[1000px]:order-80 max-[1000px]:mb-[clamp(16px,3vw,32px)] max-[1000px]:mt-[clamp(8px,2vw,16px)] min-[769px]:max-[1024px]:w-[42vw] min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <p className={bodyTextClass}>
            {featureData.sections.createMarketListing.body}
          </p>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[2828px] z-20 h-[182.87px] w-[708.62px] opacity-100 max-[1000px]:order-51 max-[1000px]:mb-[clamp(32px,6vw,52px)] max-[700px]:mb-[clamp(28px,8vw,44px)] min-[769px]:max-[1024px]:w-[42vw] min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <p className={bodyTextClass}>{featureData.sections.createTeams.body}</p>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[348px] top-[2987px] h-[342px] w-[394px] opacity-100 max-[1000px]:order-42 max-[1000px]:mb-[clamp(12px,2.5vw,20px)] max-[1000px]:block max-[1000px]:aspect-376/354 max-[1000px]:max-w-[min(400px,80vw)] max-[1000px]:self-center min-[769px]:max-[1024px]:w-[220px] min-[1025px]:max-[1280px]:w-[260px]`}
        >
          <Image
            src={FeatureDecorativeWings2}
            alt="Decorative wings graphic"
            fill
            className="object-contain"
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[1176px] top-[2987px] h-[321px] w-[293px] opacity-100 max-[1000px]:order-52 max-[1000px]:mb-[clamp(12px,2.5vw,20px)] max-[1000px]:block max-[1000px]:aspect-376/354 max-[1000px]:max-w-[min(400px,80vw)] max-[1000px]:self-center min-[769px]:max-[1024px]:w-[220px] min-[1025px]:max-[1280px]:w-[260px]`}
        >
          <Image
            src={FeatureDecorativeWings3}
            alt="Decorative wings graphic"
            fill
            className="object-contain"
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[235px] top-[1530px] h-[816px] w-[1450px] overflow-hidden rounded-[41px] opacity-100 max-[1000px]:order-30 max-[1000px]:mb-[clamp(36px,6vw,56px)] max-[1000px]:aspect-1450/816 max-[1000px]:rounded-[clamp(12px,2vw,28px)] max-[1000px]:max-w-full max-[1000px]:self-stretch min-[1000px]:max-[1024px]:mx-auto min-[1000px]:max-[1024px]:w-[calc(100vw-48px)] min-[1000px]:max-[1024px]:rounded-[28px] min-[1025px]:max-[1280px]:left-1/2 min-[1025px]:max-[1280px]:w-[calc(100vw-80px)] min-[1025px]:max-[1280px]:max-w-[1200px] min-[1025px]:max-[1280px]:-translate-x-1/2 min-[1025px]:max-[1280px]:rounded-[32px] min-[1025px]:max-[1280px]:min-h-[480px] min-[1281px]:max-[1440px]:left-1/2 min-[1281px]:max-[1440px]:w-[calc(100vw-80px)] min-[1281px]:max-[1440px]:max-w-[1340px] min-[1281px]:max-[1440px]:-translate-x-1/2 min-[1281px]:max-[1440px]:rounded-[36px] min-[1441px]:max-[1600px]:left-1/2 min-[1441px]:max-[1600px]:w-[calc(100vw-80px)] min-[1441px]:max-[1600px]:max-w-[1500px] min-[1441px]:max-[1600px]:-translate-x-1/2 min-[1601px]:max-[1800px]:left-1/2 min-[1601px]:max-[1800px]:w-[calc(100vw-80px)] min-[1601px]:max-[1800px]:max-w-[1600px] min-[1601px]:max-[1800px]:-translate-x-1/2`}
        >
          <Image
            src={FeatureHeroBadgeNumber}
            alt="Feature Decoration"
            fill
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute left-[-2344px] top-[2510px] h-[4041px] w-[6562px] rotate-180 opacity-50 mix-blend-multiply max-[1000px]:hidden min-[769px]:max-[1024px]:hidden min-[1025px]:max-[1280px]:hidden min-[1281px]:max-[1440px]:hidden">
          <Image
            src={FeatureUiPanelB}
            alt="Feature Background Decoration"
            fill
            className="object-contain"
          />
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[1293px] z-20 h-[73px] w-[322px] opacity-100 max-[1000px]:order-20 max-[1000px]:mb-[clamp(10px,2vw,18px)] max-[1000px]:pb-[10px] max-[1000px]:pt-[12px]`}
        >
          <h2 className={sectionHeadingTextClass}>{featureData.getStarted.heading}</h2>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[238px] top-[1376px] z-20 h-[182.87px] w-[708.62px] opacity-100 max-[1000px]:order-21 max-[1000px]:mb-[clamp(28px,5vw,48px)] min-[769px]:max-[1024px]:w-[42vw] min-[1025px]:max-[1280px]:w-[44vw]`}
        >
          <p className={bodyTextClass}>{featureData.getStarted.body}</p>
        </div>

        <div
          className={`${mobileFlowClass} absolute left-[337px] top-[3673px] z-20 h-[183px] w-[1199px] text-center opacity-100 max-[1000px]:order-90 max-[1000px]:mb-[clamp(16px,3vw,32px)] max-[1000px]:mt-[clamp(8px,2vw,16px)] max-[1000px]:pt-[8px] max-[1000px]:pb-[24px] min-[769px]:max-[1024px]:left-[10vw] min-[769px]:max-[1024px]:w-[80vw] min-[1025px]:max-[1280px]:w-[70vw]`}
        >
          <p className={bodyTextClass}>{featureData.bottomSection.body}</p>
        </div>
      </div>

      <XtEsportsBanner />
    </div>
  );
};

export default Feature;
