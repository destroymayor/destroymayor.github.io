import React from 'react';

import styled from 'styled-components';

import { ItemWrapper } from 'styles/common';
import ItemTitle from 'components/shared/ItemTitle';
import { Graduation } from 'components/shared/icon';

const EducationContainer = styled.div`
  margin: 0px 0px 15px 10px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const EducationTitle = styled.h5`
  margin: 0;
  line-height: 1.4;
`;

const EducationYear = styled.span`
  font-size: 13px;
  color: #969696;
`;

export default () => {
  return (
    <ItemWrapper>
      <ItemTitle icon={<Graduation />} title="Education" />
      <EducationContainer>
        <EducationTitle>NYUST 國立雲林科技大學 - 資訊管理研究所</EducationTitle>
        <EducationYear>2017 - 2019</EducationYear>
        <span>研究方向為自然語言處理(NLP)</span>
      </EducationContainer>
      <EducationContainer>
        <EducationTitle>YPU 元培醫事科技大學 - 資訊管理系</EducationTitle>
        <EducationYear>2013 - 2017</EducationYear>
        <span>專注於資訊醫療領域</span>
      </EducationContainer>
    </ItemWrapper>
  );
};
