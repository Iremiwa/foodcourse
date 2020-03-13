const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
// const config = require("config");
const cors = require('cors');
const path = require("path");

const users = require("./routes/api/users");

const app = express();

app.use(cors());
app.use(express.json);
app.use(express.static(path.join(__dirname, "client", "build")));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

 require("dotenv").config();
 const url = process.env.ATLAS_URI;

// const url = require("./config/keys").mongoURI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log("MongoDB database connection established");
    }
  )
  .catch(err => console.log(err));


    app.use(passport.initialize());
    
    require("./config/passport")(passport);
    
    app.use("/api/users", users);

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}!`));
