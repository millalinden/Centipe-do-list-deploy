// TEST
const express = require('express');
const app = express();



const taskHandlers = require("./handlers/taskHandlers");
const userHandlers = require("./handlers/userHandlers");
const { isAuth } = require("./passport");

const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");

function setupRouting(app) {
  // APP USE

  app.use(
    cors({
      origin: "http://localhost:5173",
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
      sameSite: "lax",
    })
  );

  app.use(passport.session());

  // USER ROUTES

  app.get("/", (_, res) => {
    res.end();
  });

  app.post("/register", userHandlers.handleRegister);

  app.post("/login", passport.authenticate("local"), (_, res) => {
    res.end();
  });

  app.post("/logout", userHandlers.handleLogout);

  app.get("/session", userHandlers.handleSession);

  // TASK ROUTES

  app.post("/task", taskHandlers.handlePostTask);

  app.put("/task", isAuth, taskHandlers.handlePutTask);

  app.delete("/task", isAuth, taskHandlers.handleDeleteTask);

  app.get("/tasks", isAuth, taskHandlers.handleGetTaskList);
}

// module.exports = { setupRouting };
module.exports = app;