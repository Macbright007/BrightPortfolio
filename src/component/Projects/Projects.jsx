import { Wrapper } from "./Projects.style";
import tayor from "../../assets/tayo.jpg";
import { FiExternalLink } from "react-icons/fi";
import SkillCard from "../SkillCard/SkillCard";

const Projects = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="project" ref={projectRef}>
        <div className="project__card">
          <img src={tayor} alt="project " />
          <div className="desciption">
            <h1>Tayor</h1>
            <p>Fintech</p>
            <div className="tools">
              <p>
                Website <FiExternalLink />
              </p>
              <ul>
                <li>React</li>
                <li>Styled components</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img src={tayor} alt="project " />
          <div className="desciption">
            <h1>Tayor</h1>
            <p>Fintech</p>
            <div className="tools">
              <p>
                Website <FiExternalLink />
              </p>
              <ul>
                <li>React</li>
                <li>Styled components</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img src={tayor} alt="project " />
          <div className="desciption">
            <h1>Tayor</h1>
            <p>Fintech</p>
            <div className="tools">
              <p>
                Website <FiExternalLink />
              </p>
              <ul>
                <li>React</li>
                <li>Styled components</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img src={tayor} alt="project " />
          <div className="desciption">
            <h1>Tayor</h1>
            <p>Fintech</p>
            <div className="tools">
              <p>
                Website <FiExternalLink />
              </p>
              <ul>
                <li>React</li>
                <li>Styled components</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img src={tayor} alt="project " />
          <div className="desciption">
            <h1>Tayor</h1>
            <p>Fintech</p>
            <div className="tools">
              <p>
                Website <FiExternalLink />
              </p>
              <ul>
                <li>React</li>
                <li>Styled components</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project__card">
          <img src={tayor} alt="project " />
          <div className="desciption">
            <h1>Tayor</h1>
            <p>Fintech</p>
            <div className="tools">
              <p>
                Website <FiExternalLink />
              </p>
              <ul>
                <li>React</li>
                <li>Styled components</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
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
