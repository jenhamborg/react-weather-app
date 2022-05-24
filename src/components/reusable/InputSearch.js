import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.div`
  align-items: center;
  margin-top: 0.5rem;
  position: relative;
  padding: 1rem;
  .input-container {
    position: relative;
  }
  .input-error-message {
    font-size: 1.25rem;
  }
  input {
    color: #f8f8f8;
    padding: 0.7rem 1.25rem;
    font-size: 1.35rem;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    height: 50px;
    ::placeholder {
      color: #f8f8f8;
      font-size: 1.25rem;
    }
  }
`;

function InputSearch({
  errorMessage,
  keyFunction,
  label,
  maxCharacter,
  placeholder,
  userValue,
  userValueSetter,
  type,
}) {
  return (
    <Input>
      <div className="input-container">
        <input
          data-testid="input"
          aria-labelledby={label}
          type={type}
          label={label}
          maxLength={maxCharacter}
          onKeyPress={keyFunction}
          onChange={(e) => userValueSetter(e.target.value)}
          value={userValue}
          placeholder={placeholder}
        />
      </div>
      <div className="input-error-message">{errorMessage && errorMessage}</div>
    </Input>
  );
}

export default InputSearch;

InputSearch.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  keyFunction: PropTypes.func,
  maxCharacter: PropTypes.string,
  placeholder: PropTypes.string,
  setErrorMessage: PropTypes.func,
  userValue: PropTypes.string,
  userValueSetter: PropTypes.func,
  userInput: PropTypes.func,
  type: PropTypes.string,
};
