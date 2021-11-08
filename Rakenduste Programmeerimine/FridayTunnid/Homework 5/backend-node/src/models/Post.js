const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: { type: String, required: true },
  aID: { type: String, required: true },
  modified: { type: Date, default: Date.now },
  posted: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post