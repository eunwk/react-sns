// 특정 사용자의 게시글 목록 (index 페이지와 거의 동일)
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import UserProfileCard from "../../components/UserProfile";
import FollowList from "../../components/molecule/FollowList";
import SubPageLayout from "../../components/pageLayouts/SubPageLayout";

// const followerList = [
//   { nickname: "제로초" },
//   { nickname: "바보" },
//   { nickname: "노드버드오피셜" },
// ];
// const followingList = [
//   { nickname: "제로초" },
//   { nickname: "바보" },
//   { nickname: "노드버드오피셜" },
// ];

const User = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <SubPageLayout>
      <Head>
        <title>홍길동 | 커뮤니티 이름</title>
      </Head>
      <UserProfileCard />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="about" title="About">
          <div>
            <p>Bio</p>
            <p>
              Aditya Oberai is a Developer Advocate at Appwrite and an avid tech
              community and hackathon enthusiast. Having worked with various
              technologies such as .NET, Microsoft Azure, etc., he has spent the
              last 3 years empowering tech communities.
            </p>
          </div>
        </Tab>
        <Tab eventKey="history" title="History">
          <div>History</div>
        </Tab>
        <Tab eventKey="following" title="Following">
          <div>
            {me ? (
              <FollowList header="팔로잉 목록" data={me.Followings} />
            ) : (
              <div>팔로잉 목록이 없습니다.</div>
            )}
          </div>
        </Tab>
        <Tab eventKey="follower" title="Follower">
          <div>
            {me ? (
              <FollowList header="팔로워 목록" data={me.Followers} />
            ) : (
              <div>팔로워가 없습니다.</div>
            )}
          </div>
        </Tab>
        {me && (
          <Tab eventKey="account" title="Account">
            <div>나의정보</div>
          </Tab>
        )}
      </Tabs>
    </SubPageLayout>
  );
};

export default User;
