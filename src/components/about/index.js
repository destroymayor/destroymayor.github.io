import React from 'react';

import styled from 'styled-components';

import profileImage from 'assets/image/profile.jpg';

const ProfileHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  margin: 0 5px;
  padding: 0 10px;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex: 0 0 90px;
`;

const ProfileIntroduction = styled.div`
  padding-left: 10px;
  flex: 1 0 300px;
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
    <ProfileHeader>
      <ProfilePicture
        src={profileImage}
        alt="Jared"
        className="profile-image"
      />
      <ProfileIntroduction>
        <h2>Jared</h2>
        {socialData.map((item) => (
          <ProfileContainer key={item.social}>
            <SocialLink>{item.social}</SocialLink>
            <SocialContent>: {item.link}</SocialContent>
          </ProfileContainer>
        ))}
      </ProfileIntroduction>
    </ProfileHeader>
  );
};
