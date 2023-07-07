const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
const flash = require("connect-flash");
const cors = require("cors");

//importing routes;
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const User = require("./models/user");

const MONGODB_URI =
  "mongodb+srv://pratik16082001:PRAtim123@cluster0.8l9b2qc.mongodb.net/healthifyMe";

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

const csrfProtection = csrf();

//setting views so that my express app knows where and what to look for;
app.set("view engine", "ejs");
app.set("views", "views");

//body parsers for parsing incoming requests;
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
//manages backed sessions and frontend cookies automatically;
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

//CSRF uses session hence after it. Also, every request has a CSRF token that is validated automatically at the backend;
app.use(csrfProtection);
app.use(flash());
app.use(cors());

//attaching user to the request, user fetched from current session;
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

//routes/middleware
app.use("/admin", adminRoutes);
app.use(authRoutes);

//connecting to database;
mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("Connected!");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
