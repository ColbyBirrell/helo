require("dotenv").config();
const express = require("express");
const massive = require("massive");
// const session = require("express-session");
const ctrl = require("./controller");
const authCtrl = require("./authController");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     rejectUnauthorized: false,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 },
//     secret: SESSION_SECRET
//   })
// );

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  const port = SERVER_PORT;
  app.set("db", db);
  app.listen(port || 4000, () =>
    console.log(`<---Server running on ${SERVER_PORT}--->`)
  );
  console.log("Database Connected");
});

// Auth endpoints
app.post(`/auth/register`, authCtrl.register);
app.post(`/auth/login`, authCtrl.login);

// post endpoints
app.get(`/api/posts`, ctrl.getPosts);
