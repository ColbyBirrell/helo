const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    // const { session } = req;
    const db = req.app.get("db");

    const salt = bcrypt.genSaltSync(20);
    const hash = bcrypt.hashSync(password, salt);

    let newUser = await db.register_user({ username, hash });
    // console.log(newUser);
    newUser = newUser[0];
    // session.user = newUser;
    res.status(201).send(newUser);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    //   const {session} = req
    const db = req.app.get("db");

    let user = await db.check_user([username]);
    user = user[0];
    if (!user) {
      return res.status(400).send("Username not found");
    }

    const authenticated = bcrypt.compareSync(password, user.password);

    if (authenticated) {
      delete user.password;
      // session.user = user;
      console.log(user);
      res.status(202).send(user);
    } else {
      res.status(401).send("Incorrect Password");
    }
  }
};
