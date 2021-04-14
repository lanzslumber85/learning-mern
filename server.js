const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected!"))
    .catch(err => console.log(err));

// Set the port for our server to run on and have our app listen on this port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
