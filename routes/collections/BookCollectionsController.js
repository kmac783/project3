const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");

const Book = require("../../models/Book");

router.get("/", auth, async (req, res) => {
  try {
    let books = await Book.find({
      user: req.user.id,
    }).sort({ $natural: -1 });
    // console.log(books);
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let foundBooks = await Book.find({
      user: req.user.id,
    });

    if (foundBooks) {
      const bookExists = foundBooks.some(
        (item) => item.bookItem.id === req.body.items.id
      );

      if (bookExists) {
        return res
          .status(400)
          .json({ msg: "Book already exixts in collection" });
      }
    }
    newBook = new Book({
      bookItem: req.body.items,
      user: req.user.id,
    });

    await newBook.save();
    res.json({ newBook });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ msg: "Book not found" });

    // make sure user owns book

    if (book.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized" });

    await Book.findByIdAndRemove(req.params.id);

    res.json({ msg: "book removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
