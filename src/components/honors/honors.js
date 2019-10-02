import React from "react";
import "components/honors/honors.scss";

import { Award } from "components/utils/icons/icon";

import { items_2014, items_2015, items_2016, items_2017 } from "components/honors/honors-data";

const renderList = (year, list) => {
  return (
    <div className="honors-row">
      <div className="honors-year">{year}</div>
      <div className="honors-item">
        <ul>
          {list.map(item => (
            <li key={item.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Award />
        <span>Honors && Seminar</span>
      </h3>
      {renderList(2017, items_2017)}
      {renderList(2016, items_2016)}
      {renderList(2015, items_2015)}
      {renderList(2014, items_2014)}
    </>
  );
};
