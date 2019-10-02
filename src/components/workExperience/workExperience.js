import React from "react";
import "components/workExperience/workExperience.scss";

import { Briefcase } from "components/utils/icons/icon";

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Briefcase />
        <span>Work Experience</span>
      </h3>
      <div className="wordExperience-item">
        <h5>Tagtoo 塔圖科技 - Front-end Engineer</h5>
        <p className="wordExperience-year">2019/09 - 至今</p>
      </div>
    </>
  );
};
