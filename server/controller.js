module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get("db");

    let allPosts = await db.get_posts();
    if (allPosts !== []) {
      res.status(200).send(allPosts);
    } else {
      res.status(404).send("Posts not found");
    }
  }
};
