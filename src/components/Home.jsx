// Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      navigate(`/weather/${city}`); // Use navigate instead of history.push
    }
  };

  return (
    <div className="flex flex-col gap-y-3 mx-auto mt-10">
      <h1 className=" font-bold text-4xl p-3 rounded shadow-md shadow-gray-200 mx-auto bg-black text-gray-200">
        Weather Sphere
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default Home;
