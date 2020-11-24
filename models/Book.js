const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = Schema({
  book: { type: mongoose.Schema.Types.Mixed },
  user: { type: String },
});
const book = mongoose.model("BOOK", bookSchema);
module.exports = book;
