import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

const CenteringPage: FC = ({ children }) => (
  <Flex align="center" justify="center" height="100vh">
    {children}
  </Flex>
);

export default CenteringPage;
