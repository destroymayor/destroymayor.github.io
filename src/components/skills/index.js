import React from 'react';

import styled from 'styled-components';
import ItemTitle from '@/components/shared/ItemTitle';
import { ItemWrapper } from '@/styles/common';

import {
  JSIcon,
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  VueIcon,
  NodeIcon,
  GitIcon,
  Hammer,
} from '@/components/shared/icon';

const SkillsContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;

  & > li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 14px;

    span {
      padding: 0 7px;
    }
  }
`;

const Skills = () => {
  return (
    <ItemWrapper>
      <ItemTitle icon={<Hammer />} title="Skills" />
      <SkillsContainer>
        <li>
          <JSIcon />
          <span>JavaScript ·</span>
          <CSSIcon />
          <span>CSS ·</span>
          <HTMLIcon />
          <span>HTML</span>
        </li>
        <li>
          <ReactIcon />
          <span>React ·</span>
          <ReactIcon />
          <span>React Native ·</span>
          <VueIcon />
          <span>Vue</span>
        </li>
        <li>
          <NodeIcon />
          <span>Node.js ·</span>
          <GitIcon />
          <span>Git</span>
        </li>
      </SkillsContainer>
    </ItemWrapper>
  );
};

export default Skills;
