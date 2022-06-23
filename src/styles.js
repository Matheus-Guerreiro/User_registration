import styled from "styled-components";
import Background from "./assets/Background_1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
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
  border-radius: 61px 61px 0px 0px;

  height: 100vh;
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

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.408px;

  padding-left: 21px;

  color: #eeeeee;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  width: 342px;
  height: 58px;

  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 28px;

  padding-left: 20px;
  margin-bottom: 34px;

  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.5;
  }
`;
