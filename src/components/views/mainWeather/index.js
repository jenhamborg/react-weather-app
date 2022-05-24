import React, { useEffect, useState } from "react";
import axios from "axios";

import { MainContainer, MainHeader, MainContent, Feature } from "./styles";

import Card from "../../reusable/card";
import ButtonMedium from "../../reusable/mediumButton";
import InputSearch from "../../reusable/searchInput";
import SmallCard from "../../reusable/smallCard";
import { API_KEY, API_ROOT } from "../../../constants/environment";

export default function MainWeather() {
  const [feature, setFeature] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    const url = `${API_ROOT}/weather?q=lakeville&units=imperial&appid=${API_KEY}`;
    axios
      .get(url)
      .then((res) => {
        setFeature(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchByKey = (e) => {
    setLocationError("");

    if (e.key === "Enter") {
      let isZipCode = /^\d+$/.test(location);
      let cityUrl = `${API_ROOT}/weather?q=${location}&units=imperial&appid=${API_KEY}`;
      let zipUrl = `${API_ROOT}/weather?zip=${location}&units=imperial&appid=${API_KEY}`;
      let url = isZipCode ? zipUrl : cityUrl;

      axios
        .get(url)
        .then((res) => {
          const {
            coord: { lat, lon },
          } = res.data;
          setFeature(null);
          setWeatherData(res.data);

          return axios
            .get(
              `${API_ROOT}/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            )
            .then((res) => {
              const airQuality = res.data.list[0].main.aqi;

              setAirQuality(getAirQuality(airQuality));
            });
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
    let url = `${API_ROOT}/weather?q=${city}&units=imperial&appid=${API_KEY}`;
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

  const getAirQuality = (airQual) => {
    switch (airQual) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "No Data";
    }
  };

  return (
    <MainContainer>
      <MainHeader>
        <h1>Weather Now</h1>
        <InputSearch
          errorMessage={locationError}
          keyFunction={searchByKey}
          label={"search by city or zip code"}
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
            <div className="main-cards">
              <h1>
                Feels Like {weatherData.main.feels_like.toFixed()}°F in{" "}
                {weatherData.name}
              </h1>
              {airQuality && <h2>Air Quality Index: {airQuality}</h2>}
            </div>
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
          {feature && (
            <>
              <h1>Featured Location: {feature.name}</h1>
              <Feature>
                <div className="main-cards">
                  <div className="main-small-cards">
                    <SmallCard
                      columnOneRowOne={feature.main.temp_max.toFixed() + " °F"}
                      columnOneRowTwo={"High"}
                      columnTwoRowOne={feature.main.temp_min.toFixed() + " °F"}
                      columnTwoRowTwo={"Low"}
                    />
                    <SmallCard
                      columnOneRowOne={feature.wind.speed.toFixed() + " MPH"}
                      columnOneRowTwo={"Wind Speed"}
                      columnTwoRowOne={feature.main.humidity.toFixed()}
                      columnTwoRowTwo={"Humidity"}
                    />
                  </div>
                  <div>
                    <Card
                      centerData={feature.main.temp.toFixed() + "°F"}
                      icon={feature.weather[0].icon}
                      iconDescription={feature.weather[0].description}
                      title={"Current"}
                    />
                  </div>
                </div>
              </Feature>
            </>
          )}
        </>
      </MainContent>
    </MainContainer>
  );
}
