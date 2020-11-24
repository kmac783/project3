const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");

const NewsArticle = require("../../models/NewsArticle");

router.get("/", auth, async (req, res) => {
  try {
    let articles = await NewsArticle.find({
      user: req.user.id,
    });
    console.log(articles);
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
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

module.exports = router;
