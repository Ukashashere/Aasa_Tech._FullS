require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const reportRoutes = require('./routes/report');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/weather', weatherRoutes);
app.use('/report', reportRoutes);

//Default Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
