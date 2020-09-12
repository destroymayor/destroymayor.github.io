import React from 'react';

import styled from 'styled-components';

import { Graduation } from 'components/utils/icons/icon';

const Container = styled.div`
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
    <>
      <h3 className="item-title">
        <Graduation />
        <span>Education</span>
      </h3>
      <Container className="education-item">
        <EducationTitle>NYUST 國立雲林科技大學 - 資訊管理研究所</EducationTitle>
        <EducationYear>2017 - 2019</EducationYear>
        <span>研究方向為自然語言處理(NLP)</span>
      </Container>
      <Container className="education-item">
        <EducationTitle>YPU 元培醫事科技大學 - 資訊管理系</EducationTitle>
        <EducationYear>2013 - 2017</EducationYear>
        <span>專注於資訊醫療領域</span>
      </Container>
    </>
  );
};
