import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Skills, { Skill } from '../parts/about/Skills';
import ReturnToTop from '../parts/ReturnToTop';
import HeadingPage from '../template/HeadingPage';

const skills: Skill[] = [
  {
    contents: [
      { description: 'For Server', name: 'Kotlin' },
      { description: 'For Web', name: 'TypeScript' },
      { description: 'For Embed/Robot', name: 'C++' },
    ],
    name: 'Languages',
  },
  {
    contents: [
      { description: 'Build Tool', name: 'Gradle' },
      { description: 'Server Framework', name: 'Ktor' },
      { description: 'SQL Framework', name: 'Exposed' },
    ],
    name: 'Kotlin',
  },
  {
    contents: [{ description: 'Web Framework', name: 'React' }],
    name: 'Frontend',
  },
  {
    contents: [
      { description: 'Version Control System', name: 'Git / GitHub' },
      { description: 'CI/CD', name: 'GitHub Actions' },
    ],
    name: 'Tools',
  },
  {
    contents: [
      { description: 'Extend Minecraft Server', name: 'Minecraft Plugin' },
      { description: 'Make Useful Bot', name: 'Discord Bot' },
    ],
    name: 'Others',
  },
];

const About: FC = () => (
  <HeadingPage title="About">
    <Text py={4}>綺麗なコードが好きです。</Text>
    <Skills skills={skills} />
    <ReturnToTop mt={4} />
  </HeadingPage>
);

export default About;
