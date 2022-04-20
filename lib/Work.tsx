import { IconProps } from "@chakra-ui/icon";
import { Icon } from "@chakra-ui/react";
import { CgBrowser } from "react-icons/cg";
import { FiPackage, FiServer } from "react-icons/fi";
import { GoTerminal } from "react-icons/go";
import {
  SiGithubactions,
  SiKotlin,
  SiNextdotjs,
  SiReact,
  SiRust,
} from "react-icons/si";
import MinecraftIcon from "./MinecraftIcon";

export type Tag =
  | "frontend"
  | "backend"
  | "cli"
  | "library"
  | "gh-actions"
  | "minecraft"
  | "kotlin"
  | "react"
  | "nextjs"
  | "rust";

export const getTagIcon = (tag: Tag, props: IconProps): JSX.Element => {
  switch (tag) {
    case "frontend":
      return <Icon as={CgBrowser} {...props} />;
    case "backend":
      return <Icon as={FiServer} {...props} />;
    case "cli":
      return <Icon as={GoTerminal} {...props} />;
    case "library":
      return <Icon as={FiPackage} {...props} />;
    case "gh-actions":
      return <Icon as={SiGithubactions} {...props} />;
    case "minecraft":
      return <MinecraftIcon {...props} />;
    case "kotlin":
      return <Icon as={SiKotlin} {...props} />;
    case "react":
      return <Icon as={SiReact} {...props} />;
    case "nextjs":
      return <Icon as={SiNextdotjs} {...props} />;
    case "rust":
      return <Icon as={SiRust} {...props} />;
  }
};

export interface Work {
  title: string;
  description: string;
  tags: Tag[];
  github?: [string, string];
  youtube?: string;
}

export const work = (
  title: string,
  description: string,
  tags: Tag[],
  github?: [string, string],
  youtube?: string
): Work => ({
  title,
  description,
  tags,
  github,
  youtube,
});
