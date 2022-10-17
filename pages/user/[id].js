// 특정 사용자의 게시글 목록 (index 페이지와 거의 동일)
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserProfileCard from '../../components/UserProfile';

import SubPageLayout from '../../components/pageLayouts/SubPageLayout';

const User = () => {

  return (
    <SubPageLayout>
      <UserProfileCard />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="about" title="About">
          <div>
            <p>Bio</p>
            <p>Aditya Oberai is a Developer Advocate at Appwrite and an avid tech community and hackathon enthusiast. Having worked with various technologies such as .NET, Microsoft Azure, etc., he has spent the last 3 years empowering tech communities.</p>
          </div>
        </Tab>
        <Tab eventKey="history" title="History">
          <div>History</div>
        </Tab>
        <Tab eventKey="following" title="Following">
          <div>텝페이지3</div>
        </Tab>
        <Tab eventKey="follower" title="Follower">
          <div>텝페이지3</div>
        </Tab>
        <Tab eventKey="account" title="Account">
          <div>나의정보</div>
        </Tab>
      </Tabs>
    </SubPageLayout>
  );
};

export default User;
