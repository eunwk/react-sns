import React, { useCallback, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Tag from "../../atoms/Tag";
import Styles from "./Styles";

const tags = ["수중랜턴", "해루질", "진진이", "문어"];

const Search = () => {
  const [isSelectedTag, setIsSelectedTag] = useState(false);
  //   const dispatch = useDispatch();
  //   const { me, logOutLoading } = useSelector((state) => state.user);

  //   const onLogOut = useCallback(() => {
  //     dispatch(logoutRequestAction());
  //   }, []);

  const onSelectTag = useCallback(() => {
    setIsSelectedTag((prev) => !prev);
  }, [isSelectedTag]);

  return (
    <Styles>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
        <Button variant="outline-secondary" id="button-addon1">
          Button
        </Button>
      </InputGroup>
      <div class="tags">
        {tags.map((v, i) => (
          <Tag tag={v} key={i} />
        ))}
      </div>
    </Styles>
  );
};

export default Search;
