import { IconType } from "react-icons";

export interface Link {
  icon: IconType;
  title: string;
  link: string;
}

export const link = (icon: IconType, title: string, link: string): Link => ({
  icon,
  title,
  link,
});
