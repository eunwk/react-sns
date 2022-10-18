import { css } from "@emotion/react";

export const color = {
  bgNormal: "#000000",
  fontNormal: "#afafaf",
  fontLight: "#f1f1f1",
  fontDark: "#555555",
  primary: "orange",
};

export const font = {
  sizeNormal: "14px",
  sizeSmall: "12px",
  sizelarge: "18px",
};

const GlobalStyles = css`
  // reset
  p {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color.fontNormal};
  }
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  body {
    background-color: ${color.bgNormal};
    color: ${color.fontNormal};
  }
  a {
    color: ${color.fontNormal};
    text-decoration: none;
    transition: 0.2s color;
    &:hover {
      color: ${color.fontLight};
    }
  }

  .app-container {
    max-width: 1200px;
    padding: 0 15px 20px;
    margin: 0 auto;
    border: 1px solid red;
  }

  .ant-form {
    color: ${color.fontNormal};
  }
`;

export default GlobalStyles;
