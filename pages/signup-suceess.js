import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import MessageBox from "../components/molecule/MessageBox";

const SignUpSuccess = () => {
  return (
    <MainPageLayout>
      <Head>
        <title>회원가입완료 | 커뮤니티 이름</title>
      </Head>
      <MessageBox
        title="회원가입완료"
        description="가입해주셔서 감사합니다."
        buttons={
          <Link href="/">
            <a className="btn btn-primary">홈으로</a>
          </Link>
        }
      />
    </MainPageLayout>
  );
};

export default SignUpSuccess;
