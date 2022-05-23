import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Input = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 75%;
  .input-container {
    position: relative;
  }
  input {
    color: #f8f8f8;
    padding: 0.7rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    height: 60px;
  }
  svg {
    position: absolute;
    top: 20%;
    right: 15px;
  }
`;

function InputSearch({
  id,
  errorMessage,
  keyFunction,
  label,
  maxCharacter,
  userValue,
  userValueSetter,
  type,
}) {
  return (
    <Input>
      <div className="input-container">
        <input
          type={type}
          id={id}
          data-testid={id}
          label={label}
          maxLength={maxCharacter}
          onKeyPress={keyFunction}
          onChange={(e) => userValueSetter(e.target.value)}
          value={userValue}
        />
        {/* <FontAwesomeIcon className="fa-2x" icon={faMagnifyingGlass} /> */}
      </div>
      <label htmlFor={id}>{!errorMessage ? label : errorMessage}</label>
    </Input>
  );
}

export default InputSearch;

InputSearch.propTypes = {
  id: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  keyFunction: PropTypes.func,
  maxCharacter: PropTypes.string,
  setErrorMessage: PropTypes.func,
  userValue: PropTypes.string,
  userValueSetter: PropTypes.func,
  userInput: PropTypes.func,
  type: PropTypes.string,
};
