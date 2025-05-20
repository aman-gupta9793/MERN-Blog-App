const mongoose = require("mongoose");

// blog schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      require: [true, "description is require"],
    },
    image: {
      type: String,
      require: [true, "image is require"],
    },
    //creating user-blog relation
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "user id is required"],
    },
  },
  { timestamp: true }
);

// creating blog database
const blogModel = mongoose.model("Blog", blogSchema);

// export
module.exports = blogModel;
