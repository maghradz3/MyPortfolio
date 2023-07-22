import "./Cube.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const Cube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGithub} color="black" />
        </div>
      </div>
    </div>
  );
};
