module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get("db");

    let allPosts = await db.get_posts();
    if (allPosts !== []) {
      res.status(200).send(allPosts);
    } else {
      res.status(404).send("Posts not found");
    }
  },

  createPost: async (req, res) => {
    const { title, img, content, author_id } = req.body;
    const db = req.app.get("db");

    await db.create_posts({ title, img, content, author_id });
    res.status(200).send("post created successfully");
  },

  deletePost: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    await db.delete_posts([id]);
    res.status(200).send("deleted successfully");
  }
};
