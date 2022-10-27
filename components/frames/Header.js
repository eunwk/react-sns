import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import Button from "react-bootstrap/Button";
import HeaderStyles from "./Styles";
import { logoutRequestAction } from "../../reducers/user";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";

const Header = () => {
  const dispatch = useDispatch();

  const { me, logOutLoading } = useSelector((state) => state.user);

  const onClickLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">닉네임</Popover.Header>
      <Popover.Body>
        <ListGroup>
          <ListGroup.Item>
            <Link href="/user/1">
              <a>프로필</a>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/user/1">
              <a>내 게시글</a>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button onClick={onClickLogout}>로그아웃</Button>
          </ListGroup.Item>
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  return (
    <HeaderStyles>
      <nav>
        <Link href="/">
          <a>Eunwk SNS</a>
        </Link>
        <div className="menu-group">
          <Link href="/post/1">
            <a>게시글상세</a>
          </Link>

          {me ? (
            <OverlayTrigger
              trigger="click"
              placement="bottom-end"
              overlay={popover}
              rootClose
            >
              <Avatar name="Ek" size="40" shape="circle" />
            </OverlayTrigger>
          ) : (
            <>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </>
          )}
        </div>
      </nav>
    </HeaderStyles>
  );
};

// Header.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Header;
