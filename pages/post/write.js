import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPageLayout from "../../components/pageLayouts/MainPageLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PostForm = () => {
  const onSubmit = (e) => {
    e.prevetDefault();
    console.log("onSubmit");
  };
  return (
    <MainPageLayout>
      <h1>글쓰기</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="category">카테고리</Form.Label>
          <Form.Select id="category">
            <option>공지사항</option>
            <option>자유게시판</option>
            <option>질문/답변</option>
            <option>기타</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="postTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={15} />
        </Form.Group>
        <div className="btn-area">
          <Button>취소</Button>
          <Button type="submit">저장</Button>
        </div>
      </Form>
    </MainPageLayout>
  );
};

export default PostForm;
