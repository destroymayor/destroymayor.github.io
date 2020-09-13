import React from 'react';

import styled from 'styled-components';

import ItemTitle from 'components/shared/ItemTitle';
import { ItemWrapper } from 'styles/common';
import { Briefcase } from 'components/shared/icon';

const WorkExperienceContainer = styled.div`
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
    <ItemWrapper>
      <ItemTitle icon={<Briefcase />} title="Work Experience" />
      <WorkExperienceContainer>
        <WorkExperienceTitle>Tagtoo - Front-end Engineer</WorkExperienceTitle>
        <WorkExperienceYear>2019/09 - Present</WorkExperienceYear>
      </WorkExperienceContainer>
    </ItemWrapper>
  );
};
