const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newsArticlesSchema = Schema({
  newsArticle: { type: mongoose.Schema.Types.Mixed },
  user: { type: String },
});
const newsArticle = mongoose.model("NEWS_ARTICLE", newsArticlesSchema);
module.exports = newsArticle;
