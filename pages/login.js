import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginFormStyles, TextLinkGroupStyles } from "../GlobalStyles";
// import { Form, Input, Button } from "antd";
import Link from "next/link";
import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";
import Router from "next/router";
import styled from "@emotion/styled";

const OtherLoginStyles = styled.div`
  margin-top: 30px;
  & h2 {
    text-align: center;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &::before,
    &::after {
      content: "";
      height: 1px;
      width: 1px;
      background: #afafaf;
      display: inline-block;
      flex: 1 1 auto;
    }
    &::before {
      margin-right: 10px;
    }
    &::after {
      margin-left: 10px;
    }
  }

  & a {
    display: block;
    border: 1px solid #afafaf;
    text-align: center;
    border-radius: 2px;
    line-height: 36px;
    background: rgba(255, 255, 255, 0.05);
    &:hover {
      border: 1px solid #f1f1f1;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { logInLoading, me } = useSelector((state) => state.user);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log("onSubmitForm");
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password]
  );

  useEffect(() => {
    if (me) {
      Router.replace("/");
    }
  }, [me]);

  return (
    <MainPageLayout>
      <Head>
        <title>로그인 | 커뮤니티 이름</title>
      </Head>
      <LoginFormStyles>
        <h1>Login</h1>

        <Form onSubmit={onSubmitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>이메일</Form.Label> */}
            <Form.Control
              name="user-email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={onChangeEmail}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>비밀번호</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              name="user-password"
              onChange={onChangePassword}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="이메일 저장" />
          </Form.Group>
          <Button variant="primary" type="submit" loading={logInLoading}>
            로그인
          </Button>
        </Form>

        <TextLinkGroupStyles>
          <Link href="#">
            <a>아이디찾기</a>
          </Link>
          <Link href="#">
            <a>비밀번호 찾기</a>
          </Link>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </TextLinkGroupStyles>

        <OtherLoginStyles>
          <h2>간편로그인</h2>
          <Link href="#">
            <a>카카오 계정으로 로그인</a>
          </Link>
          <Link href="#">
            <a>구글 계정으로 로그인</a>
          </Link>
        </OtherLoginStyles>
      </LoginFormStyles>

      {/* <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" value={email} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="아이디 저장" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form> */}
    </MainPageLayout>
  );
};

export default Login;
