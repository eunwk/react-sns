import React from "react";
import PropTypes from 'prop-types';
import { MainPageLayoutStyles } from './Styles';




const AppLayout = ({ children }) => {
    return (
        <MainPageLayoutStyles>
            {children}
        </MainPageLayoutStyles>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}


export default AppLayout;