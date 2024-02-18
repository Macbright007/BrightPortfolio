import React from "react";
import { FiExternalLink } from "react-icons/fi";


const ProjectCard = ({project}) => {
  return (
    <div className="project__card">
      <img src={project.img} alt="project " />
      <div className="desciption">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="tools">
          <a href={project.webLink} target="_blank" rel="noreferrer">
            Website <FiExternalLink />
          </a>
          <ul>
            <li>React</li>
            <li>Styled components</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
