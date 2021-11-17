import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';
import * as Statics from '../../Statics';

const links = [
  { name: 'Twitter', url: 'https://twitter.com/sya_ri_dayo', icon: FiTwitter },
  { name: 'GitHub', url: 'https://github.com/sya-ri', icon: FiGithub },
  { name: 'Mail', url: 'mailto:contact@s7a.dev', icon: FiMail },
];

const Index: FC = () => (
  <Flex align="center" justify="center" height="100vh">
    <Container
      centerContent
      bgColor="white"
      w={300}
      p={8}
      boxShadow="0 0 5px 3px rgba(0, 0, 0, .2)"
      rounded="2xl"
    >
      <Box boxSize="150px">
        <Image src={Statics.Icon} />
      </Box>
      <Text fontSize="4xl" fontFamily="'Kalam', cursive" pt={4} pb={6}>
        sya_ri
      </Text>
      <Stack direction="row" spacing={8}>
        {links.map(({ name, url, icon }) => (
          <Tooltip key={name} label={name} hasArrow>
            <IconButton
              aria-label={name}
              colorScheme="black"
              variant="outline"
              icon={<Icon as={icon} />}
              as="a"
              href={url}
              target="_blank"
            />
          </Tooltip>
        ))}
      </Stack>
    </Container>
  </Flex>
);

export default Index;
