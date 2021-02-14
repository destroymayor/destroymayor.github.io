import React from 'react';

import styled from 'styled-components';

import { ItemWrapper } from '@/styles/common';
import ItemTitle from '@/components/shared/ItemTitle';
import { Graduation } from '@/components/shared/icon';

const EducationContainer = styled.div`
  margin: 0px 0px 15px 10px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const EducationTitle = styled.h4`
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
`;

const EducationYear = styled.span`
  font-size: 13px;
  color: #969696;
`;

const EducationField = styled.span`
  font-size: 13px;
`;

const Eduction = () => {
  return (
    <ItemWrapper>
      <ItemTitle icon={<Graduation />} title="Education" />
      <EducationContainer>
        <EducationTitle>NYUST 國立雲林科技大學 - 資訊管理研究所</EducationTitle>
        <EducationYear>2017 - 2019</EducationYear>
        <EducationField>Research in Natural Language Processing</EducationField>
      </EducationContainer>
      <EducationContainer>
        <EducationTitle>YPU 元培醫事科技大學 - 資訊管理系</EducationTitle>
        <EducationYear>2013 - 2017</EducationYear>
        <EducationField>Focus in Medical Information Technology</EducationField>
      </EducationContainer>
    </ItemWrapper>
  );
};

export default Eduction;
