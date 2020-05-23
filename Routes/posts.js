const router = require("express").Router();
const Post = require("../Models/Post");

/*----------------------------get starts routes --------------------------------*/
router.get("/allposts", async (req, res) => {
  let posts = await Post.find({});
  res.status(201).json({ posts });
});

router.get("/allpost/:id", async (req, res) => {
  let post = await Post.findOne({ _id: req.params.id });
  res.status(201).json({ post });
});

/*----------------------------get ends routes --------------------------------*/

/*------------------post routes starts here -----------------------------------*/
router.post("/add-post", async (req, res) => {
  let { title, details } = req.body;
  let newPost = new Post({
    title,
    details,
  });
  await newPost.save();
  return res.status(201).json({ message: "successfully post created !" });
});

/*-------------------------update posts routes start here ------------------------*/
router.put("/edit-post/:id", async (req, res) => {
  let updatePost = Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      details: req.body.details,
    },
    { new: true }
  );
  await (await updatePost).save;
  return res.status(201).json({
    message: "successfully updated post",
  });
});
/*-------------------------update posts routes ends here --------------------------*/

/*-------------------------delete posts routes starts here ------------------------*/
router.delete("/delete-post/:id", async (req, res) => {
  await Post.findOneAndDelete({ _id: req.params.id });
  return res.status(201).json({
    message: "successfully post deleted",
  });
});
/*------------------------ delete posts routes ends here ---------------------------*/

/*------------------post routes ends here -----------------------------------*/

module.exports = router;
