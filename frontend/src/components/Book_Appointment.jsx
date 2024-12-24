import React, { useState, useEffect } from "react";
import "../styles/Book_Appointment.scss";
import { BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios";

// Import images
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/image6.png";
import image7 from "../Assets/image7.png";
import image8 from "../Assets/image8.png";

function IconInput({ children, placeholder, type, value, onChange }) {
  return (
    <div className="wrap">
      <div className="icon-wrap">{children}</div>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

function ButtonIconInput({ children, text, onClick }) {
  return (
    <div className="button-wrap" onClick={onClick}>
      <div className="button-icon-wrap">{children}</div>
      <span className="button-text">{text}</span>
    </div>
  );
}

const Book_Appointment = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city.");
      return;
    }

    try {
      setError(null);
      const response = await axios.get(`http://localhost:5000/weather/${city}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setWeatherData(response.data);
    } catch (err) {
      console.error("Error fetching weather data:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error fetching weather data.");
    }
  };

  useEffect(() => {
    // Additional functionality (if needed) can be added here.
  }, []);

  return (
    <section className="Book_Appointment">
      {/* Left Side: Images */}
      <div className="image-container">
        <div className="image-column column-one">
          <img src={image2} alt="Image 1" />
          <img src={image4} alt="Image 2" />
          <img src={image1} alt="Image 3" />
          <img src={image3} alt="Image 4" />
        </div>
        <div className="image-column column-two">
          <img src={image6} alt="Image 5" />
          <img src={image8} alt="Image 6" />
          <img src={image7} alt="Image 7" />
          <img src={image5} alt="Image 8" />
        </div>
      </div>

      {/* Right Side: "Book an appointment" Text */}
      <div className="Book_Appointment-text">
        <h1>
          Get your Weather Forecast<span> anytime anywhere!</span>
        </h1>
        <p>Weather Forecast, Rain Prediction, AQI at your fingertips.</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="input-second">
          <IconInput
            type="text"
            placeholder="  City, state, zipcode.."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <IoLocationSharp />
          </IconInput>
        </div>
        <div>
          <ButtonIconInput text="Find now" onClick={fetchWeather}>
            <BsSearch />
          </ButtonIconInput>
        </div>
      </div>

      {/* Display Weather Data or Error */}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-data">
          <img src={weatherData.current.weather_icons} alt="Weather Icon"></img> 
          <h3>Weather in {city}:</h3>
          <p>Temperature: {weatherData.current.temperature}°C</p>
          <p>Weather Description: {weatherData.current.weather_descriptions[0]}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Country: {weatherData.location.country}</p>
          <p>Observed at: {weatherData.current.observation_time}</p>
        </div>
      )}
    </section>
  );
};

export default Book_Appointment;
