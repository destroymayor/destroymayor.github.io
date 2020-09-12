import React from 'react';

import styled from 'styled-components';

import { Award } from 'components/utils/icons/icon';

import {
  honors_2014,
  honors_2015,
  honors_2016,
  honors_2017,
} from 'components/honors/honors-data';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const HonorsYear = styled.div`
  margin-left: 10px;
  margin-right: 7px;
  color: #999;
  font-size: 16px;
`;

const HonorsItem = styled.div`
  border-left: 5px solid #ccc;

  ul {
    margin-top: 7px;
    padding-left: 10px;
    font-size: 14px;
    list-style-type: none;

    li {
      margin-top: 5px;
    }
  }
`;

const renderList = (year, list) => {
  return (
    <Container>
      <HonorsYear>{year}</HonorsYear>
      <HonorsItem>
        <ul>
          {list.map((item, index) => (
            <li key={item.toString() + index}>{item}</li>
          ))}
        </ul>
      </HonorsItem>
    </Container>
  );
};

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Award />
        <span>Honors && Seminar</span>
      </h3>
      {renderList(2017, honors_2017)}
      {renderList(2016, honors_2016)}
      {renderList(2015, honors_2015)}
      {renderList(2014, honors_2014)}
    </>
  );
};
