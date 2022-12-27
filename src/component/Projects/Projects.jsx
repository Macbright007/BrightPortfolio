import { Wrapper } from "./Projects.style";
import tayor from "../../assets/tayo.jpg";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <Wrapper>
      <div className="project">
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
      <div className="skill">
        <h1>Languages</h1>
        <div className="skill_cardContainer">
          <h2>HTML</h2>
          <h2>CSS</h2>
          <h2>JavaScript</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
