import React from "react";
import PropTypes from 'prop-types';
import HeaderStyles from './Styles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({ }) => {
    return (
        <HeaderStyles>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Eunwk SNS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/signup">회원가입</Nav.Link>
                        <Nav.Link href="/login">로그인</Nav.Link>
                        <Nav.Link href="/user/1">프로필</Nav.Link>
                        <Nav.Link href="/post/1">게시글상세</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderStyles>
    )
};

// Header.propTypes = {
//     children: PropTypes.node.isRequired,
// }


export default Header;