import React, { useCallback, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";

import { MessageBoxStyles } from "./Styles";
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineReconciliation,
} from "react-icons/ai";
const MessageBox = ({ title, description, type, buttons }) => {
  console.log("buttons, ", buttons);

  const typeImg = (type) => {
    switch (type) {
      case "information":
        return <AiOutlineCheckCircle className="msg-img" />;
      case "error":
        return <AiOutlineCloseCircle className="msg-img" />;
      default:
        return <AiOutlineReconciliation className="msg-img" />;
    }
  };

  return (
    <MessageBoxStyles>
      {typeImg(type)}
      {/* <img src={} alt={type}/> */}
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {buttons && <div class="btn-area">{buttons}</div>}
    </MessageBoxStyles>
  );
};

MessageBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  buttons: PropTypes.node,
};

MessageBox.defaultProps = {
  title: null,
  description: null,
  type: "information", //information, complate, error
  buttons: null,
};

export default MessageBox;
