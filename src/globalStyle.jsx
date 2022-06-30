import { createGlobalStyle } from "styled-components";
import Background from "./assets/Background_1.svg";


export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background: url("${Background}");
    background-size: cover;
}



`;