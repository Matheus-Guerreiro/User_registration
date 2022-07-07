import styled from "styled-components";
import Background from "../../assets/Background_2.svg";


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 83px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 30px;

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
  border-radius: 61px 61px 0px 0px;

  height: 100%;
  min-height: 100vh;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 40px;

  margin-bottom: 50px;

  text-align: center;

  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 50px;

  background: transparent;
  border-radius: 14px;
  border: 1px solid #ffffff;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: rotate(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  width: 342px;
  height: 58px;
  margin-top: 20px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
