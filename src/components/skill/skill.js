import React from "react";
import "components/skill/skill.scss";
import { JSIcon, CSSIcon, HTMLIcon, ReactIcon,VueIcon, NodeIcon, GitIcon, Hammer } from "components/utils/icons/icon";

export default () => {
  return (
    <>
      <h3 className="item-title">
        <Hammer />
        <span>Skills</span>
      </h3>
      <ul className="skills-item">
        <li>
          <JSIcon />
          <span> JavaScript · </span>
          <CSSIcon />
          <span> CSS · </span>
          <HTMLIcon />
          <span> HTML</span>
        </li>
        <li>
          <ReactIcon />
          <span>React · </span>
          <ReactIcon />
          <span> React Native · </span>
          <VueIcon />
          <span>Vue</span>
        </li>
        <li>
          <NodeIcon />
          <span> Node.js · </span>
          <GitIcon />
          <span> Git</span>
        </li>
      </ul>
    </>
  );
};
