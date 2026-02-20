export type NavbarItem = {
  id: number;
  icon: string;
  label: string;
  active: boolean;
  hasDropdown: boolean;
};

export type NavbarBrand = {
  namePart1: string;
  namePart2: string;
  logo: string;
};

export type NavbarNotification = {
  enabled: boolean;
  hasUnread: boolean;
};

export type NavbarButton = {
  text: string;
};

export type NavbarRightSide = {
  notification: NavbarNotification;
  button: NavbarButton;
};

export type NavbarData = {
  items: NavbarItem[];
  brand: NavbarBrand;
  rightSide: NavbarRightSide;
};

export type ProcessedNavbarItems = {
  headerTextSec1: NavbarItem[];
  headerTextSec2: NavbarItem[];
  moreItem: NavbarItem | undefined;
  bellItem: NavbarItem | undefined;
};

export type IconName =
  | "home"
  | "star"
  | "gamepad"
  | "rocket"
  | "cart"
  | "grid"
  | "globe"
  | "trophy"
  | "more"
  | "bell";
