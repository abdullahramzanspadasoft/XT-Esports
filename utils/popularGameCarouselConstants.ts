export const POPULAR_GAME_CARD_WIDTH = 300.58;
export const POPULAR_GAME_CARD_GAP = 21.29;
export const POPULAR_GAME_CARD_STEP =
  POPULAR_GAME_CARD_WIDTH + POPULAR_GAME_CARD_GAP;
export const POPULAR_GAME_VISIBLE_COUNT = 4;
export const POPULAR_GAME_VIEWPORT_WIDTH =
  POPULAR_GAME_VISIBLE_COUNT * POPULAR_GAME_CARD_WIDTH +
  (POPULAR_GAME_VISIBLE_COUNT - 1) * POPULAR_GAME_CARD_GAP;

export const POPULAR_GAME_TABLET_VISIBLE = 2;
export const POPULAR_GAME_LAPTOP_VISIBLE = 2;
export const POPULAR_GAME_MOBILE_VISIBLE = 1;
export const POPULAR_GAME_MOBILE_GAP = 16;

export type PopularGamesScreenSize =
  | "mobile"
  | "tablet"
  | "laptop"
  | "large-desktop"
  | "desktop";
