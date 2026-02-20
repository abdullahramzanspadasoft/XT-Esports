export * from "./navbar";
export * from "./home";
export * from "./utils";
export * from "./populargame";

import { NavbarData } from "./navbar";
import { HeroData } from "./home";

export type AppData = {
  navbar: NavbarData;
  hero: HeroData;
};
