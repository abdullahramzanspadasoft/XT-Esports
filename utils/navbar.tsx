import React, {
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { getRouteByItemId } from "@/utils/getRouteByItemId";
import {
  BellIcon,
  CartIcon,
  GamepadIcon,
  GlobeIcon,
  GridIcon,
  HomeIcon,
  MoreIcon,
  RocketIcon,
  StarIcon,
  TrophyIcon,
} from "@/icons";
import {
  NavbarLayoutItem,
  NavbarOption,
  NavbarOptionInput,
} from "@/types/navbar";

const iconMap: Record<string, React.ComponentType> = {
  home: HomeIcon,
  star: StarIcon,
  gamepad: GamepadIcon,
  rocket: RocketIcon,
  cart: CartIcon,
  grid: GridIcon,
  globe: GlobeIcon,
  trophy: TrophyIcon,
  more: MoreIcon,
  bell: BellIcon,
};

export const getNavbarIcon = (iconName: string): React.ReactNode => {
  const Icon = iconMap[iconName];
  return Icon ? React.createElement(Icon) : null;
};

export const getVisibleCountByWidth = (windowWidth: number): number => {
  if (windowWidth >= 1536) return 8;
  if (windowWidth >= 1440) return 7;
  if (windowWidth >= 1280) return 6;
  if (windowWidth >= 1024) return 5;
  if (windowWidth > 700) return 3;
  return 0;
};

export const buildCombinedMoreOptions = (
  overflowNavItems: NavbarLayoutItem[],
  dropdownOptions: NavbarOptionInput[],
): NavbarOption[] => [
  ...overflowNavItems.map((item) => ({
    label: item.label,
    id: item.id,
    icon: item.icon,
  })),
  ...dropdownOptions.map((option) => ({ ...option, icon: "more" })),
];

export const isNavbarItemActive = (pathname: string, itemId: number): boolean => {
  const route = getRouteByItemId(itemId);
  if (route === "/") {
    return pathname === "/";
  }
  return pathname === route || pathname.startsWith(`${route}/`);
};

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export const useNavbarLayout = (
  allNavItems: NavbarLayoutItem[],
  dropdownOptions: NavbarOptionInput[],
) => {
  const windowWidth = useWindowWidth();

  return useMemo(() => {
    const visibleCount = getVisibleCountByWidth(windowWidth);
    const visibleNavItems = allNavItems.slice(0, visibleCount);
    const overflowNavItems = allNavItems.slice(visibleCount);
    const combinedMoreOptions = buildCombinedMoreOptions(
      overflowNavItems,
      dropdownOptions,
    );

    return {
      visibleNavItems,
      overflowNavItems,
      combinedMoreOptions,
      hasMoreOptions: combinedMoreOptions.length > 0,
    };
  }, [allNavItems, dropdownOptions, windowWidth]);
};

export const useCloseOnOutsideClick = (
  dropdownRef: RefObject<HTMLDivElement | null>,
  onClose: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, onClose]);
};
