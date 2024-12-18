import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const encodedCity = encodeURIComponent(city.trim()); // Sanitize input
            console.log(`Requesting: ${process.env.REACT_APP_API_URL}/weather/${encodedCity}`);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather/${city}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setWeather(response.data);
        } catch (error) {
            console.error('Error Fetching Weather:', error.response?.data || error.message);
            alert('Unable to fetch weather data');
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <h1>Search Weather</h1>
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {weather && <pre>{JSON.stringify(weather, null, 2)}</pre>}
        </div>
    );
}

export default Weather;


