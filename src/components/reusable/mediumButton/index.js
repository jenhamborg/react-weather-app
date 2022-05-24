import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = styled.button`
  background-color: #05090f;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  height: 50px;
  margin: 1rem;
  font-size: 1.5rem;
  width: 200px;
`;

export default function ButtonMedium({ handleClick, text }) {
  return <Button onClick={handleClick}>{text}</Button>;
}

ButtonMedium.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
