import React, { useState } from "react";
import axios from "axios";
import { API_KEY, API_ROOT } from "../../../constants/environment";
import Button from "../../reusable/Button";
import InputSearch from "../../reusable/InputSearch";
import { MainContainer, MainTop, MainBottom } from "./styles";
import Card from "../../reusable/Card";

// import PropTypes from 'prop-types'

export default function MainWeather() {
  const [searchData, setSearchData] = useState("55044");
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  console.log(location);

  const searchByKey = (e) => {
    setLocationError("");

    if (e.key === "Enter") {
      let isZipCode = /^\d+$/.test(location);
      let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;
      let zipUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&appid=${API_KEY}`;

      let url = isZipCode ? zipUrl : cityUrl;
      console.log(url);
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
          label={"Search By City or Zip Code"}
          maxCharacter={"50"}
          setErrorMessage={setLocationError}
          type={"search"}
          userValue={location}
          userValueSetter={setLocation}
        />
      </MainTop>
      <MainBottom>
        <Card />
      </MainBottom>
    </MainContainer>
  );
}
