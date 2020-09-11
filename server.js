const express = require("express");
const session = require("express-session");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "/client")));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "index.html"));
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`${process.env.DB_NAME} database connected`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT: ${PORT}`);
    });
  });
