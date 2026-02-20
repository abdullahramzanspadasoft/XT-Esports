import React from "react";
import navbarData from "../constant/data.json";
import { processNavbarItems } from "../utils/navbarUtils";
import { IconName } from "../types";
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
} from "@/app/icons";

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

  return (
    <nav className="pt-[10px] md:pt-[20px] 2xl:pt-[35px] px-[10px] md:px-[20px] 2xl:px-[61px] z-50 w-full absolute">
      <div className="bg-[#091B34] py-[5px] md:py-[10px] xl:py-[15px] 2xl:py-[20px] px-[20px] md:px-[30px] 2xl:pl-[107px] 2xl:pr-[68px] rounded-bl-[200px] rounded-br-[200px] w-full relative max-w-[1980px] mx-auto">
        <div
          className="left-1/2 -translate-x-1/2 absolute bottom-0 h-[2px] md:h-[3px] 2xl:h-[6px] w-[70%] md:w-[630px] rounded-[100%] z-0"
          style={{
            background:
              "radial-gradient(37.41% 682446.64% at 50% 49.99%, #0185EB 0%, #011425 100%)",
          }}
        />

        <div className="flex items-center justify-between gap-4 relative z-10">
          <div className="w-[100px] md:w-[150px] 2xl:w-[235px] cursor-pointer">
            <BrandLogoIcon />
          </div>

          <div className="hidden xl:flex items-center gap-[20px] 2xl:gap-[35px]">
            {allNavItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center relative group cursor-pointer"
              >
                <div className="flex gap-[7px] items-center">
                  <div className="w-[14px] h-[14px] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-poppins text-[15px] font-normal text-[#004C79] group-hover:text-[#0185EB] transition-colors">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}

            {moreItem && (
              <div className="flex gap-[7px] items-center cursor-pointer group">
                <div className="w-[14px] h-[14px] flex items-center justify-center">
                  {getIcon(moreItem.icon)}
                </div>
                <span className="font-poppins text-[#004C79] group-hover:text-[#0185EB] text-[15px] font-normal">
                  {moreItem.label}
                </span>
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <ChevronDownIcon />
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-[15px] 2xl:gap-[25px]">
            {bellItem && (
              <div className="w-[20px] h-[20px] cursor-pointer flex items-center justify-center text-[#004C79] hover:text-[#0185EB] transition-colors">
                {getIcon(bellItem.icon)}
              </div>
            )}

            <button
              className="text-white font-inter rounded-tl-[200px] rounded-br-[200px] whitespace-nowrap
              text-[11px] md:text-[13px] 2xl:text-[16px]  
              px-[15px] md:px-[25px] xl:px-[35px] 2xl:px-[47px] 
              py-[4px] md:py-[8px] 2xl:py-[15px] transition-transform active:scale-95"
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
    </nav>
  );
};

export default Navbar;
