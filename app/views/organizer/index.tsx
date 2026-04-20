import Image from "next/image";
import XtEsportsBanner from "@/layout/footer";
import organizerPage from "@/constant/organizer/page.json";
import { OrganizerFilterIcon, OrganizerGearIcon, OrganizerPencilIcon } from "@/icons";

const organizerPageContent = organizerPage.content;
const organizerPageImages = organizerPage.images;

export default function Index() {
  const benefitIcons = [
    OrganizerFilterIcon,
    OrganizerGearIcon,
    OrganizerPencilIcon,
    OrganizerFilterIcon,
    OrganizerGearIcon,
  ];
  const firstRowBenefits = organizerPageContent.benefits.slice(0, 3);
  const secondRowBenefits = organizerPageContent.benefits.slice(3, 5);

  return (
    <>
      <div className="w-full min-h-[3750px] overflow-hidden bg-[linear-gradient(163.9deg,#000409_0%,#002446_75.63%)]">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 xl:px-0">
          <section className="flex w-full flex-col pt-20 xl:pt-[314px] xl:pl-[275px]">
            <div className="flex w-full flex-col xl:flex-row xl:items-start">
              <div className="w-full xl:w-[639.38px] xl:pt-[54px]">
                <h1 className="h-auto font-roboto text-4xl font-black leading-tight tracking-[0%] text-white xl:h-[264px] xl:text-[75.38px] xl:leading-[100%]">
                  {organizerPageContent.heroTitle[0]} <br />
                  {organizerPageContent.heroTitle[1]} <br />
                  {organizerPageContent.heroTitle[2]}
                </h1>
                <p className="h-auto w-full pt-6 font-poppins text-base font-normal leading-normal tracking-[0%] text-white xl:h-[165px] xl:w-[639.38px] xl:pt-[48px] xl:text-[22.03px] xl:leading-100%">
                  {organizerPageContent.heroDescription}
                </p>
                <button
                  className="mt-[35px] h-[69.48px] w-[259.44px] rounded-tl-[200px] rounded-br-[200px] font-[Poppins] text-[15.7px] font-bold leading-[100%] tracking-[0%] text-white"
                  style={{
                    background:
                      "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
                  }}
                >
                  {organizerPageContent.cta}
                </button>
              </div>
              <div className="mt-8 xl:mt-0 xl:ml-[33px]">
                <Image
                  src={organizerPageImages.hero}
                  alt={organizerPageContent.alts.hero}
                  width={780}
                  height={731}
                  className="h-auto w-full max-w-[780px] xl:h-[731px] xl:w-[780px]"
                />
              </div>
            </div>
          </section>

          <section className="flex w-full flex-col pt-[48px] xl:pl-[275px]">
            <h1 className="h-auto font-roboto text-4xl font-black leading-tight tracking-[0%] text-white xl:h-[264px] xl:text-[75.38px] xl:leading-[89px]">
              {organizerPageContent.whyTitle[0]} <br />
              {organizerPageContent.whyTitle[1]} <br />
              {organizerPageContent.whyTitle[2]}
            </h1>

            <div className="pt-12 xl:pt-[113px]">
              <div className="flex w-full flex-wrap gap-y-[86px] xl:gap-x-[75px] xl:gap-y-[86px]">
                {firstRowBenefits.map((benefit, index) => {
                  const Icon = benefitIcons[index];
                  return (
                    <div key={benefit.title} className="w-full max-w-[430px]">
                      <div className="flex items-start gap-[22px]">
                        <div className="h-[49px] w-[41px] shrink-0">
                          <Icon />
                        </div>
                        <h1 className="h-auto font-[Roboto] text-2xl font-black leading-tight tracking-[0%] text-white xl:h-[44px] xl:text-[37.5px] xl:leading-[100%]">
                          {benefit.title}
                        </h1>
                      </div>
                      <p className="h-auto pt-[3px] font-[Poppins] text-base font-normal leading-normal tracking-[0%] text-white xl:h-[375px] xl:text-[22.03px] xl:leading-100%">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex w-full flex-wrap gap-y-[86px] xl:gap-x-[75px] xl:gap-y-[86px]">
                {secondRowBenefits.map((benefit, index) => {
                  const Icon = benefitIcons[index + 3];
                  return (
                    <div key={benefit.title} className="w-full max-w-[430px]">
                      <div className="flex items-start gap-[22px]">
                        <div className="h-[49px] w-[41px] shrink-0">
                          <Icon />
                        </div>
                        <h1 className="h-auto font-[Roboto] text-2xl font-black leading-tight tracking-[0%] text-white xl:h-[44px] xl:text-[37.5px] xl:leading-[100%]">
                          {benefit.title}
                        </h1>
                      </div>
                      <p className="h-auto pt-[3px] font-[Poppins] text-base font-normal leading-normal tracking-[0%] text-white xl:h-[375px] xl:text-[22.03px] xl:leading-100%">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="flex w-full flex-col pt-[86px] pb-24 xl:pb-[220px] xl:pl-[275px]">
            <h1 className="h-auto w-full font-[Roboto] text-4xl font-black leading-tight tracking-[0%] text-white xl:h-[88px] xl:w-[815px] xl:text-[75.38px] xl:leading-[100%]">
              {organizerPageContent.qaTitle}
            </h1>

            <div className="flex flex-col pt-12 xl:pt-[86px]">
              {[0, 1, 2, 3, 4].map((itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-[22px] pb-[63px] last:pb-0">
                  <div className="h-[41px] w-[41px] shrink-0">
                    <OrganizerFilterIcon />
                  </div>
                  <h1 className="h-auto w-full font-[Roboto] text-2xl font-black leading-tight tracking-[0%] text-white xl:h-[44px] xl:w-[438px] xl:text-[37.5px] xl:leading-[100%]">
                    {organizerPageContent.faqItem}
                  </h1>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <XtEsportsBanner />
    </>
  );
}
