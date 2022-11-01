import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const color = {
  bgNormal: "#000000",
  fontNormal: "#afafaf",
  fontLight: "#f1f1f1",
  fontDark: "#555555",
  primary: "orange",
};

export const font = {
  sizeNormal: "16px",
  sizeSmall: "14px",
  sizeXSmall: "12px",
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
    text-algin: left;
    font-size: 16px;
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    & footer {
      margin-top: auto;
    }
  }

  .ant-form {
    color: ${color.fontNormal};
  }

  // 부트스트랩 디자인 커스터마이징
  .form-control,
  .btn {
    border-radius: 2px;
  }
`;

export const LoginFormStyles = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0;
  & h1 {
    text-align: center;
    margin-bottom: 60px;
  }
  & form button[type="submit"] {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const TextLinkGroupStyles = styled.div`
  & a {
    padding: 0px 10px;
    display: inline-block;
    position: relative;
    &:first-child {
      padding-left: 0;
    }
    &::after {
      content: "";
      width: 1px;
      height: 50%;
      position: absolute;
      top: 25%;
      right: 0px;
      background: #eee;
    }
    &:last-child::after {
      content: none;
    }
  }
`;

export default GlobalStyles;
