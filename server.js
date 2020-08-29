
const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const db = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Express boilerplate middleware


const mongoURI = 'mongodb://localhost:27017/projecttest'

mongoose.
  connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


var Users = require("./routes/Users");

app.use('/users', Users);

app.listen(port, () => {
  console.log("Server is running on port: " + port)
})
