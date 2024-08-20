require('dotenv').config(); // Ensure dotenv is loaded

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

console.log('MongoDB URI:', uri); // Debugging line

if (!uri) {
    console.error('ATLAS_URI environment variable is missing.');
    process.exit(1); // Exit the process if URI is not defined
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});