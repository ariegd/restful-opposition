const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI must be a string, got 'undefined'. Check your .env file.");
        }        

        await mongoose.connect(mongoUri); // No options needed for modern MongoDB drivers
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = dbConfig;