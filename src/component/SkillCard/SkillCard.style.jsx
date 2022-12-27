import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--clr-white);
  }
  .skill_cardContainer {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  h2 {
    color: var(--clr-white);
    font-weight: 600;
    font-size: 0.9rem;
    background-color: var(--clr-black-3);
    padding: 13px 40px;
    transition: font-size 0.3s;
    &:hover {
      font-weight: 700;
      font-size: 1.2rem;
      /* padding: 15px 42px; */
    }
  }
`;
