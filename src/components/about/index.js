import React from 'react';

import styled from 'styled-components';

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

const ProfileLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
  padding: 0px;
`;

export default () => {
  return (
    <>
      <ProfileHeader>
        <img src={profileImage} alt="Jared" className="profile-image" />
        <h2>Jared</h2>
      </ProfileHeader>
      <ProfileLink className="profiles-link">
        <span>
          GitHub&nbsp;&nbsp;:{' '}
          <a href="https://github.com/destroymayor">github.com/destroymayor</a>
        </span>
        <span>Gmail&nbsp;&nbsp;&nbsp;&nbsp;: kuil5230@gmail.com</span>
      </ProfileLink>
    </>
  );
};
