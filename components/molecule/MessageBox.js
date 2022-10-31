import React, { useCallback, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";

import { MessageBoxStyles } from "./Styles";
import { AiFillCarryOut } from "react-icons/ai";
const MessageBox = ({ title, description, type, buttons }) => {
  console.log("buttons, ", buttons);

  return (
    <MessageBoxStyles>
      <AiFillCarryOut />
      {type}
      {/* <img src={} alt={type}/> */}
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      {buttons && buttons}
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
