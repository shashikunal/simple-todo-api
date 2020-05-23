const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("posts", PostSchema);
