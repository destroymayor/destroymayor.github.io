import React from "react";
import "components/about/about.scss";

import profileImage from "assets/image/profile.jpg";

export default () => {
  return (
    <>
      <header className="profile">
        <img src={profileImage} alt="Jared" className="profile-image" />
        <h2>
          Jared
        </h2>
      </header>
      <ul className="profiles-link">
        <li>
          GitHub&nbsp;&nbsp;: <a href="https://github.com/destroymayor">github.com/destroymayor</a>
        </li>
        <li>Gmail&nbsp;&nbsp;&nbsp;&nbsp;: kuil5230@gmail.com</li>
      </ul>
    </>
  );
};
