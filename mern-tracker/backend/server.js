const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Make sure this is included

const app = express();



// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

const uri = process.env.ATLAS_URI;

if (!uri) {
  console.error('MongoDB URI is missing');
  process.exit(1);
}

console.log('MongoDB URI:', process.env.ATLAS_URI);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});