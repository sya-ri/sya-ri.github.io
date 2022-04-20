import { Button, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { BiArrowBack } from "react-icons/bi";

const BackToTop = () => (
  <NextLink passHref href="/">
    <Link _hover={{ textDecoration: "none" }}>
      <Button variant="outline">
        <Icon as={BiArrowBack} mr={2} />
        Back to Top
      </Button>
    </Link>
  </NextLink>
);

export default BackToTop;
