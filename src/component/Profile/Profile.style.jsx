import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;

  .profile {
    width: 100%;
    > h1 {
      color: var(--clr-white);
      letter-spacing: 3.5px;
      font-weight: 700;
      font-size: 3.4rem;
      margin-bottom: 50px;
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
    > P {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--clr-white);
      letter-spacing: 1.4px;
    }
  }
  .links {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 45px;
    .img__container {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    span {
      color: var(--clr-white);
      font-size: 0.95rem;
      font-family: 700;
    }
  }
  .skill {
    margin-top: 40px;
  }
`;
