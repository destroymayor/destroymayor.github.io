import React from 'react';

import styled from 'styled-components';

import About from 'components/about';
import Skill from 'components/skill';
import WorkExperience from 'components/work-experience';
import Education from 'components/education';
import Projects from 'components/projects';
import Honors from 'components/honors';
import Copyright from 'components/copyright';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.33rem;
  padding: 10px;
`;

export default () => {
  return (
    <Container>
      <About />
      <Skill />
      <WorkExperience />
      <Education />
      <Projects />
      <Honors />
      <Copyright />
    </Container>
  );
};
