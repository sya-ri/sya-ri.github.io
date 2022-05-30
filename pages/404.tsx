import { Center, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";
import BackToTop from "../components/BackToTop";
import use100vh from "../components/use100vh";

const Page: NextPage = () => {
  const vh100 = use100vh();
  return (
    <Center flexDirection="column" minH={vh100 || "100vh"}>
      <Icon as={MdOutlineSentimentDissatisfied} fontSize={48} />
      <Text fontSize={32} mb={8} mt={4}>
        404 Not Found
      </Text>
      <BackToTop />
    </Center>
  );
};

export default Page;
