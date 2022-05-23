import React, { useState } from "react";
import axios from "axios";
import { API_KEY, API_ROOT } from "../../../constants/environment";
import Button from "../../reusable/Button";
import InputSearch from "../../reusable/InputSearch";
import { MainContainer, MainTop, MainBottom } from "./styles";

// import PropTypes from 'prop-types'

export default function MainWeather() {
  const [searchData, setSearchData] = useState("55044");
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  const getWeather = () => {
    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setLocationError("We don't currently have data for that location.");
        }
        setLocationError("Oh no there was an retrieving that information!");
      });
    setLocation("");
  };

  const searchByKey = (e) => {
    setLocationError("");
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setWeatherData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setLocationError("We don't currently have data for that location.");
          }
          setLocationError("Oh no there was an retrieving that information!");
        });
      setLocation("");
    }
  };

  return (
    <MainContainer>
      <MainTop>
        <InputSearch
          id={"main-weather-input"}
          errorMessage={locationError}
          keyFunction={searchByKey}
          label={"Search By City"}
          maxCharacter={"50"}
          setErrorMessage={setLocationError}
          type={"text"}
          userValue={location}
          userValueSetter={setLocation}
        />
        <Button onClick={() => getWeather()} text={"Submit"} />
      </MainTop>
      <MainBottom>Bottom Content</MainBottom>
    </MainContainer>
  );
}
