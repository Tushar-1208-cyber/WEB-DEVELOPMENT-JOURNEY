require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

//My routes

const app = express();

mongoose.connect("mongodb+srv://tusharGupta:gupta9351635646@cse-2cluster0.t0rpj.mongodb.net/Tushargupta?authSource=admin").
then(()=>{
    console.log("DB is connected")
}).catch((err)=>{console.log(err)})
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
// app.use(cors());
// app.use(cookieParser());

app.use('/api/items', require('./routes/items'));

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

const port =process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`App is runing at ${port}`)
});

