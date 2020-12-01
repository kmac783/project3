const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");

const NewsArticle = require("../../models/NewsArticle");

router.get("/", auth, async (req, res) => {
  try {
    let articles = await NewsArticle.find({
      user: req.user.id,
    }).sort({ $natural: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let foundNewsArticle = await NewsArticle.find({
      user: req.user.id,
    });

    if (foundNewsArticle) {
      const articleExists = foundNewsArticle.some(
        (item) => item.newsArticle.title === req.body.article.title
      );

      if (articleExists) {
        return res
          .status(400)
          .json({ msg: "Article already exixts in collection" });
      }
    }

    newNewsArticle = new NewsArticle({
      newsArticle: req.body.article,
      user: req.user.id,
    });

    await newNewsArticle.save();
    res.json({ newNewsArticle });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let newsArticle = await NewsArticle.findById(req.params.id);

    if (!newsArticle) return res.status(404).json({ msg: "Article not found" });

    // make sure user owns article

    if (newsArticle.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized" });

    await NewsArticle.findByIdAndRemove(req.params.id);

    res.json({ msg: "article removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
