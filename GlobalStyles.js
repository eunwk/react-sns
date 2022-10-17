import { css } from "@emotion/react";

export const color = {
    bgNormal: '#000000',
    fontNormal: '#afafaf',
    fontLight: '#f1f1f1',
    fontDark: '#555555',
    primary: 'orange',
}

export const font = {
    sizeNormal: '14px',
    sizeSmall: '12px',
    sizelarge: '18px',
}

const GlobalStyles = css`

    // reset
    p {margin-bottom: 0;}
    body {
        background-color : ${color.bgNormal};
        color : ${color.fontNormal};
    }

    .app-container {
        width: 1200px;
        margin: 0 auto;
        border: 1px solid red;
    }
`;




export default GlobalStyles;