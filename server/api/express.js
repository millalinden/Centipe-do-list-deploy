const express = require("express");
const app = express();

const taskHandlers = require("./handlers/taskHandlers");
const userHandlers = require("./handlers/userHandlers");
const { isAuth } = require("./passport");

const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");

// Middleware setup
app.use(
  cors({
    origin: "https://centipe-do-list-frontend-76k6wzrm1-millas-projects-7027ee8d.vercel.app/",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    // sameSite: "lax",
    cookie: { secure: false, sameSite: "lax" },
  })
);

app.use(passport.initialize()); // Initialize Passport.js
app.use(passport.session());

// Routes
app.get("/", (_, res) => {
  res.end();
});

app.post("/v1/register", userHandlers.handleRegister);

app.post("/v1/login", passport.authenticate("local"), (_, res) => {
  res.end();
});

app.post("/v1/logout", userHandlers.handleLogout);

app.get("/v1/session", userHandlers.handleSession);

app.post("/v1/task", taskHandlers.handlePostTask);

app.put("/v1/task", isAuth, taskHandlers.handlePutTask);

app.delete("/v1/task", isAuth, taskHandlers.handleDeleteTask);

app.get("/v1/tasks", isAuth, taskHandlers.handleGetTaskList);

module.exports = app;
