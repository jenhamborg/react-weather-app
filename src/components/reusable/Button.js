import React, { useState } from "react";
import PropTypes from "prop-types";

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};
