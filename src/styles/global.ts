import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
}

a{
    color:  #000;
}

body{
    font-size: 62.5%;
    background-color: #b4adea;
    color: #f5fbef;

    min-height: 100vh;
}
`