const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");

const Book = require("../../models/Book");

router.get("/", auth, async (req, res) => {
  try {
    let books = await Book.find({
      user: req.user.id,
    });
    console.log(books);
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    newBook = new Book({
      book: req.body.bookItem,
      user: req.user.id,
    });

    await newBook.save();
    res.json({ newBook });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
