import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import { Wrapper } from "./Home.style";

const Home = () => {
  return (
    <Wrapper>
      <div className="home__container">
        <Profile />
        <Projects />
      </div>
    </Wrapper>
  );
};

export default Home;
