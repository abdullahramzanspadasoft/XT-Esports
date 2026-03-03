"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions = moreItem?.children || [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="pt-[8px] sm:pt-[10px] md:pt-[20px] 2xl:pt-[35px] px-[8px] sm:px-[10px] md:px-[20px] 2xl:px-[61px] max-[375px]:px-[12px] max-[320px]:px-[10px] z-50 w-full absolute">
        <div className="bg-[#091B34] py-[8px] sm:py-[12px] 2xl:py-[20px] px-6 sm:px-10 md:px-[25px] min-[1400px]:px-[40px] 2xl:pl-[107px] 2xl:pr-[68px] rounded-bl-[100px] sm:rounded-bl-[200px] rounded-br-[100px] sm:rounded-br-[200px] w-full relative max-w-[1980px] mx-auto transition-all duration-300">
          <div
            className="left-1/2 -translate-x-1/2 absolute bottom-0 h-[2px] md:h-[3px] 2xl:h-[6px] w-[70%] md:w-[630px] rounded-[100%] z-0"
            style={{
              background:
                "radial-gradient(37.41% 682446.64% at 50% 49.99%, #0185EB 0%, #011425 100%)",
            }}
          />

          <div className="flex items-center justify-between gap-2 min-[1400px]:gap-4 relative z-10">
            <div className="w-[120px] max-[768px]:w-[140px] max-[375px]:w-[150px] sm:w-[120px] min-[100px]:w-[160px] 2xl:w-[235px] flex-shrink-0 cursor-pointer flex items-center transition-all duration-300">
              <BrandLogoIcon />
            </div>

            <div className="hidden min-[1200px]:flex items-center gap-[10px] min-[1400px]:gap-[20px] 2xl:gap-[35px] flex-grow justify-center transition-all duration-300">
              {allNavItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center relative group cursor-pointer"
                  onClick={() => setActiveItem(item.id)}
                >
                  <div className="flex gap-[6px] xl:gap-[8px] items-center">
                    <div className="w-[14px] h-[14px] flex items-center justify-center">
                      {getIcon(item.icon)}
                    </div>
                    <span
                      className={`font-poppins text-[13px] min-[1400px]:text-[14px] 2xl:text-[15px] whitespace-nowrap transition-colors ${activeItem === item.id ? "text-[#0185EB]" : "text-[#004C79] group-hover:text-[#0185EB]"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}

              {moreItem && (
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="flex items-center gap-[6px] xl:gap-[8px] cursor-pointer group"
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  >
                    <div className="w-[14px] h-[14px] flex items-center justify-center text-[#004C79] group-hover:text-[#0185EB] transition-colors">
                      {getIcon(moreItem.icon)}
                    </div>
                    <span
                      className={`font-poppins text-[13px] min-[1400px]:text-[14px] 2xl:text-[15px] whitespace-nowrap transition-colors ${moreDropdownOpen ? "text-[#0185EB]" : "text-[#004C79] group-hover:text-[#0185EB]"}`}
                    >
                      {moreItem.label}
                    </span>
                    <div
                      className={`transition-transform duration-200 ${moreDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDownIcon />
                    </div>
                  </div>

                  {moreDropdownOpen && (
                    <div className="absolute top-[45px] left-0 bg-[#091B34] border border-[#0185EB]/30 rounded-xl py-3 w-[180px] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                      {dropdownOptions.map((opt, i) => (
                        <div
                          key={i}
                          className="px-5 py-2 text-[#004C79] hover:text-[#0185EB] hover:bg-[#0185EB10] cursor-pointer font-poppins text-[14px] transition-colors"
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-[10px] min-[1400px]:gap-[20px] 2xl:gap-[25px] flex-shrink-0">
              {bellItem && (
                <div className="w-[20px] sm:w-[24px] text-[#0185EB] cursor-pointer flex items-center">
                  {getIcon(bellItem.icon)}
                </div>
              )}

              <button
                className="hidden min-[1200px]:block text-white font-inter rounded-tl-[200px] rounded-br-[200px] whitespace-nowrap text-[12px] min-[1400px]:text-[14px] 2xl:text-[16px] px-[20px] min-[1400px]:px-[35px] 2xl:px-[47px] py-[8px] 2xl:py-[15px] transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
                }}
              >
                {navbarData.navbar.rightSide.button.text}
              </button>

              <button
                className="min-[1200px]:hidden flex flex-col justify-center items-center w-[36px] h-[36px] rounded-lg gap-[5px] cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="block h-[2px] w-[22px] bg-[#0185EB] rounded-full" />
                <span className="block h-[2px] w-[22px] bg-[#0185EB] rounded-full" />
                <span className="block h-[2px] w-[22px] bg-[#0185EB] rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-[#091B34] shadow-2xl transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
        >
          <div className="flex items-center justify-between px-6 h-[90px] border-b border-white/5 flex-shrink-0">
            <div className="w-[140px] max-[375px]:w-[160px] flex items-center">
              <BrandLogoIcon />
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center text-[#0185EB]  rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute block h-[2.5px] w-6 bg-current rotate-45 rounded-full" />
                <span className="absolute block h-[2.5px] w-6 bg-current -rotate-45 rounded-full" />
              </div>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {allNavItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-xl text-[#004C79] hover:text-[#0185EB] hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <span className="font-poppins text-[16px] font-medium">
                  {item.label}
                </span>
              </div>
            ))}

            <div className="pt-2 mt-2 border-t border-white/5">
              <div className="flex items-center gap-4 p-4 text-[#0185EB] font-poppins font-bold">
                <div className="w-5 h-5 flex items-center justify-center">
                  {getIcon(moreItem?.icon || "more")}
                </div>
                {moreItem?.label}
              </div>
              <div className="pl-12 space-y-4 pb-4">
                {dropdownOptions.map((opt, i) => (
                  <div
                    key={i}
                    className="text-[#004C79] text-sm font-poppins hover:text-white cursor-pointer transition-colors"
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#091B34] border-t border-white/5">
            <button
              className="w-full text-white font-inter rounded-tl-[30px] rounded-br-[30px] py-4 text-[16px] font-bold shadow-lg uppercase tracking-wide"
              style={{
                background:
                  "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
              }}
            >
              {navbarData.navbar.rightSide.button.text}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
