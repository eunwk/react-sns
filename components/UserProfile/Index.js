import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Avatar from "react-avatar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const onSubmit = useCallback(() => {
    console.log("UserProfile onSubmit");
  }, []);

  return (
    <div>
      <Avatar name="Wim Mostmans" size="150" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="닉네임" />
        </Form.Group>
        <Button variant="primary" type="submit">
          수정
        </Button>
      </Form>
      <div>게시글 {me?.Posts.length}</div>
      <div>팔로잉 {me?.Followings.length}</div>
      <div>팔로워 {me?.Followers.length}</div>
    </div>
  );
};

export default UserProfile;
