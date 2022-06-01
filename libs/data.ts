import { FiMail } from "react-icons/fi";
import {
  SiAmazon,
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";
import Link from "./Link";
import Work from "./Work";

export const links: Link[] = [
  { icon: FiMail, title: "Email", link: "mailto:contact@s7a.dev" },
  { icon: SiTwitter, title: "Twitter", link: "https://link.s7a.dev/twitter" },
  { icon: SiGithub, title: "GitHub", link: "https://link.s7a.dev/github" },
  {
    icon: SiInstagram,
    title: "Instagram",
    link: "https://link.s7a.dev/instagram",
  },
  { icon: SiDiscord, title: "Discord", link: "https://link.s7a.dev/discord" },
  { icon: SiAmazon, title: "Amazon", link: "https://link.s7a.dev/amazon" },
];

export const works: Work[] = [
  {
    title: "PackSquash",
    description:
      "Minecraftのリソースパックを圧縮するオープンソースプロジェクトです。コントリビューターとして携わり、現在はコアチームとして活動しています。",
    tags: ["cli", "gh-actions", "minecraft", "rust"],
    github: ["ComunidadAylas", "PackSquash"],
  },
  {
    title: "SpigotEventList",
    description:
      "Minecraftプラグイン開発において必要不可欠なイベントの一覧です。たくさんの人に使っていただいています。",
    tags: ["frontend", "minecraft", "nextjs"],
    github: ["sya-ri", "spigot-event-list"],
  },
  {
    title: "EasySpigotAPI",
    description:
      "Minecraftプラグインのためのライブラリです。便利ですが少し煩雑になってしまいました。",
    tags: ["library", "minecraft", "kotlin"],
    github: ["sya-ri", "EasySpigotAPI"],
  },
  {
    title: "ktSpigot",
    description:
      "EasySpigotAPIの問題点を解消したライブラリです。現在開発中です。",
    tags: ["library", "minecraft", "kotlin"],
    github: ["sya-ri", "ktSpigot"],
  },
  {
    title: "接触確認アプリ",
    description:
      "コロナ禍で開催する文化祭のためにQRコードを使った接触確認アプリを1人で作りました。",
    tags: ["frontend", "backend", "kotlin", "react"],
    github: ["sya-ri", "where-who-with"],
  },
  {
    title: "KGit",
    description:
      "JGitのKotlinラッパーライブラリです。初めてOSSライブラリを開発しました。",
    tags: ["library", "kotlin"],
    github: ["sya-ri", "KGit"],
  },
  {
    title: "プラグイン依頼制作",
    description:
      "Minecraftの配信者や動画投稿者向けにプラグインの依頼制作をしています。",
    tags: ["minecraft", "kotlin"],
    youtube:
      "https://youtube.com/playlist?list=PLWJAXP1sPvvRSzctW4dYdrm9S_cpcIM96",
  },
];
