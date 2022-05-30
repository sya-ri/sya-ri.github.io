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
import { getTagIcon, work } from "../lib/Work";

const works = [
  work(
    "PackSquash",
    "Minecraftのリソースパックを圧縮するオープンソースプロジェクトです。コントリビューターとして携わり、現在はコアチームとして活動しています。",
    ["cli", "gh-actions", "minecraft", "rust"],
    ["ComunidadAylas", "PackSquash"]
  ),
  work(
    "SpigotEventList",
    "Minecraftプラグイン開発において必要不可欠なイベントの一覧です。たくさんの人に使っていただいています。",
    ["frontend", "minecraft", "nextjs"],
    ["sya-ri", "spigot-event-list"]
  ),
  work(
    "EasySpigotAPI",
    "Minecraftプラグインのためのライブラリです。便利ですが少し煩雑になってしまいました。",
    ["library", "minecraft", "kotlin"],
    ["sya-ri", "EasySpigotAPI"]
  ),
  work(
    "ktSpigot",
    "EasySpigotAPIの問題点を解消したライブラリです。現在開発中です。",
    ["library", "minecraft", "kotlin"],
    ["sya-ri", "ktSpigot"]
  ),
  work(
    "接触確認アプリ",
    "コロナ禍で開催する文化祭のためにQRコードを使った接触確認アプリを1人で作りました。",
    ["frontend", "backend", "kotlin", "react"],
    ["sya-ri", "where-who-with"]
  ),
  work(
    "KGit",
    "JGitのKotlinラッパーライブラリです。初めてOSSライブラリを開発しました。",
    ["library", "kotlin"],
    ["sya-ri", "KGit"]
  ),
  work(
    "プラグイン依頼制作",
    "Minecraftの配信者や動画投稿者向けにプラグインの依頼制作をしています。",
    ["minecraft", "kotlin"],
    undefined,
    "https://youtube.com/playlist?list=PLWJAXP1sPvvRSzctW4dYdrm9S_cpcIM96"
  ),
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
