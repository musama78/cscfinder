export type CSC = {
  name: string;
  street: string;
  zip: string;
  city: string;
  coords: number[];
  navigationLink?: string;
  logo: string;
  img: string;
  url: string;
  email?: string;
  badges: string[];
  tel?: string;
  description?: string;
  socials?: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
    whatsApp?: string;
    discord?: string;
    telegram?: string;
    snapShat?: string;
    twitch?: string;
    facebook?: string;
    mastodon?: string;
    tiktok?: string;
  };
};
