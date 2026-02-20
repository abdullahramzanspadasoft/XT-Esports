import { NavbarItem, ProcessedNavbarItems } from "./navbar";

export type ProcessNavbarItemsFunction = (
  items: NavbarItem[]
) => ProcessedNavbarItems;
