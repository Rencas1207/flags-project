import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root{
      --very-light-gray: rgba(250, 250, 250);
      --black: #111517;
      --white: #ffffff;
   }
   *, *::after, *::before{
      box-sizing: border-box;
   }
   body{
      margin: 0;
      padding: 0;
      font-family: 'Nunito Sans', sans-serif;
   }
   html {
      box-sizing: border-box;
      font-size: 62.5%;
   }
   main{
      background-color: var(--very-light-gray);
      color: var(--black);
      min-height: 100vh;
   }

   img {
      max-width: 100%;
   }
   h1, h2, h3{
      margin: 0;
      padding: 0;
   }
   h1{
      font-size: 2rem;
   }
   h2{
      font-size: 1.6rem;
   }
   h3{
      font-size: 1.6rem;
   }
   p{
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
   }

   .is-dark-mode {
      --very-light-gray: #202D36;
      --black: #ffffff;
      --white: rgb(43, 57, 69);
   }

   .is-light-mode {
      --very-light-gray: rgba(250, 250, 250);
      --black: #111517;
      --white: #ffffff; 
   }

   @media (prefers-color-scheme: dark) {
      :root {
         --black: #ffffff;
         --white: rgb(43, 57, 69);
         --very-light-gray: #202D36;
      }
   }
`;
