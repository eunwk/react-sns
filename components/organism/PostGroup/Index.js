import React, { useCallback, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Tag from "../../atoms/Tag";
import Card from "react-bootstrap/Card";
import Styles from "./Styles";
import Search from "../../molecule/Search";

const PostGroup = ({ title, posts, shwoCategory, showSearch }) => {
  // console.log("posts", posts);
  return (
    <Styles>
      <div className="tit-area">
        <h1>{title}</h1>
        {shwoCategory && (
          <div className="extra">
            <Form.Select>
              <option>전체보기</option>
              <option>공지사항</option>
              <option>가입인사</option>
              <option>후기</option>
              <option>잡담</option>
              <option>질문답변</option>
            </Form.Select>
          </div>
        )}
      </div>
      {showSearch && <Search />}

      <div className="list-area">
        {posts.map((v) => (
          <Card key={v.id}>
            <Card.Img variant="top" src={v.Images[0].src} />
            <Card.Body>
              <Card.Title>{v.title}</Card.Title>
              <Card.Text>{v.content}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Styles>
  );
};

PostGroup.propTypes = {
  title: PropTypes.string.isRequired,
  shwoCategory: PropTypes.bool,
  showSearch: PropTypes.bool,
};

PostGroup.defaultProps = {
  shwoCategory: false,
  showSearch: false,
};

export default PostGroup;
