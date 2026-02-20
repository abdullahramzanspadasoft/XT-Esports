export type SocialLink = {
  name: string;
  href: string;
  icon: "facebook" | "twitter" | "discord";
};

export type HeroTitle = {
  line1: string;
  line2: string;
  line2Highlight: string;
};

export type HeroButton = {
  text: string;
  href: string;
};

export type HeroData = {
  title: HeroTitle;
  subtitle: string;
  description: string;
  button: HeroButton;
  socialLinks: SocialLink[];
};
