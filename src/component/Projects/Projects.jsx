import { Wrapper } from "./Projects.style";
// import tayor from "../../assets/tayo.jpg";
import { FiExternalLink } from "react-icons/fi";
import SkillCard from "../SkillCard/SkillCard";
import { projects } from "../../Data";

const Projects = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="project" ref={projectRef}>
        {projects.map((project) => (
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
        ))}
      </div>
      <div className="skill" ref={skillRef}>
        <SkillCard header="Languages" skills={["HTML", "CSS", "JavaScript"]} />
        <SkillCard
          header="Frameworks"
          skills={[
            "JQuery",
            "Styled Components",
            "Material UI",
            "Next",
            "SAAS",
            "Tailwind CSS",
            "Bootstrap",
          ]}
        />
        <SkillCard
          header="Libraries"
          skills={[
            "React",
            "Firebase",
            "framer-motion",
            "Axios",
            "Jest",
            "react-router",
          ]}
        />
        <SkillCard
          header="SoftSkills"
          skills={[
            "Detailed",
            "Strong communicator",
            "Proactive",
            "Analytical",
            "Strong collaborator",
          ]}
        />
      </div>
    </Wrapper>
  );
};

export default Projects;
