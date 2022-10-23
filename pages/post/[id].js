// 특정 사용자의 게시글 목록 (index 페이지와 거의 동일)
import React, { useEffect } from "react";
import CommentForm from "../../components/organism/CommentForm/Index";
// import Head from 'next/head';
// import Link from 'next/link';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import SubPageLayout from "../../components/pageLayouts/SubPageLayout";

const Post = () => {
  return (
    <SubPageLayout>
      <div>포스트 상세</div>
      <CommentForm />
    </SubPageLayout>
  );
};

export default Post;
