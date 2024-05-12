import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function WeatherDetails() {
  const { city } = useParams(); // Assuming name is the parameter holding the city name
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=855447adf2369b313611e65959261087`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError("Error fetching weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Error fetching weather data for {city}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 opacity-90 sm:mx-auto gap-y-4  bg-transparent text-3xl font-bold h-fit mt-4 w-full  sm:w-2/4  shadow-md shadow-gray-800 rounded">
      <div className="text-2xl w-fit mx-auto  text-gray-300 rounded  p-2 bg-gray-600">
        <h2 className=" text-center"> {weatherData.name}</h2>
      </div>
      <div className="text-2xl w-fit mx-auto  text-gray-300 rounded  p-5 ">
        <h2 className=" text-center"> {weatherData.weather.icon}</h2>
      </div>
      <div className=" text-4xl sm:text-7xl   p-3 rounded">
        {Math.round(weatherData.main.temp - 273.15)}°c
      </div>
      <div className=" text-2xl sm:text-4xl  text-gray-600  p-3 rounded">
        {weatherData.weather[0].main}
      </div>
      <div className=" flex items-center text-xl  text-gray-600 bg-cyan-200 p-3 rounded">
        Humidity
        <pre> {weatherData.main.humidity}%</pre>
      </div>
    </div>
  );
}

export default WeatherDetails;
