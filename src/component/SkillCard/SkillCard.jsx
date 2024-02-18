import { Wrapper } from "./SkillCard.style";

const SkillCard = ({ header, skills }) => {
  return (
    <Wrapper>
      <h1>{header} :</h1>
      <div className="skill_cardContainer">
        {skills.map((skill) => {
          return <h2>{skill}</h2>;
        })}
      </div>
    </Wrapper>
  );
};

export default SkillCard;
