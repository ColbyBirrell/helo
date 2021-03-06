require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session"); //session
const ctrl = require("./controller");
const authCtrl = require("./authController");
const gradient = require("gradient-string");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET
  })
); //session

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  const port = SERVER_PORT;
  app.set("db", db);
  app.listen(port || 4000, () =>
    console.log(gradient.rainbow(`<---Unicorns running on ${SERVER_PORT}--->`))
  );
  console.log(gradient.instagram("Database Connected"));
});

// Auth endpoints
app.post(`/auth/register`, authCtrl.register);
app.post(`/auth/login`, authCtrl.login);
app.post(`/auth/logout`, authCtrl.logout);

// post endpoints
app.get(`/api/posts`, ctrl.getPosts);
app.post(`/api/posts`, ctrl.createPost);
app.delete(`/api/posts/:id`, ctrl.deletePost);
