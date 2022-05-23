import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Oswald", sans-serif;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainTop = styled.div`
  .main-search-banner {
    font-size: 4rem;
    text-align: center;
  }
`;

export const MainBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 3rem;
  .main-sunrise-line {
    margin-bottom: auto;
    margin-top: auto;
    border-left: 3px solid #ffb81c;
    height: 130px;
  }
  .main-sunrise {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ffb81c;
    font-size: 1.25rem;
    text-align: center;
    width: 150px;
  }
  .main-sunrise-text {
    justify-self: flex-start;
  }
  .main-sunset-text {
    justify-self: flex-end;
  }
`;

export const MainBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: row;
  width: 100%;
  h1 {
    font-size: 2.5rem;
  }
  image {
    padding-top: 2rem;
  }
`;
