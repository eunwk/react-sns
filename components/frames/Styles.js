import styled from "@emotion/styled";
import { color, font } from "../../GlobalStyles";

const HeaderStyles = styled.header`
  & nav {
    background: transparent !important;
    justify-content: space-between;
    & a {
      color: ${color.fontNormal};
    }
    & .navbar-toggler {
      background: #fff;
    }
    & .navbar-nav {
      flex-direction: row;
    }

    & .sb-avatar {
      margin-left: 15px;
    }
  }
`;

export const FooterStyles = styled.footer`
  background: #222;
  text-align: center;
  padding: 20px 15px;
`;

export default HeaderStyles;
