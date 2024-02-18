import { Wrapper } from "./Profile.style";
import { GrMail } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import profile__img from "../../assets/1.jpg";
import { TypeAnimation } from "react-type-animation";
import ThemeToggle from "../Theme/ThemeToggle";

const Profile = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="profile">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Hello, I am Bright Nwachukwu.",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Hello, I am a Tech Educator",
            1000,
            "Hello, I am a Fictional Story Writer",
            1000,
          ]}
          wrapper="h1"
          speed={4}
          style={{
            display: "inline-block",
            letterSpacing: "3.5px",
            fontWeight: "700",
            fontSize: "3rem",
            marginBottom: "50px",
          }}
          repeat={Infinity}
        />
        <p>
          A Front-end developer with a passion for building beautiful and fast
          web applications. Proficient in HTML, CSS, JavaScript, Next.js and
          TypeScript with working experience using modern libraries and
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
          <a href="mailto:nbright239@gmail.com">nbright239@gmail.com</a>
        </div>
      </div>
      <div className="links">
        <div className="profile__img">
          <div className="img__container">
            <img src={profile__img} alt="bright" />
          </div>
        </div>
        <a href="/BrightNwachukwuResume.pdf" target="_blank" rel="noreferrer">
          Resume <FiExternalLink />
        </a>
        <a
          href="https://github.com/Macbright007"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FiExternalLink />
        </a>
        <a
          href="https://www.linkedin.com/in/bright-nwachukwu-928476187/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FiExternalLink />
        </a>

        <ThemeToggle />
      </div>
    </Wrapper>
  );
};

export default Profile;
