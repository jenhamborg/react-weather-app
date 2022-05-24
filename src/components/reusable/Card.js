import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  align-content: center;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  color: #242526;
  text-align: center;
  height: 265px;
  width: 300px;
  h3 {
    font-size: 2rem;
  }
  .card-center {
    font-size: 4rem;
    font-weight: 700;
  }
  .card-icon-container {
    background-color: rgba(12, 46, 75, 0.25);
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    width: 100px;
    border-radius: 4px;
  }
`;

export default function Card({ centerData, icon, iconDescription, title }) {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <div>
        <div className="card-icon-container">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={iconDescription}
          />
        </div>
        <div className="card-center">{centerData}</div>
      </div>
    </CardContainer>
  );
}

Card.propTypes = {
  centerData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  iconDescription: PropTypes.string,
  title: PropTypes.string,
};
