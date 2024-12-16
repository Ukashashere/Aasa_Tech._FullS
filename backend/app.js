require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const reportRoutes = require('./routes/report');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


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

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Weather App API',
            version: '1.0.0',
            description: 'API documentation for the Weather App',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to route files where Swagger annotations are added
};

// Generate Swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/* Abhi mera Swagger UI will be available at http://localhost:5000/docs */