"use client";
import React, { useState } from "react";
import navbarData from "../constant/data.json";
import { processNavbarItems } from "../utils/navbarUtils";
import {
  HomeIcon,
  StarIcon,
  GamepadIcon,
  RocketIcon,
  CartIcon,
  GridIcon,
  GlobeIcon,
  TrophyIcon,
  MoreIcon,
  BrandLogoIcon,
  ChevronDownIcon,
  BellIcon,
} from "@/icons";

const getIcon = (iconName: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactElement> = {
    home: <HomeIcon />,
    star: <StarIcon />,
    gamepad: <GamepadIcon />,
    rocket: <RocketIcon />,
    cart: <CartIcon />,
    grid: <GridIcon />,
    globe: <GlobeIcon />,
    trophy: <TrophyIcon />,
    more: <MoreIcon />,
    bell: <BellIcon />,
  };
  return iconMap[iconName] || null;
};

const Navbar = () => {
  const { headerTextSec1, headerTextSec2, moreItem, bellItem } =
    processNavbarItems(navbarData.navbar.items);

  const allNavItems = [...headerTextSec1, ...headerTextSec2];
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="pt-[8px] sm:pt-[10px] md:pt-[20px] 2xl:pt-[35px] px-[8px] sm:px-[10px] md:px-[20px] 2xl:px-[61px] z-50 w-full absolute">
        <div className="bg-[#091B34] py-[6px] sm:py-[5px] md:py-[10px] xl:py-[15px] 2xl:py-[20px] px-[12px] sm:px-[16px] md:px-[30px] 2xl:pl-[107px] 2xl:pr-[68px] rounded-bl-[200px] rounded-br-[200px] w-full relative max-w-[1980px] mx-auto">
          <div
            className="left-1/2 -translate-x-1/2 absolute bottom-0 h-[2px] md:h-[3px] 2xl:h-[6px] w-[70%] md:w-[630px] rounded-[100%] z-0"
            style={{
              background:
                "radial-gradient(37.41% 682446.64% at 50% 49.99%, #0185EB 0%, #011425 100%)",
            }}
          />

          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 relative z-10">
            <div className="w-[72px] sm:w-[90px] md:w-[150px] 2xl:w-[235px] flex-shrink-0 cursor-pointer">
              <BrandLogoIcon />
            </div>

            <div className="hidden xl:flex items-center gap-[20px] 2xl:gap-[35px]">
              {allNavItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center relative group cursor-pointer"
                  onClick={() => setActiveItem(item.id)}
                >
                  <div className="flex gap-[7px] items-center">
                    <div className="w-[14px] h-[14px] flex items-center justify-center">
                      {getIcon(item.icon)}
                    </div>
                    <span
                      className={`font-poppins text-[15px] font-normal transition-colors ${
                        activeItem === item.id
                          ? "text-[#0185EB]"
                          : "text-[#004C79] group-hover:text-[#0185EB]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {activeItem === item.id && (
                    <div
                      className="absolute bg-[#0185EB]"
                      style={{
                        width: "12px",
                        height: "12px",
                        top: "28.2px",
                        left: "31.2px",
                        borderRadius: "3px",
                        opacity: 1,
                        transform: "rotate(0deg)",
                      }}
                    />
                  )}
                </div>
              ))}

              {moreItem && (
                <div
                  className="flex flex-col items-center relative cursor-pointer group"
                  onClick={() => setActiveItem(moreItem.id)}
                >
                  <div className="flex gap-[7px] items-center">
                    <div className="w-[14px] h-[14px] flex items-center justify-center">
                      {getIcon(moreItem.icon)}
                    </div>
                    <span
                      className={`font-poppins text-[15px] font-normal transition-colors ${
                        activeItem === moreItem.id
                          ? "text-[#0185EB]"
                          : "text-[#004C79] group-hover:text-[#0185EB]"
                      }`}
                    >
                      {moreItem.label}
                    </span>
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                      <ChevronDownIcon />
                    </div>
                  </div>
                  {activeItem === moreItem.id && (
                    <div
                      className="absolute bg-[#0185EB] left-1/2 -translate-x-1/2"
                      style={{
                        width: "12px",
                        height: "12px",
                        top: "28.2px",
                        left: "31.2px",
                        borderRadius: "3px",
                        opacity: 1,
                        transform: "rotate(0deg)",
                      }}
                    />
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[15px] 2xl:gap-[25px]">
              {bellItem && (
                <div className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] cursor-pointer flex items-center justify-center text-[#004C79] hover:text-[#0185EB] transition-colors flex-shrink-0">
                  {getIcon(bellItem.icon)}
                </div>
              )}

              <button
                className="text-white font-inter rounded-tl-[200px] rounded-br-[200px] whitespace-nowrap flex-shrink-0
                text-[9px] sm:text-[11px] md:text-[13px] 2xl:text-[16px]
                px-[10px] sm:px-[15px] md:px-[25px] xl:px-[35px] 2xl:px-[47px]
                py-[4px] sm:py-[5px] md:py-[8px] 2xl:py-[15px] transition-transform active:scale-95"
                style={{
                  background:
                    "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
                }}
              >
                {navbarData.navbar.rightSide.button.text}
              </button>

              <button
                className="xl:hidden flex flex-col justify-center items-center w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] gap-[4px] sm:gap-[5px] cursor-pointer flex-shrink-0"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className={`block h-[2px] bg-[#0185EB] transition-all duration-300 origin-center ${
                    mobileMenuOpen
                      ? "w-[18px] sm:w-[22px] translate-y-[6px] sm:translate-y-[7px] rotate-45"
                      : "w-[18px] sm:w-[22px]"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-[#0185EB] transition-all duration-300 ${
                    mobileMenuOpen
                      ? "opacity-0 w-[13px] sm:w-[16px]"
                      : "w-[13px] sm:w-[16px]"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-[#0185EB] transition-all duration-300 origin-center ${
                    mobileMenuOpen
                      ? "w-[18px] sm:w-[22px] -translate-y-[6px] sm:-translate-y-[7px] -rotate-45"
                      : "w-[18px] sm:w-[22px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-[260px] sm:w-[300px] bg-[#091B34] z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-[20px] py-[18px] border-b border-[#0d2a4a]">
          <div className="w-[90px] sm:w-[110px] cursor-pointer">
            <BrandLogoIcon />
          </div>
          <button
            className="flex flex-col justify-center items-center w-[28px] h-[28px] gap-[5px] cursor-pointer flex-shrink-0"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="block h-[2px] w-[20px] bg-[#0185EB] rotate-45 translate-y-[3.5px]" />
            <span className="block h-[2px] w-[20px] bg-[#0185EB] -rotate-45 -translate-y-[3.5px]" />
          </button>
        </div>

        <div className="flex flex-col gap-[2px] sm:gap-[4px] pt-[10px] pb-[20px] px-[12px] overflow-y-auto flex-1">
          {allNavItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[10px] px-[14px] py-[10px] sm:py-[12px] rounded-[10px] cursor-pointer group transition-colors hover:bg-[#0d2a4a]"
              onClick={() => {
                setActiveItem(item.id);
                setMobileMenuOpen(false);
              }}
            >
              <div
                className={`w-[16px] h-[16px] flex items-center justify-center transition-colors flex-shrink-0 ${
                  activeItem === item.id
                    ? "text-[#0185EB]"
                    : "text-[#004C79] group-hover:text-[#0185EB]"
                }`}
              >
                {getIcon(item.icon)}
              </div>
              <span
                className={`font-poppins text-[13px] sm:text-[14px] font-normal transition-colors ${
                  activeItem === item.id
                    ? "text-[#0185EB]"
                    : "text-[#004C79] group-hover:text-[#0185EB]"
                }`}
              >
                {item.label}
              </span>
              {activeItem === item.id && (
                <div className="ml-auto w-[8px] h-[8px] rounded-[2px] bg-[#0185EB] flex-shrink-0" />
              )}
            </div>
          ))}

          {moreItem && (
            <div
              className="flex items-center gap-[10px] px-[14px] py-[10px] sm:py-[12px] rounded-[10px] cursor-pointer group transition-colors hover:bg-[#0d2a4a]"
              onClick={() => {
                setActiveItem(moreItem.id);
                setMobileMenuOpen(false);
              }}
            >
              <div
                className={`w-[16px] h-[16px] flex items-center justify-center transition-colors flex-shrink-0 ${
                  activeItem === moreItem.id
                    ? "text-[#0185EB]"
                    : "text-[#004C79] group-hover:text-[#0185EB]"
                }`}
              >
                {getIcon(moreItem.icon)}
              </div>
              <span
                className={`font-poppins text-[13px] sm:text-[14px] font-normal transition-colors ${
                  activeItem === moreItem.id
                    ? "text-[#0185EB]"
                    : "text-[#004C79] group-hover:text-[#0185EB]"
                }`}
              >
                {moreItem.label}
              </span>
              <div className="w-[16px] h-[16px] flex items-center justify-center text-[#004C79] group-hover:text-[#0185EB] transition-colors flex-shrink-0">
                <ChevronDownIcon />
              </div>
              {activeItem === moreItem.id && (
                <div className="ml-auto w-[8px] h-[8px] rounded-[2px] bg-[#0185EB] flex-shrink-0" />
              )}
            </div>
          )}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "radial-gradient(37.41% 682446.64% at 50% 49.99%, #0185EB 0%, #011425 100%)",
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
