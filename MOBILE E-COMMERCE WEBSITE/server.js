const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use('/api/items', require('./routes/items'));

// Set up the view engine (optional: if you want to use EJS for templates)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes (will be added later)

// Start the server
const PORT = process.env.PORT || 3000;


const connectDB = require('./db');
const User = require('./models/Item');
app.use(express.json()); // Middleware to parse JSON data

// Connect to MongoDB
connectDB();
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});