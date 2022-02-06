import { Button, Center, Icon, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";
import { use100vh } from "../lib/100vh";

const Page: NextPage = () => {
  const vh100 = use100vh();
  return (
    <Center flexDirection="column" minH={vh100 || "100vh"}>
      <Icon as={MdOutlineSentimentDissatisfied} fontSize={48} />
      <Text fontSize={32} mb={8} mt={4}>
        404 Not Found
      </Text>
      <Link _hover={{ textDecoration: "none" }} href="/">
        <Button variant="outline">
          <Icon as={BiArrowBack} mr={2} />
          Back to Top
        </Button>
      </Link>
    </Center>
  );
};

export default Page;
