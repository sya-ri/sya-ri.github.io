import React, { FC } from 'react';
import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import JSX = jsx.JSX;

export interface Skill {
  name: string;
  contents: Content[];
}

export interface Content {
  name: string;
  description: string;
}

export interface SkillsProps {
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ skills }): JSX.Element => (
  <>
    <Heading as="h3" fontSize={28} fontWeight={400}>
      Skills
    </Heading>
    <Stack>
      {skills.map(({ name, contents }) => (
        <Container key={name} centerContent pt={2} px={0}>
          <Heading as="h4" fontSize={24} fontWeight={500} py={1}>
            {name}
          </Heading>
          <SimpleGrid columns={columns(contents)} spacing={2}>
            {contents.map(({ name, description }) => (
              <Tooltip key={name} label={description} hasArrow>
                <Text textAlign="center">{name}</Text>
              </Tooltip>
            ))}
          </SimpleGrid>
        </Container>
      ))}
    </Stack>
  </>
);

const columns = (contents: unknown[]): number | number[] => {
  const length = contents.length;
  return length < 3 ? length : [2, 3];
};

export default Skills;
