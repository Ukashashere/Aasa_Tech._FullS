require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const reportRoutes = require('./routes/report');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger Configuration
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
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to route files where Swagger annotations are added
};

// Generate Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/auth', authRoutes);
app.use('/weather', weatherRoutes);
app.use('/report', reportRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
