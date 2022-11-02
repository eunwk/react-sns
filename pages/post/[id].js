import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPageLayout from "../../components/pageLayouts/MainPageLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { faker } from "@faker-js/faker";

const Post = () => {
  const onSubmit = (e) => {
    e.prevetDefault();
    console.log("onSubmit");
  };
  return (
    <MainPageLayout>
      <h1>글제목</h1>
      <div>{faker.lorem.paragraph(100)}</div>
      <div className="btn-area">
        <Button variant="secondary">목록</Button>
        <Button variant="primary">수정</Button>
      </div>
    </MainPageLayout>
  );
};

export default Post;
