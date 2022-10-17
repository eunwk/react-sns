import React from "react";
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderStyles from './Styles';

const Header = ({ }) => {
    return (
        <HeaderStyles>
            <Navbar bg="light" >
                <Navbar.Brand href="/">Eunwk SNS</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/user/1">프로필</Nav.Link>
                    <Nav.Link href="/post/1">게시글상세</Nav.Link>
                    <Nav.Link href="/signup">회원가입</Nav.Link>
                    <Nav.Link href="/login">로그인</Nav.Link>
                    <Avatar name="Ek" size="40" shape="circle" />
                </Nav>
                
            </Navbar>
        </HeaderStyles>
    )
};

// Header.propTypes = {
//     children: PropTypes.node.isRequired,
// }


export default Header;