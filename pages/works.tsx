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
import { getTagIcon } from "../libs/Work";
import { works } from "../libs/data";

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
