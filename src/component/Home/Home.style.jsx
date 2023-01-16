import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .home__container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 90px;
    width: 85%;
    gap: 50px;
  }
  @media (max-width: 1440px) {
    .home__container {
      width: 95%;
    }
  }
  @media (max-width: 1290px) {
    .home__container {
      gap: 20px !important;
    }
  }
  @media (max-width: 1200px) {
    .home__container {
      flex-direction: column;
    }
  }
`;
