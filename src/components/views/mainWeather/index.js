import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../../constants/environment";
import InputSearch from "../../reusable/InputSearch";
import { MainContainer, MainTop, MainBottom, MainBadge } from "./styles";
import Card from "../../reusable/Card";
import SmallCard from "../../reusable/SmallCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function MainWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  console.log(weatherData);

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
          setLocationError(
            "Oh no there was an error retrieving that information!"
          );
        });
      setLocation("");
    }
  };

  const getTimeZone = (timeToConvert) => {
    const timeStampSunset = moment.unix(timeToConvert);
    const formattedTime = moment(timeStampSunset).format("hh:mm a");
    return formattedTime;
  };

  return (
    <MainContainer>
      <MainTop>
        <div className="main-search-banner">
          <div className="main-input-banner">
            <InputSearch
              id={"main-search-input"}
              errorMessage={locationError}
              keyFunction={searchByKey}
              label={"Enter City or Zip Code"}
              maxCharacter={"50"}
              setErrorMessage={setLocationError}
              type={"search"}
              userValue={location}
              userValueSetter={setLocation}
            />
          </div>
          {weatherData ? (
            <MainBadge>
              <h1>
                Feels Like {weatherData.main.feels_like.toFixed()}°F in{" "}
                {weatherData.name}
              </h1>
            </MainBadge>
          ) : (
            <MainBadge>
              <h1>Weather Now</h1>
            </MainBadge>
          )}
        </div>
      </MainTop>
      {weatherData && (
        <MainBottom>
          <Card
            centerData={weatherData.main.temp.toFixed() + "°F"}
            icon={weatherData.weather[0].icon}
            iconDescription={weatherData.weather[0].description}
            title={"Current"}
          />
          <div className="main-sunrise">
            <div className="main-sunrise-text">
              <FontAwesomeIcon icon={faSun} />
              <div>Sunrise: {getTimeZone(weatherData.sys.sunrise)}</div>
            </div>
            <div className="main-sunrise-line"></div>
            <div className="main-sunset-text">
              <FontAwesomeIcon icon={faMoon} />
              <div>Sunset: {getTimeZone(weatherData.sys.sunset)}</div>
            </div>
          </div>
          <div>
            <SmallCard
              columnOneRowOne={weatherData.main.temp_max.toFixed() + " °F"}
              columnOneRowTwo={"High"}
              columnTwoRowOne={weatherData.main.temp_min.toFixed() + " °F"}
              columnTwoRowTwo={"Low"}
            />
            <SmallCard
              columnOneRowOne={weatherData.wind.speed.toFixed() + " MPH"}
              columnOneRowTwo={"Wind Speed"}
              columnTwoRowOne={weatherData.main.humidity.toFixed()}
              columnTwoRowTwo={"Humidity"}
            />
          </div>
        </MainBottom>
      )}
    </MainContainer>
  );
}
