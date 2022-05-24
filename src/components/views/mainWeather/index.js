import React, { useState } from "react";
import axios from "axios";

import { MainContainer, MainHeader, MainContent } from "./styles";

import Card from "../../reusable/Card";
import ButtonMedium from "../../reusable/Button";
import InputSearch from "../../reusable/InputSearch";
import SmallCard from "../../reusable/SmallCard";
import { API_KEY } from "../../../constants/environment";

export default function MainWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  const searchByKey = (e) => {
    setLocationError("");

    if (e.key === "Enter") {
      let isZipCode = /^\d+$/.test(location);
      let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;
      let zipUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&appid=${API_KEY}`;
      let url = isZipCode ? zipUrl : cityUrl;

      axios
        .get(url)
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setLocationError("We don't currently have data for that location.");
          }
          setLocationError("Oh no we didn't recognize your request!");
        });
      setLocation("");
    }
  };

  const handleClick = (e, city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLocation("");
  };

  return (
    <MainContainer>
      <MainHeader>
        <h1>Weather Now</h1>
        <InputSearch
          errorMessage={locationError}
          keyFunction={searchByKey}
          label={"enter city or zip code and hit enter"}
          maxCharacter={"50"}
          setErrorMessage={setLocationError}
          placeholder={"Enter City or Zip Code"}
          type={"search"}
          userValue={location}
          userValueSetter={setLocation}
        />
      </MainHeader>

      <MainContent>
        {weatherData && (
          <>
            <h1>
              Feels Like {weatherData.main.feels_like.toFixed()}°F in{" "}
              {weatherData.name}
            </h1>
            <div className="main-cards">
              <div className="main-small-cards">
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
              <div>
                <Card
                  centerData={weatherData.main.temp.toFixed() + "°F"}
                  icon={weatherData.weather[0].icon}
                  iconDescription={weatherData.weather[0].description}
                  title={"Current"}
                />
              </div>
            </div>
          </>
        )}
        <>
          <div className="main-button-group">
            <ButtonMedium
              handleClick={(e) => handleClick(e, "New York")}
              text={"New York"}
            />
            <ButtonMedium
              handleClick={(e) => handleClick(e, "Washington DC")}
              text={"Washington DC"}
            />

            <ButtonMedium
              handleClick={(e) => handleClick(e, "Chicago")}
              text={"Chicago"}
            />

            <ButtonMedium
              handleClick={(e) => handleClick(e, "Minneapolis")}
              text={"Minneapolis"}
            />

            <ButtonMedium
              handleClick={(e) => handleClick(e, "Dallas")}
              text={"Dallas"}
            />
            <ButtonMedium
              handleClick={(e) => handleClick(e, "Los Angeles")}
              text={"Los Angeles"}
            />
          </div>
        </>
      </MainContent>
    </MainContainer>
  );
}
