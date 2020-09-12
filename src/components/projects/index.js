import React from 'react';

import styled from 'styled-components';

import { Bookmark } from 'components/utils/icons/icon';

import {
  project_2017,
  project_2018,
  project_2019,
} from 'components/projects/projects-data';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectsYear = styled.div`
  margin-left: 10px;
  margin-right: 7px;
  color: #999999;
  font-size: 16px;
`;

const ProjectsItem = styled.div`
  border-left: 5px solid #ccc;

  ul {
    margin-top: 7px;
    padding-left: 10px;
    font-size: 14px;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      margin-top: 5px;

      a {
        color: rgb(102, 102, 102);
        text-decoration: none;
      }
    }
  }
`;

const project = (year, list) => {
  return (
    <Container>
      <ProjectsYear>{year}</ProjectsYear>
      <ProjectsItem>
        <ul>
          {list.map((item, index) => (
            <li key={item.text + index}>
              <span>{item.github}</span>
              <span>{item.tech_icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </ProjectsItem>
    </Container>
  );
};

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Bookmark />
        <span>Side Projects</span>
      </h3>
      {project(2019, project_2019)}
      {project(2018, project_2018)}
      {project(2017, project_2017)}
    </>
  );
};
