import React from "react";

import { useSelector } from "react-redux";
import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import Search from "../components/molecule/Search";
// import SubPageLayout from '../components/layouts/SubPageLayout';
import PostGroup from "../components/organism/PostGroup";
import NoticeList from "../components/organism/NoticeList";

const Home = () => {
  const { notices } = useSelector((state) => state.notice);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <MainPageLayout>
      <NoticeList notices={notices} />
      {/* <PostGroup title="인기게시글" posts={mainPosts} /> */}
      <PostGroup
        title="새로운 게시글"
        posts={mainPosts}
        shwoCategory={true}
        showSearch={true}
      />
    </MainPageLayout>
  );
};

export default Home;
