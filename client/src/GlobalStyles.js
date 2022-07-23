import React from "react";
import { Global, css } from "@emotion/core";
import Montserrat from "./assets/fonts/Montserrat.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        :root {
          --bg-main-color:#EFEFEF;
          --text-color-normal: #112B3C;
          --text-color-attention: #cc5745;
          --text-color-danger: #cc5745;
          --card-background-color: #B4E197;
          --navigation-main-color: #112B3C;
          --link-active-color: #fff;
          --link-inactive-color: #fca567;
          --button-proceed-color: #112B3C;
          --button-danger-color: #cc5745;
          --button-main-color: #fff;
          --button-ctacall-color: #cc5745;
          --inputfield-attention-color: #cc5745;
          --inputfield-text-color: #112B3C;
          --text-color-dark: #112B3C;
          --main-elements-shadow: 3px 3px 6px #00000029;
        }
        html {
          font-size: 14px;
          background-color: var(--bg-main-color);
          color: var(--text-color-normal);
          @font-face {
            src: url(${Montserrat}) format("truetype");
            font-family: "Montserrat";
          }
          font-family: "Montserrat";
        }
        #root {
          height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 5% 90% 5%;
          grid-template-rows: 10vh 83vh 7vh;
          overflow: hidden;
        }
        body {
          margin: 0;
          padding: 0;
        }

        button {
          font-family: "Montserrat";
          outline: none;
          cursor: pointer;
          margin: 0;
        }
        input {
          outline: none;
          font-family: "Montserrat";
        }
        a {
          text-decoration: none;
        }
        tspan {
          font-size: 0.5rem;
        }
      `}
    />
  );
};
export default GlobalStyles;
