import React from "react";
import PropTypes from 'prop-types';
import { MainLayoutStyles, SubLayoutStyles } from './AppLayoutStyles';
import { Global } from "@emotion/react";
import GlobalStyles from '../GlobalStyles';
// const MainLayoutStyles = styled.div`
//     & {
//         border: 1px solid red;
//     }
// `;




const AppLayout = ({ pageType, children }) => {
    return (
        <>
            <Global styles={GlobalStyles} />
            {
                pageType === 'main' ?
                    <MainLayoutStyles>
                        <div>메인화면 레이아웃</div>
                        {children}
                    </MainLayoutStyles> :
                    <SubLayoutStyles>
                        <div>서브화면 레이아웃</div>
                        {children}
                    </SubLayoutStyles>
            }
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    pageType: PropTypes.string,
}

AppLayout.defaultProps = {
    pageType: "sub", // [sub, main]
}
export default AppLayout;