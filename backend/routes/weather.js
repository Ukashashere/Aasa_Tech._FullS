const express = require('express');
const axios = require('axios');
const db = require('../models/db');
const auth = require('../middleware/auth');
const router = express.Router();

// Get Weather
router.get('/:city', auth, async (req, res) => {
    const city = req.params.city;

    try {
        // Fetch weather data
        const response = await axios.get(`http://api.weatherstack.com/current`, {
            params: {
                access_key: process.env.WEATHERSTACK_API_KEY,
                query: city,
            },
        });

        const weatherData = response.data;

        if (!weatherData || !weatherData.current) {
            return res.status(404).json({ error: 'Weather data not found' });
        }

        // Save search to database
        await db.query(
            'INSERT INTO search_logs (user_id, city, weather_data) VALUES (?, ?, ?)',
            [req.userId, city, JSON.stringify(weatherData)]
        );

        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
});

module.exports = router;
