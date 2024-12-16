/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather search routes
 */

const express = require('express');
const axios = require('axios');
const db = require('../models/db');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /weather/{city}:
 *   get:
 *     summary: Get current weather for a city
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the city
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Weather data retrieved successfully
 *       404:
 *         description: Weather data not found
 *       500:
 *         description: Error fetching weather data
 */
router.get('/:city', auth, async (req, res) => {
    const city = req.params.city;

    try {
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
