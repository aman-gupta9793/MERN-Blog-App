const express = require("express");
const { getAllBlogsController } = require("../controller/blogController");
const { createBlogController } = require("../controller/blogController");
const { updateBlogController } = require("../controller/blogController");
const { deleteBlogController } = require("../controller/blogController");
const { getBlogByIdController } = require("../controller/blogController");
const { userBlogController } = require("../controller/blogController");

// router object
const router = express.Router();

// CRUD operations
// get || all-blogs
router.get("/all-blog", getAllBlogsController);

// post || create blog
router.post("/create-blog", createBlogController);

// put || update blogs
router.put("/update-blog/:id", updateBlogController);

// delete || delete blogs
router.delete("/delete-blog/:id", deleteBlogController);

// get || single blog
router.get("/get-blog/:id", getBlogByIdController);

// get || user-blog
router.get("/user-blog/:id", userBlogController);

//exports
module.exports = router;
