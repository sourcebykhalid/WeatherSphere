import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <div className=" app flex flex-col mx-auto h-screen">
      <Router>
        <Home />
        <Routes>
          <Route path="/weather/:city" element={<WeatherDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
