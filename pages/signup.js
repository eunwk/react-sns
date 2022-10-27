import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { Form, Input, Checkbox, Button } from "antd";
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

  const onSubmit = useCallback(() => {
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
  }, [email, password, passwordCheck, term]);

  return (
    <MainPageLayout>
      <Head>
        <title>회원가입 | 커뮤니티 이름</title>
      </Head>
      <LoginFormStyles>
        <h1>회원가입</h1>
        {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호확인</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">회원가입</Button>
            </Form> */}
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <Input
              name="user-email"
              value={email}
              type="email"
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              약관에 동의합니다.
            </Checkbox>
            {termError && (
              <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
            )}
          </div>
          <div>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>
              가입
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
          <Link href="#">
            <a>회원가입</a>
          </Link>
        </div>
        <div className="other-login">
          <h2>간편회원가입</h2>
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
      </LoginFormStyles>
    </MainPageLayout>
  );
};

export default SignUp;
