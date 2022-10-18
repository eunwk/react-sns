import React, { useCallback } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import Avatar from "react-avatar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FollowList from "../molecule/FollowList";

const followerList = [
  { nickname: "제로초" },
  { nickname: "바보" },
  { nickname: "노드버드오피셜" },
];
const followingList = [
  { nickname: "제로초" },
  { nickname: "바보" },
  { nickname: "노드버드오피셜" },
];

const UserProfile = () => {
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

      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </div>
  );
};

export default UserProfile;
