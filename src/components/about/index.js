import React from 'react';

import styled from 'styled-components';

import { ItemWrapper } from 'styles/common';
import profileImage from 'assets/image/profile.jpg';

const ProfileHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-left: 5px;
  }

  h2 {
    font-size: 30px;
    margin-left: 10px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const SocialLink = styled.div`
  flex: 0 0 70px;
`;

const SocialContent = styled.div`
  flex: 1;
`;

const socialData = [
  {
    social: 'GitHub',
    link: <a href="https://github.com/destroymayor">github.com/destroymayor</a>,
  },
  { social: 'Gmail', link: 'kuil5230@gmail.com' },
  {
    social: 'Linkedin',
    link: (
      <a href="https://www.linkedin.com/in/jared-chen/">
        linkedin.com/jared-chen
      </a>
    ),
  },
];

export default () => {
  return (
    <ItemWrapper>
      <ProfileHeader>
        <img src={profileImage} alt="Jared" className="profile-image" />
        <h2>Jared</h2>
      </ProfileHeader>
      {socialData.map((item) => (
        <ProfileContainer key={item.social}>
          <SocialLink>{item.social}</SocialLink>
          <SocialContent>: {item.link}</SocialContent>
        </ProfileContainer>
      ))}
    </ItemWrapper>
  );
};
