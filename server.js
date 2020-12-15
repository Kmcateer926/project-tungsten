const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();
const fs = require("fs");

const profileController = require("./controllers/profileController");

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Handle POST body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

handlebars.registerHelper("header", function (args) {
  return fs.readFileSync("./views/partials/header.handlebars");
});

handlebars.registerHelper("footer", function (args) {
  return fs.readFileSync("./views/partials/footer.handlebars");
});
// ROUTES

// Views Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", (req, res) => {
  res.render("search-tools");
});


<<<<<<< HEAD
app.use(profileController);
=======
// app.use(playerController);
>>>>>>> b1123c942c0095c305b2885fced5643f545443e5

// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/search/:search", (req, res) => {
  console.log("searchTerm", req.params.search);
  res.json({
    search: req.params.search,
    results: [],
  });
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
});
// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
