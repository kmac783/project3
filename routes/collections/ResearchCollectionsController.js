const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");

const ResearchArticle = require("../../models/ResearchArticle");

router.get("/", auth, async (req, res) => {
  try {
    let articles = await ResearchArticle.find({
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
    let foundResearchArticle = await ResearchArticle.find({
      user: req.user.id,
    });

    if (foundResearchArticle) {
      const articleExists = foundResearchArticle.some(
        (item) => item.researchArticle.id === req.body.article.id
      );

      if (articleExists) {
        return res
          .status(400)
          .json({ msg: "Article already exixts in collection" });
      }
    }
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

router.delete("/:id", auth, async (req, res) => {
  try {
    let researchArticle = await ResearchArticle.findById(req.params.id);

    if (!researchArticle)
      return res.status(404).json({ msg: "Article not found" });

    // make sure user owns article

    if (researchArticle.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized" });

    await ResearchArticle.findByIdAndRemove(req.params.id);

    res.json({ msg: "article removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
