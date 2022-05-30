import {
  Button,
  Center,
  Image,
  Link,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import use100vh from "../components/use100vh";
import { links } from "../libs/data";

const Index = () => {
  const vh100 = use100vh();
  return (
    <Center flexDirection="column" gap={4} minH={vh100 || "100vh"} p="auto">
      <Image
        alt="Icon"
        bgColor="white"
        h={120}
        rounded="full"
        src="/icon.svg"
        w={120}
      />
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
          <Button variant="outline" w={200}>
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
