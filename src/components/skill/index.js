import React from 'react';

import styled from 'styled-components';
import {
  JSIcon,
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  VueIcon,
  NodeIcon,
  GitIcon,
  Hammer,
} from 'components/utils/icons/icon';

const Container = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;

  & > li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 14px;
  }
`;

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Hammer />
        <span>Skills</span>
      </h3>
      <Container>
        <li>
          <JSIcon />
          <span> JavaScript · </span>
          <CSSIcon />
          <span> CSS · </span>
          <HTMLIcon />
          <span> HTML</span>
        </li>
        <li>
          <ReactIcon />
          <span>React · </span>
          <ReactIcon />
          <span> React Native · </span>
          <VueIcon />
          <span>Vue</span>
        </li>
        <li>
          <NodeIcon />
          <span> Node.js · </span>
          <GitIcon />
          <span> Git</span>
        </li>
      </Container>
    </>
  );
};
