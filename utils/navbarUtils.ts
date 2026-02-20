import { NavbarItem, ProcessedNavbarItems } from "../types";

export const processNavbarItems = (
  items: NavbarItem[]
): ProcessedNavbarItems => {
  const headerTextSec1 = items.slice(0, 4);
  const headerTextSec2 = items.slice(4, 8);
  const moreItem = items.find((item) => item.icon === "more");
  const bellItem = items.find((item) => item.icon === "bell");

  return {
    headerTextSec1,
    headerTextSec2,
    moreItem,
    bellItem,
  };
};
