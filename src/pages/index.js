import React from 'react';

import styled from 'styled-components';

import About from '@/components/about';
import Skill from '@/components/skills';
import WorkExperience from '@/components/work-experience';
import Education from '@/components/education';
import Projects from '@/components/projects';
import Honors from '@/components/honors';
import Copyright from '@/components/copyright';

const Container = styled.div`
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.33rem;
  padding: 10px;
`;

const Index = () => {
  return (
    <>
      <About />
      <Container>
        <Skill />
        <WorkExperience />
        <Projects />
        <Education />
        <Honors />
        <Copyright />
      </Container>
    </>
  );
};

export default Index;
