/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Routes for retrieving user weather search reports
 */

const express = require('express');
const db = require('../models/db');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Get search logs for the logged-in user
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of weather search logs
 *       500:
 *         description: Unable to fetch report
 */
router.get('/', auth, async (req, res) => {
    try {
        const [logs] = await db.query(
            'SELECT city, weather_data, timestamp FROM search_logs WHERE user_id = ? ORDER BY timestamp DESC',
            [req.userId]
        );
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch report' });
    }
});

module.exports = router;
