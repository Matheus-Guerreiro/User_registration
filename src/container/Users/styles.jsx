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

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 40px;

  margin-bottom: 50px;

  text-align: center;

  color: #ffffff;
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
