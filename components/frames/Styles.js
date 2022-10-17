import styled from '@emotion/styled';
import { color, font } from '../../GlobalStyles';

const HeaderStyles = styled.header`
    & nav.bg-light{
        background  : transparent !important;
        & a {
            color   : ${color.fontNormal}
        }
    }
    
`;


export default HeaderStyles;

