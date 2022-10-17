import React from "react";
import shortId from "shortid";
import { faker } from "@faker-js/faker";

import MainPageLayout from "../components/pageLayouts/MainPageLayout";
import Search from "../components/molecule/Search";
// import SubPageLayout from '../components/layouts/SubPageLayout';
import PostGroup from "../components/organism/PostGroup";
import NoticeList from "../components/organism/NoticeList";

export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      title: faker.lorem.sentence(5),
      content: faker.lorem.lines(3),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
    }));

export const generateNotice = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.lorem.sentence(5),
      creator: faker.name.fullName(),
      createAt: faker.date.recent().toLocaleString(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
    }));

const Home = () => {
  const posts1 = generateDummyPost(3);
  const posts2 = generateDummyPost(12);
  const notices = generateNotice(5);

  return (
    <MainPageLayout>
      <NoticeList notices={notices} />
      <PostGroup title="인기게시글" posts={posts1} />
      <PostGroup
        title="새로운 게시글"
        posts={posts2}
        shwoCategory={true}
        showSearch={true}
      />
    </MainPageLayout>
  );
};

export default Home;
