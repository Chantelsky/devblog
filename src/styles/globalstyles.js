import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

 * {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
 }

 body {
     font-size: 1rem;
     font-family: 'Montserrat', sans-serif;
 }

 ol,
ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
}
`

export default GlobalStyle;