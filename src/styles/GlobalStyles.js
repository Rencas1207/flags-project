import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root{
      --black: #111517;
      --white: hsl(0, 0%, 100%);
      --dark-gray: hsl(0, 0%, 52%);
      --dark-blue: hsl(209, 23%, 22%);
      --very-light-gray: hsl(0, 0%, 98%);
      --very-dark-blue-2: hsl(207, 26%, 17%)
      --very-dark-blue-1: hsl(200, 15%, 8%)
   }
   *, *::after, *::before{
      box-sizing: border-box;
   }
   body{
      margin: 0;
      padding: 0;
      font-family: 'Nunito Sans', sans-serif;
      background-color: var(--very-light-gray);
   }
   html {
      box-sizing: border-box;
      font-size: 62.5%;
   }
   img {
      max-width: 100%;
   }
   h1, h2, h3{
      margin: 0;
      padding: 0;
      font-size: 1.8rem;
   }
   p{
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
   }
`;
