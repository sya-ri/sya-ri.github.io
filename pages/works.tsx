import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  Tag,
  Icon,
  Link,
  Center,
} from "@chakra-ui/react";
import { SiGithub, SiYoutube } from "react-icons/si";
import BackToTop from "../components/BackToTop";
import { getTagIcon, Work } from "../lib/Work";

const works: Work[] = [
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

const Works = () => {
  return (
    <Container py={[4, 8]}>
      <Heading as="h1" textAlign="center">
        Works
      </Heading>
      <Box py={4}>
        {works.map(({ title, description, tags, github, youtube }) => {
          return (
            <Box key={title} py={2}>
              <HStack alignItems="center" py={2}>
                <Heading as="h2" fontSize={20}>
                  {title}
                </Heading>
                {github && (
                  <Link
                    isExternal
                    href={`https://github.com/${github.join("/")}`}
                  >
                    <Icon as={SiGithub} display="flex" fontSize={20} />
                  </Link>
                )}
                {youtube && (
                  <Link isExternal href={youtube}>
                    <Icon as={SiYoutube} display="flex" fontSize={20} />
                  </Link>
                )}
              </HStack>
              <Box px={2}>
                <HStack flexWrap="wrap" gap={2} spacing={0}>
                  {tags.map((tag) => (
                    <Tag key={tag}>
                      #{tag} {getTagIcon(tag, { ml: 1 })}
                    </Tag>
                  ))}
                </HStack>
                <Text py={2}>{description}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Center>
        <BackToTop />
      </Center>
    </Container>
  );
};

export default Works;
