const express = require("express");
const path = require('path');
const mongoose = require("mongoose");


const app = express();

// insert your data below this line!

// insert your route handlers (app.get and so on) below this line!
//const flightRoute = require('./routes/index')
const port = 4001;

app.use(express.urlencoded({ extended: true }));

// import and mount routes
app.use("/", require('./routes/flights'))
app.use("/", require("./routes/tickets"))

mongoose.connect("mongodb://localhost:27017/flights", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => {
    console.log("mongodb connected successfully!");
});

app.listen(port, () => {
    console.log(`Express-API-Warmup is running on port ${port}`);
  });

