export type PopularGameTitle = {
  part1: string;
  part2: string;
};

export type PopularGameButton = {
  text: string;
  href: string;
};

export type PopularGameCharacterImage = {
  src: string;
  alt: string;
};

export type PopularGameItem = {
  id: number;
  name: string;
  coverImage: string;
  time: string;
  region: string;
  matchType: string;
  price: string;
  slots: string;
};

export type PopularGamesData = {
  title: PopularGameTitle;
  description: string;
  button: PopularGameButton;
  games: PopularGameItem[];
  characterImage: PopularGameCharacterImage;
};

export type PopularGameCardProps = {
  name: string;
  coverImage: string;
  time: string;
  region: string;
  matchType: string;
  price: string;
  slots: string;
  width: string;
  height: string;
};
