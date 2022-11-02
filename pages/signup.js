import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Form, Input, Checkbox, Button } from "antd";
import Link from "next/link";
import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import useInput from "../hooks/useInput";
import { LoginFormStyles, TextLinkGroupStyles } from "../GlobalStyles";
import { SIGN_UP_REQUEST } from "../reducers/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/signup-suceess");
    }
  }, [signUpDone]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      // 약관동의를 하지 않은 경우
      if (!term) {
        return setTermError(true);
      }
      console.log(email, nickname, password);
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, nickname, password },
      });
    },
    [email, password, passwordCheck, term]
  );

  return (
    <MainPageLayout>
      <Head>
        <title>회원가입 | 커뮤니티 이름</title>
      </Head>
      <LoginFormStyles>
        <h1>회원가입</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="user-email">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              placeholder="Enter email"
              onChange={onChangeEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="user-nickname">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              type="text"
              value={nickname}
              required
              placeholder="Enter NickName"
              onChange={onChangeNickname}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="user-password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              placeholder="Password"
              onChange={onChangePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="user-password-check">
            <Form.Label>비밀번호확인</Form.Label>
            <Form.Control
              type="password"
              value={passwordCheck}
              required
              placeholder="Password"
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-term">
            <Form.Check
              type="checkbox"
              label="약관에 동의합니다."
              checked={term}
              onChange={onChangeTerm}
            />
            {termError && (
              <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </Form>
      </LoginFormStyles>
    </MainPageLayout>
  );
};

export default SignUp;
