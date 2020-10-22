import React from 'react';
import { Global, css } from '@emotion/core';
import { rgba } from 'emotion-rgba';

export const colors = {
  white: '#fff',
  light: '#f8f9fa',
  gray: '#343a40',
  darkGray: '#1a1c20',
  deepDarkGray: '#404040',
  green: '#4caf50',
  blueShade1: '#215973',
  blueShade2: '#6fadc6',
  blueShade3: '#d1e1e9',
  overlayDark: rgba('#000000', 0.6),
  overlayLight: rgba('#FFFFFF', 0.6),
  shadowDark: rgba('#96aab4', 0.5),
  shadowLight: rgba('#96aab4', 0.9),
  backdrop: rgba('#000000', 0.5),
};

export const darkTheme = {
  colors: {
    background: colors.darkGray,
    menuBackground: colors.blueShade1,
    footerBackground: colors.gray,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
    imageOverlay: colors.overlayDark,
    postShadow: colors.shadowDark,
    green: colors.green,
    backdrop: colors.backdrop,
  },
};

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    footerBackground: colors.light,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGray,
    imageOverlay: colors.overlayLight,
    postShadow: colors.shadowLight,
    green: colors.green,
    backdrop: colors.backdrop,
  },
};

export const GlobalStyles = (props) => (
  <Global
    {...props}
    styles={css`
      * {
        box-sizing: border-box;
        outline: none;
      }
      :root {
        --max-width: 1200px;
      }

      html,
      body {
        margin: 0 auto;
        height: 100%;
        max-width: var(--max-width);
      }

      body {
        background: ${props.theme.colors.background};
        color: ${props.theme.colors.textSecondary};
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', Catamaran, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        font-style: normal;
        margin: 0 auto;
        transition: all 0.5s ease;
        @media (min-width: 600px) {
          padding: 0 20px 80px 20px;
        }
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      main {
        display: block;
        margin: 40px auto;
        max-width: 960px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${props.theme.colors.textMain};
        font-family: 'Muli Black', Arial, Helvetica, sans-serif;
        transition: all 0.5s ease;
        letter-spacing: 1px;
      }

      p {
        font-size: 0.9rem;
        line-height: 1.2;

        @media (min-width: 600px) {
          font-size: 1.1rem;
          line-height: 1.5;
        }
      }

      h2 {
        font-size: 1.5rem;
        letter-spacing: 1.6px;

        @media (min-width: 600px) {
          font-size: 2rem;
        }
      }

      h3 {
        font-size: 1.3rem;
        letter-spacing: 1.5px;

        @media (min-width: 600px) {
          font-size: 1.5rem;
        }
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export const cardStyles = (props) => css`
  padding: 0;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 7px 30px -10px ${props.theme.colors.postShadow};
  -moz-box-shadow: 0 7px 30px -10px ${props.theme.colors.postShadow};
  box-shadow: 0 7px 30px -10px ${props.theme.colors.postShadow};
  a {
    :hover {
      opacity: 0.7;
    }
  }
`;

export const buttonStyles = () => css`
  cursor: pointer;
  transition: all 0.3s ease;
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  :hover:not([disabled]) {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
  }
`;
