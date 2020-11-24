const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const researchArticlesSchema = Schema({
  researchArticle: { type: mongoose.Schema.Types.Mixed },
  user: { type: String },
});
const researchArticle = mongoose.model(
  "RESEARCH_ARTICLE",
  researchArticlesSchema
);
module.exports = researchArticle;
