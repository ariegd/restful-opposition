require('dotenv').config(); // Ensure this line is at the top of the file
const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const questionRoutes = require('./src/routes/questionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
dbConfig();

// Set up routes
app.use('/api', userRoutes);
app.use('/api', questionRoutes); // Add question routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});