import styled from "styled-components";
import Background from "../../assets/Background_1.svg";



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
  margin-top: 30px;
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
  
  button{
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
