import React, { FC } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import CenteringPage from './CenteringPage';

type Props = {
  title: string;
};

const HeadingPage: FC<Props> = ({ title, children }) => (
  <CenteringPage>
    <Container
      centerContent
      bgColor="white"
      w={['95%', 800]}
      p={8}
      boxShadow="0 0 5px 3px rgba(0, 0, 0, .2)"
      rounded="2xl"
    >
      <Heading
        fontSize={32}
        fontWeight={500}
        px={2}
        borderBottom={2}
        borderBottomStyle="solid"
      >
        {title}
      </Heading>
      <Container centerContent>{children}</Container>
    </Container>
  </CenteringPage>
);

export default HeadingPage;
