import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import MainPageLayout from "../components/pageLayouts/MainPageLayout";

const SignUpSuccess = () => {
  return (
    <MainPageLayout>
      <Head>
        <title>회원가입완료 | 커뮤니티 이름</title>
      </Head>
      <h1>회원가입완료</h1>
      <Link href="/login">
        <a>로그인</a>
      </Link>
    </MainPageLayout>
  );
};

export default SignUpSuccess;
