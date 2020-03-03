const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("config");


const app = express();

app.use(express.json);

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// require("dotenv").config();
// const url = process.env.ATLAS_URI;

const url = config.get('ATLAS_URI');

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log("MongoDB database connection established");
    }
  )
  .catch(err => console.log(err));



const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}!`));
