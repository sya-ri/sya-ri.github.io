import React, { FC } from 'react';
import HeadingPage from '../template/HeadingPage';
import Skills, { Skill } from '../parts/about/Skills';
import { Text } from '@chakra-ui/react';
import ReturnToTop from '../parts/ReturnToTop';

const skills: Skill[] = [
  {
    name: 'Languages',
    contents: [
      { name: 'Kotlin', description: 'For Server' },
      { name: 'TypeScript', description: 'For Web' },
      { name: 'C++', description: 'For Embed/Robot' },
    ],
  },
  {
    name: 'Kotlin',
    contents: [
      { name: 'Gradle', description: 'Build Tool' },
      { name: 'Ktor', description: 'Server Framework' },
      { name: 'Exposed', description: 'SQL Framework' },
    ],
  },
  {
    name: 'Frontend',
    contents: [{ name: 'React', description: 'Web Framework' }],
  },
  {
    name: 'Tools',
    contents: [
      { name: 'Git / GitHub', description: 'Version Control System' },
      { name: 'GitHub Actions', description: 'CI/CD' },
    ],
  },
  {
    name: 'Others',
    contents: [
      { name: 'Minecraft Plugin', description: 'Extend Minecraft Server' },
      { name: 'Discord Bot', description: 'Make Useful Bot' },
    ],
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
