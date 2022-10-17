import React from "react";
import PropTypes from 'prop-types';
import { SubPageLayoutStyles } from './Styles';




const AppLayout = ({ children }) => {
    return (
        <SubPageLayoutStyles>
            {children}
        </SubPageLayoutStyles>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}


export default AppLayout;