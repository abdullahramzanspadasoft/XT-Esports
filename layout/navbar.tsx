"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navbarData from "../constant/data.json";
import { processNavbarItems } from "../utils/navbarUtils";
import { getRouteByItemId } from "@/utils/getRouteByItemId";
import {
  BrandLogoIcon,
  ChevronDownIcon,
} from "@/icons";
import {
  getNavbarIcon,
  isNavbarItemActive,
  useCloseOnOutsideClick,
  useNavbarLayout,
} from "@/utils/navbar";

const Navbar = () => {
  const pathname = usePathname();
  const { headerTextSec1, headerTextSec2, moreItem, bellItem } =
    processNavbarItems(navbarData.navbar.items);

  const allNavItems = [...headerTextSec1, ...headerTextSec2];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const dropdownOptions = (moreItem?.children || []).map((option) => ({
    ...option,
    icon: "more",
  }));
  const {
    visibleNavItems,
    overflowNavItems,
    combinedMoreOptions,
    hasMoreOptions,
  } = useNavbarLayout(allNavItems, dropdownOptions);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(dropdownRef, () => setMoreDropdownOpen(false));

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
            <div className="w-[120px] max-[768px]:w-[140px] max-[375px]:w-[150px] sm:w-[120px] min-[100px]:w-[160px] 2xl:w-[235px] shrink-0 cursor-pointer flex items-center transition-all duration-300">
              <BrandLogoIcon />
            </div>

            <div className="hidden min-[701px]:flex items-center gap-[10px] min-[1400px]:gap-[20px] 2xl:gap-[35px] grow justify-center transition-all duration-300">
              {visibleNavItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center relative group"
                >
                  <Link
                    href={getRouteByItemId(item.id)}
                    className="flex gap-[6px] xl:gap-[8px] items-center"
                  >
                    <div
                      className={`w-[14px] h-[14px] flex items-center justify-center transition-colors ${isNavbarItemActive(pathname, item.id) ? "text-[#0185EB]" : "text-[#004C79] group-hover:text-[#0185EB]"}`}
                    >
                      {getNavbarIcon(item.icon)}
                    </div>
                    <span
                      className={`font-poppins text-[13px] min-[1400px]:text-[14px] 2xl:text-[15px] whitespace-nowrap transition-colors ${isNavbarItemActive(pathname, item.id) ? "text-[#0185EB]" : "text-[#004C79] group-hover:text-[#0185EB]"}`}
                    >
                      {item.label}
                    </span>
                  </Link>

                  {isNavbarItemActive(pathname, item.id) && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top-1 duration-200"
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: "#0185EB",
                        top: "100%",
                        marginTop: "5px",
                      }}
                    />
                  )}
                </div>
              ))}

              {(moreItem || overflowNavItems.length > 0) && (
                <div className="relative" ref={dropdownRef}>
                  <div
                    className={`flex items-center gap-[6px] xl:gap-[8px] group ${hasMoreOptions ? "cursor-pointer" : "cursor-default"}`}
                    onClick={() =>
                      hasMoreOptions &&
                      setMoreDropdownOpen((previousState) => !previousState)
                    }
                  >
                    <div className="w-[14px] h-[14px] flex items-center justify-center text-[#004C79] group-hover:text-[#0185EB] transition-colors">
                      {getNavbarIcon(moreItem?.icon || "more")}
                    </div>
                    <span
                      className={`font-poppins text-[13px] min-[1400px]:text-[14px] 2xl:text-[15px] whitespace-nowrap transition-colors ${moreDropdownOpen ? "text-[#0185EB]" : "text-[#004C79] group-hover:text-[#0185EB]"}`}
                    >
                      {moreItem?.label || "More"}
                    </span>
                    <div
                      className={`transition-transform duration-200 ${hasMoreOptions && moreDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDownIcon />
                    </div>
                  </div>

                  {hasMoreOptions && moreDropdownOpen && (
                    <div className="absolute top-[45px] left-[-50px] sm:left-0 bg-[#091B34] border border-[#0185EB]/30 rounded-xl py-3 w-[200px] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                      {combinedMoreOptions.map((opt, i) =>
                        typeof opt.id === "number" ? (
                          <Link
                            key={i}
                            href={getRouteByItemId(opt.id)}
                            className={`px-5 py-2 flex items-center gap-3 font-poppins text-[14px] transition-colors ${isNavbarItemActive(pathname, opt.id)
                                ? "text-[#0185EB] bg-[#0185EB10]"
                                : "text-[#004C79] hover:text-[#0185EB] hover:bg-[#0185EB10]"
                              }`}
                            onClick={() => setMoreDropdownOpen(false)}
                          >
                            <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
                              {getNavbarIcon(opt.icon)}
                            </div>
                            <span className="whitespace-nowrap">{opt.label}</span>
                          </Link>
                        ) : (
                          <button
                            key={i}
                            type="button"
                            className="w-full px-5 py-2 flex items-center gap-3 text-left font-poppins text-[14px] text-[#004C79] hover:text-[#0185EB] hover:bg-[#0185EB10] transition-colors"
                            onClick={() => setMoreDropdownOpen(false)}
                          >
                            <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
                              {getNavbarIcon(opt.icon)}
                            </div>
                            <span className="whitespace-nowrap">{opt.label}</span>
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-[10px] min-[1400px]:gap-[20px] 2xl:gap-[25px] shrink-0">
              {bellItem && (
                <div className="w-[20px] sm:w-[24px] text-[#0185EB] cursor-pointer flex items-center">
                  {getNavbarIcon(bellItem.icon)}
                </div>
              )}

              <button
                className="hidden min-[701px]:block text-white font-inter rounded-tl-[200px] rounded-br-[200px] whitespace-nowrap text-[12px] min-[1400px]:text-[14px] 2xl:text-[16px] px-[20px] min-[1400px]:px-[35px] 2xl:px-[47px] py-[8px] 2xl:py-[15px] transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(116.09deg, #0185EB 33.56%, #00599E 91.39%)",
                }}
              >
                {navbarData.navbar.rightSide.button.text}
              </button>

              <button
                className="min-[701px]:hidden flex flex-col justify-center items-center w-[36px] h-[36px] rounded-lg gap-[5px] cursor-pointer"
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
        className={`fixed inset-0 z-100 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-[#091B34] shadow-2xl transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
        >
          <div className="flex items-center justify-between px-6 h-[90px] border-b border-white/5 shrink-0">
            <div className="w-[140px] max-[375px]:w-[160px] flex items-center">
              <BrandLogoIcon />
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center text-[#0185EB] rounded-full"
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
              <Link
                key={item.id}
                href={getRouteByItemId(item.id)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${isNavbarItemActive(pathname, item.id)
                    ? "text-[#0185EB] bg-white/5"
                    : "text-[#004C79] hover:text-[#0185EB] hover:bg-white/5"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {getNavbarIcon(item.icon)}
                </div>
                <span className="font-poppins text-[16px] font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
