const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const { session } = req; //session
    const db = req.app.get("db");

    //auth check to db
    let user = await db.check_user([username]);
    user = user[0];
    if (user) {
      return res.status(400).send("User already exists");
    }

    //salt and hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let newUser = await db.register_user({ username, hash });
    console.log(newUser); //session
    newUser = newUser[0];
    session.user = newUser; //session
    res.status(201).send(session.user);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const { session } = req; //session
    const db = req.app.get("db");

    let user = await db.check_user([username]);
    user = user[0];
    if (!user) {
      return res.status(400).send("Username not found");
    }

    const authenticated = bcrypt.compareSync(password, user.password);

    if (authenticated) {
      delete user.password;
      session.user = user; //session
      // console.log(user);
      res.status(202).send(session.user);
    } else {
      res.status(401).send("Incorrect Password");
    }
  },

  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(200);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }
};
