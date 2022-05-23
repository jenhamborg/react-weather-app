import React from "react";
import styled from "styled-components";
import MainWeather from "./components/views/mainWeather";

import Clouds from "./assets/images/clouds.jpg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.95));
  color: #ffffff;
  &:before {
    content: "";
    background: url(${Clouds}) no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const App = () => {
  return (
    <Container>
      <MainWeather />
    </Container>
  );
};

export default App;
