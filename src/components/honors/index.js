import React from 'react';

import styled from 'styled-components';

import { ItemWrapper } from 'styles/common';
import ItemTitle from 'components/shared/ItemTitle';
import { Award } from 'components/shared/icon';

import { data } from 'components/honors/honors-data';

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

export default () => {
  return (
    <ItemWrapper flexBasis={400}>
      <ItemTitle icon={<Award />} title="Honors & Seminar" />
      {data.map((item) => (
        <HonorsContainer key={item.year}>
          <HonorsYear>{item.year}</HonorsYear>
          <HonorsItem>
            <ul>
              {item.honors.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </HonorsItem>
        </HonorsContainer>
      ))}
    </ItemWrapper>
  );
};
