const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");

const ResearchArticle = require("../../models/ResearchArticle");

router.get("/", auth, async (req, res) => {
  try {
    let articles = await ResearchArticle.find({
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
    newArticle = new ResearchArticle({
      researchArticle: req.body.article,
      user: req.user.id,
    });

    await newArticle.save();
    res.json({ newArticle });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
