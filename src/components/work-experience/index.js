import React from 'react';

import styled from 'styled-components';

import { Briefcase } from 'components/utils/icons/icon';

const Container = styled.div`
  margin: 0px 0px 15px 10px;
  font-size: 14px;
`;

const WorkExperienceTitle = styled.h5`
  margin: 0;
  line-height: 1.4;
`;

const WorkExperienceYear = styled.div`
  font-size: 13px;
  color: #969696;
`;

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Briefcase />
        <span>Work Experience</span>
      </h3>
      <Container>
        <WorkExperienceTitle>
          Tagtoo 塔圖科技 - Front-end Engineer
        </WorkExperienceTitle>
        <WorkExperienceYear>2019/09 - 至今</WorkExperienceYear>
      </Container>
    </>
  );
};
