import React from "react";
import styled from "styled-components";
import { API_ROOT } from "../constants/environment";

const Title = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <>
      <Title>{API_ROOT}</Title>
    </>
  );
};

export default App;
