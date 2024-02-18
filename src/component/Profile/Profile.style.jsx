import styled from "styled-components";
// import profile__img from "../../assets/1.jpg";

export const Wrapper = styled.div`
  width: 45%;
  position: sticky;
  height: 100vh;
  top: 90px;

  .profile {
    width: 100%;
    > h1 {
      // color: var(--clr-white);
      background: linear-gradient(to right, #4c4c4c, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    > p {
      color: var(--clr-black-2);
      line-height: 1.5;
      font-size: 0.95rem;
      span {
        color: var(--clr-white);
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
      }
    }
    ul {
      margin-top: 50px;
      list-style: none;
      li {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        align-items: baseline;
        cursor: pointer;

        p {
          color: var(--clr-black-2);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 1s;
        }
        hr {
          width: 30px;
          border: none;
          border-bottom: 1px solid var(--clr-black-2);
          transition: all 1s;
        }
        &:hover {
          p {
            color: var(--clr-white);
          }
          hr {
            width: 80px;
            border-bottom: 1px solid var(--clr-white);
          }
        }
      }
    }
  }
  .mail {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 50px;
    cursor: pointer;
    > svg {
      font-size: 1.6rem;
      color: var(--clr-white);
    }
    > a {
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--clr-white);
      letter-spacing: 1.4px;
    }
  }
  .links {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 10px;
    margin-top: 45px;

    .img__container {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        // object-fit: cover;
      }
    }
    a {
      text-decoration: none;
      color: var(--clr-white);
      font-size: 0.95rem;
      font-family: 700;
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .skill {
    margin-top: 40px;
  }
  /* @media (max-width: 1290px) {
    width: 40%;
  } */
  @media (max-width: 1200px) {
    position: static;
    height: fit-content;
    width: 90%;
    margin: 0 auto !important;
    margin-bottom: 40px !important;

    .profile {
      > ul {
        display: none;
      }
    }
  }
`;
