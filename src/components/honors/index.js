import React from 'react';

import styled from 'styled-components';

import { ItemWrapper } from 'styles/common';
import ItemTitle from 'components/shared/ItemTitle';
import { Award } from 'components/shared/icon';

import {
  honors_2014,
  honors_2015,
  honors_2016,
  honors_2017,
} from 'components/honors/honors-data';

const HonorsContainer = styled.div`
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
    <HonorsContainer>
      <HonorsYear>{year}</HonorsYear>
      <HonorsItem>
        <ul>
          {list.map((item, index) => (
            <li key={item.toString() + index}>{item}</li>
          ))}
        </ul>
      </HonorsItem>
    </HonorsContainer>
  );
};

export default () => {
  return (
    <ItemWrapper>
      <ItemTitle icon={<Award />} title="Honors && Seminar" />
      {renderList(2017, honors_2017)}
      {renderList(2016, honors_2016)}
      {renderList(2015, honors_2015)}
      {renderList(2014, honors_2014)}
    </ItemWrapper>
  );
};
