import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import Avatar from "react-avatar";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderStyles from "./Styles";
import { logoutRequestAction } from "../../reducers/user";

const Header = () => {
  const dispatch = useDispatch();

  const { me, logOutLoading } = useSelector((state) => state.user);

  const onClickLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <HeaderStyles>
      <Link href="/">
        <a>Eunwk SNS</a>
      </Link>
      <Link href="/user/1">
        <a>프로필</a>
      </Link>
      <Link href="/post/1">
        <a>게시글상세</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
      {me ? (
        <>
          <Button onClick={onClickLogout} loading={logOutLoading}>
            로그아웃
          </Button>
          <Avatar name="Ek" size="40" shape="circle" />
        </>
      ) : (
        <Link href="/login">
          <a>로그인</a>
        </Link>
      )}
    </HeaderStyles>
  );
};

// Header.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Header;
