import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
 
 * {
     box-sizing: border-box;
 }

 body {
     font-size: 1rem;
     font-family: 'Montserrat', sans-serif; 
 }
`

export default GlobalStyle;