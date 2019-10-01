import React from "react";
import "components/education/education.scss";

import { Graduation } from "components/utils/icons/icon";

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Graduation />
        <span>Education</span>
      </h3>
      <div className="education-item">
        <h5>NYUST 國立雲林科技大學 - 資訊管理研究所</h5>
        <span className="education-year">2017 - 2019</span>
        <span className="education-content">研究方向為自然語言處理(NLP)</span>
      </div>
      <div className="education-item">
        <h5>YPU 元培醫事科技大學 - 資訊管理系</h5>
        <span className="education-year">2013 - 2017</span>
        <span className="education-content">專注於資訊醫療領域</span>
      </div>
    </>
  );
};
