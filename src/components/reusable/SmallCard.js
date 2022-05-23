import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  color: #242526;
  margin-bottom: 1rem;
  text-align: center;
  height: 125px;
  width: 300px;
  h3 {
    font-size: 2rem;
  }
  .sm-card-col-one {
    text-align: center;
    margin-right: 0.5rem;
    width: 50%;
  }
  .sm-card-col-two {
    text-align: center;
    margin-left: 0.5rem;
    width: 50%;
  }
  .sm-card-vl {
    margin-bottom: auto;
    margin-top: auto;
    border-left: 3px solid #d3d3d3;
    height: 100px;
  }
  .sm-card-row-one {
    font-size: 2rem;
    font-weight: 700;
  }
  .sm-card-row-two {
    font-size: 1.25rem;
  }
`;

export default function SmallCard({
  columnOneRowOne,
  columnOneRowTwo,
  columnTwoRowOne,
  columnTwoRowTwo,
}) {
  return (
    <CardContainer>
      <div className="sm-card-col-one">
        <div className="sm-card-row-one">{columnOneRowOne}</div>
        <div className="sm-card-row-two">{columnOneRowTwo}</div>
      </div>
      <div className="sm-card-vl"></div>
      <div className="sm-card-col-two">
        <div className="sm-card-row-one">{columnTwoRowOne}</div>
        <div className="sm-card-row-two">{columnTwoRowTwo}</div>
      </div>
    </CardContainer>
  );
}

SmallCard.propTypes = {
  columnOneRowOne: PropTypes.string,
  columnOneRowTwo: PropTypes.string,
  columnTwoRowOne: PropTypes.string,
  columnTwoRowTwo: PropTypes.string,
};
