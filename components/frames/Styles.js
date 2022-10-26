import styled from "@emotion/styled";
import { color, font } from "../../GlobalStyles";

const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${color.bgNormal};
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    & a {
      color: ${color.fontNormal};
      font-weight: bold;
      font-size: 15px;
    }
    & .menu-group {
      display: flex;
      & > a:not(:last-child) {
        padding: 0 10px;
      }
    }
  }
`;

export const FooterStyles = styled.footer`
  background: #222;
  text-align: center;
  padding: 20px 15px;
`;

export default HeaderStyles;
