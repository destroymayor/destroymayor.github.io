import React from "react";
import "components/projects/projects.scss";

import { Bookmark } from "components/utils/icons/icon";

import { items_2017, items_2018, item_2019 } from "components/projects/projects-data";

const renderList = (year, list) => {
  return (
    <div className="projects-row">
      <div className="projects-year">{year}</div>
      <div className="projects-item">
        <ul>
          {list.map((item) => (
            <li key={item.text}>
                {item.github}
              <span>{item.tech_icon}</span>
              <span>{item.text}</span>
            </li>
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
        <Bookmark />
        <span>Side Projects</span>
      </h3>
      {renderList(2019, item_2019)}
      {renderList(2018, items_2018)}
      {renderList(2017, items_2017)}
    </>
  );
};
