const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require("dotenv").config();
const url = process.env.ATLAS_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
   () => {
     console.log("MongoDB database connection established");
   }
 )
 .catch(err => console.log(err));


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const path = require("path");

app.use(express.static(path.join(__dirname, "client", "build")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}!`));
