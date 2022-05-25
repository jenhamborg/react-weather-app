import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Oswald", sans-serif;
  margin: auto;
  max-width: 800px;
  padding: 2rem;
  position: relative;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export const MainContent = styled.div`
  .main-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 0;
    width: 100%;
  }
  .main-small-cards {
    > * {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
  .main-button-group {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.5rem;
    color: #f6be00;
  }
  h2 {
    font-size: 1.5rem;
    color: #7cfc00;
  }
  image {
    padding-top: 2rem;
  }
`;

export const Feature = styled.div`
  height: 400px;
  width: 100%;
`;
