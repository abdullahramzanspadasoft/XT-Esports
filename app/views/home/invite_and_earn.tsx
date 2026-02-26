"use client";

import Image from "next/image";
import InviteAndEarnImage from "@/public/Image/InviteAndEarn/invite_and_earn.png";
import { RightArrowIcon } from "@/icons";
import inviteAndEarnData from "@/constant/invite_and_earn.json";
import baground from "@/public/Image/PopularTournament/Rectangle 55.png";

const InviteAndEarn = () => {
  const { inviteAndEarn } = inviteAndEarnData;

  return (
    <div className="w-full relative bg-[#010D18] min-h-screen overflow-hidden flex flex-col items-center">
      <section className="hidden xl:flex relative z-10 w-full justify-center -mt-[7px]">
        <div
          className="relative"
          style={{ width: "1920px", height: "1013.38px" }}
        >
          <div
            className="absolute left-0 right-0 bottom-0 overflow-hidden"
            style={{
              height: "1013.38px",
              width: "1920px",
              transform: "translateX(500px) rotate(-40deg)",
            }}
          >
            <Image
              src={baground}
              alt="Invite and Earn"
              fill
              priority
              className="object-cover object-bottom opacity-50"
              sizes="1920px"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,22,32,0.25) 0%, rgba(0,0,0,0.0) 60%)",
                backdropFilter: "blur(6px)",
              }}
            />
          </div>

          <Image
            src={InviteAndEarnImage}
            alt="Invite and Earn"
            fill
            priority
            className="object-contain"
            sizes="1920px"
          />

          <div className="absolute z-20 left-[160px] gap-[18.77px] top-[50%] p-[16px] -translate-y-1/2 flex flex-col">
            <h2 className="mb-6">
              <span className="font-['Poppins'] font-bold text-[82.43px] leading-[100%] tracking-tight text-white block w-[940px]">
                {inviteAndEarn.title.part1}
              </span>
            </h2>

            <p className="font-['Poppins'] font-medium text-[23.21px] leading-[1.4] text-white mb-10 max-w-[585px]">
              {inviteAndEarn.description}
            </p>

            <a
              href={inviteAndEarn.button.href}
              className="inline-flex items-center justify-center gap-3 text-white transition-all duration-300 shadow-lg hover:brightness-110
              bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)] 
              rounded-tl-[100px] rounded-br-[100px]
              font-['Poppins'] font-normal text-[21.86px] 
              w-[346.56px] h-[92.81px]"
            >
              <span>{inviteAndEarn.button.text}</span>
              <RightArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="hidden lg:flex xl:hidden relative z-10 w-full justify-center -mt-[7px] overflow-hidden">
        <div
          className="relative w-full"
          style={{ height: "calc(100vw * 1013.38 / 1920)" }}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <div
              className="absolute left-0 right-0 bottom-0 overflow-hidden w-full h-full"
              style={{ transform: "rotate(-40deg) translateX(30%)" }}
            >
              <Image
                src={baground}
                alt="Invite and Earn background"
                fill
                priority
                className="object-cover object-bottom opacity-50"
                sizes="100vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,22,32,0.25) 0%, rgba(0,0,0,0.0) 60%)",
                  backdropFilter: "blur(6px)",
                }}
              />
            </div>
          </div>

          <div className="absolute inset-0" style={{ zIndex: 1 }}>
            <Image
              src={InviteAndEarnImage}
              alt="Invite and Earn"
              fill
              priority
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>

          <div
            className="absolute z-20 flex flex-col"
            style={{
              left: "calc(100vw * 160 / 1920)",
              top: "50%",
              transform: "translateY(-50%)",
              gap: "calc(100vw * 18.77 / 1920)",
              padding: "calc(100vw * 16 / 1920)",
              maxWidth: "calc(100vw * 700 / 1920)",
            }}
          >
            <h2 style={{ marginBottom: "calc(100vw * 24 / 1920)" }}>
              <span
                className="font-['Poppins'] font-bold leading-[100%] tracking-tight text-white whitespace-nowrap block"
                style={{ fontSize: "calc(100vw * 82.43 / 1920)" }}
              >
                {inviteAndEarn.title.part1}
              </span>
            </h2>

            <p
              className="font-['Poppins'] font-medium text-white"
              style={{
                fontSize: "calc(100vw * 23.21 / 1920)",
                lineHeight: "1.4",
                maxWidth: "calc(100vw * 585 / 1920)",
                marginBottom: "calc(100vw * 40 / 1920)",
              }}
            >
              {inviteAndEarn.description}
            </p>

            <a
              href={inviteAndEarn.button.href}
              className="inline-flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:brightness-110 bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)] rounded-tl-[100px] rounded-br-[100px] font-['Poppins'] font-normal whitespace-nowrap flex-shrink-0"
              style={{
                fontSize: "calc(100vw * 21.86 / 1920)",
                width: "calc(100vw * 346.56 / 1920)",
                height: "calc(100vw * 92.81 / 1920)",
                gap: "calc(100vw * 12 / 1920)",
              }}
            >
              <span>{inviteAndEarn.button.text}</span>
              <RightArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="lg:hidden relative z-10 w-full flex flex-col items-center px-4 py-12 gap-6">
        <div className="relative w-full max-w-[480px] aspect-[1920/1013] rounded-2xl overflow-hidden">
          <Image
            src={InviteAndEarnImage}
            alt="Invite and Earn"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 480px) 100vw, 480px"
          />
        </div>

        <div
          className="flex flex-col items-center text-center w-full max-w-[480px] box-border overflow-hidden"
          style={{ gap: "clamp(8px, 2.5vw, 16px)", minWidth: 0 }}
        >
          <h2 className="w-full m-0" style={{ minWidth: 0 }}>
            <span
              className="font-['Poppins'] font-bold leading-[110%] tracking-tight text-white block w-full"
              style={{
                fontSize: "clamp(14px, 6vw, 48px)",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
              }}
            >
              {inviteAndEarn.title.part1}
            </span>
          </h2>

          <p
            className="font-['Poppins'] font-medium leading-[1.5] text-white opacity-90 w-full m-0"
            style={{
              fontSize: "clamp(10px, 3vw, 17px)",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              minWidth: 0,
            }}
          >
            {inviteAndEarn.description}
          </p>

          <a
            href={inviteAndEarn.button.href}
            className="inline-flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:brightness-110
            bg-[linear-gradient(116.09deg,#0185EB_0%,#00599E_100%)]
            rounded-tl-[100px] rounded-br-[100px]
            font-['Poppins'] font-normal"
            style={{
              fontSize: "clamp(10px, 3.2vw, 18px)",
              height: "clamp(36px, 10vw, 64px)",
              padding: "0 clamp(10px, 3.5vw, 24px)",
              gap: "clamp(4px, 1.5vw, 12px)",
              maxWidth: "100%",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span>{inviteAndEarn.button.text}</span>
            <RightArrowIcon />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InviteAndEarn;
