import {
  Button,
  Center,
  Image,
  Link,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  SiAmazon,
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";
import { use100vh } from "../lib/100vh";

const link = (icon: IconType, title: string, link: string) => ({
  icon,
  title,
  link,
});

const links = [
  link(SiTwitter, "Twitter", "https://link.s7a.dev/twitter"),
  link(SiGithub, "GitHub", "https://link.s7a.dev/github"),
  link(SiInstagram, "Instagram", "https://link.s7a.dev/instagram"),
  link(SiDiscord, "Discord", "https://link.s7a.dev/discord"),
  link(SiAmazon, "Amazon", "https://link.s7a.dev/amazon"),
];

const Index = () => {
  const vh100 = use100vh();
  return (
    <Center flexDirection="column" gap={4} minH={vh100 || "100vh"} p="auto">
      <Image alt="Icon" h={120} rounded="full" src="/icon.png" w={120} />
      <Text fontSize={32} pb={4}>
        sya_ri
      </Text>
      {links.map(({ icon, title, link }) => (
        <Link
          key={title}
          isExternal
          _hover={{ textDecoration: "none" }}
          href={link}
        >
          <Button w={200}>
            <Flex align="center">
              <Icon as={icon} mr={2} />
              {title}
            </Flex>
          </Button>
        </Link>
      ))}
    </Center>
  );
};

export default Index;