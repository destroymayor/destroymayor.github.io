import React from "react";
import "page/index.scss";

import About from "components/about/about";
import Skill from "components/skill/skill";
import WorkExperience from "components/workExperience/workExperience";
import Education from "components/education/education";
import Projects from "components/projects/projects";
import Honors from "components/honors/honors";
import Copyright from "components/copyright/copyright";

export default () => {
  return (
    <div className="root">
      <About />
      <Skill />
      <WorkExperience />
      <Education />
      <Projects />
      <Honors />
      <Copyright />
    </div>
  );
};
