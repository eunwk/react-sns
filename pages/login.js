import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";
import Router from "next/router";

const Login = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { isLoggedIn } = useSelector((state) => state.user);

  const onSubmitForm = useCallback(() => {
    console.log("onSubmitForm");
    dispatch(loginAction({ email, password }));
  }, [email, password]);

  useEffect(() => {
    if (isLoggedIn) {
      Router.replace("/");
    }
  }, [isLoggedIn]);

  return (
    <MainPageLayout>
      <Head>
        <title>로그인 | 커뮤니티 이름</title>
      </Head>
      <h1>로그인</h1>
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

      <Form onFinish={onSubmitForm} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <Input
            name="user-email"
            value={email}
            type="email"
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
        </div>
      </Form>
      <div>
        <Link href="#">
          <a>아이디찾기</a>
        </Link>
      </div>
      <div>
        <Link href="#">
          <a>비밀번호 찾기</a>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      <div className="other-login">
        <h2>간편로그인</h2>
        <Link href="#">
          <a>카카오</a>
        </Link>
        <Link href="#">
          <a>구글</a>
        </Link>
        <Link href="#">
          <a>깃허브</a>
        </Link>
        <Link href="#">
          <a>페이스북</a>
        </Link>
      </div>
    </MainPageLayout>
  );
};

export default Login;
