import { useRef } from "react";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import { Wrapper } from "./Home.style";

const Home = () => {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  return (
    <Wrapper>
      <div className="home__container">
        <Profile projectRef={projectRef} skillRef={skillRef} />
        <Projects projectRef={projectRef} skillRef={skillRef} />
      </div>
    </Wrapper>
  );
};

export default Home;
