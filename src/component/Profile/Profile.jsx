import { Wrapper } from "./Profile.style";
import { GrMail } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import profile__img from "../../assets/tayo.jpg";

const Profile = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="profile">
        <h1>Hello, I am Adenusi Adetayo.</h1>
        <p>
          A Front-end developer currently working as Front-end Engineer at{" "}
          <span>Foresight Technologies</span>. Proficient in HTML, CSS, and
          JavaScript with working experience using modern libraries and
          frameworks. I have launched Web and Progressive Web Applications using{" "}
          <span>Reactjs</span>. A strong team player with great communication
          skills and creative problem-solving abilities. I have an eye for
          design and keen on the impact on usability related issues on the
          experience of users.
        </p>
        <ul>
          <li
            onClick={() => {
              projectRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p>01</p>
            <div className="rule">
              <hr />
            </div>
            <p>PROJECTS</p>
          </li>
          <li
            onClick={() => {
              skillRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p>02</p>
            <div className="rule">
              <hr />
            </div>

            <p>SKILLS</p>
          </li>
        </ul>
        <div className="mail">
          <GrMail />
          <a href="mailto:adenusiadetayo@gmail.com">AdenusiAdetayo@gmail.com</a>
        </div>
      </div>
      <div className="links">
        <div className="profile__img">
          <div className="img__container">
            <img src={profile__img} alt="tayor" />
          </div>
        </div>
        <a href="/Adetayo.pdf" target="_blank" rel="noreferrer">
          Resume <FiExternalLink />
        </a>
        <a href="https://github.com/tayor99" target="_blank" rel="noreferrer">
          GitHub <FiExternalLink />
        </a>
        <a
          href="https://www.linkedin.com/in/adetayo-adenusi/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FiExternalLink />
        </a>
      </div>
    </Wrapper>
  );
};

export default Profile;
