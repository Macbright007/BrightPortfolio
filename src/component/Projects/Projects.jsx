import { Wrapper } from "./Projects.style";
import SkillCard from "../SkillCard/SkillCard";
import { projects } from "../../Data";
import ProjectCard from "./ProjectCard";
// import myself from "../../assets/myself.jpg"

const Projects = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="project__container">
        <div ref={projectRef}>
          <div className="profile__img__container">
            {/* <img src={myself} alt="myself" /> */}
          </div>
        <div className="project" ref={projectRef}>
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
        </div>

        {/* skills section */}
        <div className="skill" ref={skillRef}>
          <SkillCard
            header="Languages"
            skills={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React-Native",
            ]}
          />
          <SkillCard
            header="Frameworks"
            skills={["Next", "SAAS", "Tailwind CSS", "Bootstrap"]}
          />
          <SkillCard
            header="Libraries"
            skills={[
              "React",
              "Styled Components",
              "Firebase",
              "Axios",
              "react-router",
            ]}
          />
          <SkillCard
            header="State Management and Concepts"
            skills={[
              "Context Api",
              "Design Implementation",
              "Clean Architecture",
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
      </div>
    </Wrapper>
  );
};

export default Projects;
