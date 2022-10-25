import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import Search from "../components/molecule/Search";
// import SubPageLayout from '../components/layouts/SubPageLayout';
import PostGroup from "../components/organism/PostGroup";
import NoticeList from "../components/organism/NoticeList";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  const dispatch = useDispatch();
  const { notices } = useSelector((state) => state.notice);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

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
