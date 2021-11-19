import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { BsFillPersonFill, BsQuestion } from 'react-icons/bs';
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';
import { Link as RouterDomLink } from 'react-router-dom';
import * as Paths from '../../Paths';
import * as Statics from '../../Statics';
import CenteringPage from '../template/CenteringPage';

const links = [
  { name: 'Twitter', url: 'https://twitter.com/sya_ri_dayo', icon: FiTwitter },
  { name: 'GitHub', url: 'https://github.com/sya-ri', icon: FiGithub },
  { name: 'Mail', url: 'mailto:contact@s7a.dev', icon: FiMail },
];

const pages = [
  { name: 'About', url: Paths.About, icon: BsFillPersonFill },
  { name: 'Fake', url: '', icon: BsQuestion },
];

const Index: FC = () => (
  <CenteringPage>
    <Container
      centerContent
      bgColor="white"
      w={300}
      p={8}
      boxShadow="0 0 5px 3px rgba(0, 0, 0, .2)"
      rounded="2xl"
    >
      <Box boxSize="150px">
        <Image src={Statics.IconPng} />
      </Box>
      <Text fontSize="4xl" fontFamily="'Kalam', cursive" pt={4} pb={6}>
        sya_ri
      </Text>
      <Stack direction="row" spacing={8}>
        {links.map(({ name, url, icon }) => (
          <Tooltip key={name} label={name} hasArrow>
            <IconButton
              aria-label={name}
              variant="outline"
              borderColor="black"
              icon={<Icon as={icon} />}
              rounded="full"
              as="a"
              href={url}
              target="_blank"
            />
          </Tooltip>
        ))}
      </Stack>
      <SimpleGrid columns={2} spacing={1} pt={4}>
        {pages.map(({ name, url, icon }) => (
          <Button key={name} bg="white" as={RouterDomLink} to={url}>
            <Container centerContent>
              <Icon aria-label={name} as={icon} />
              <Text fontSize={14}>{name}</Text>
            </Container>
          </Button>
        ))}
      </SimpleGrid>
    </Container>
  </CenteringPage>
);

export default Index;
