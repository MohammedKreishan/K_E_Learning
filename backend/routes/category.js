const express = require("express");

const { createNewCategory, getCoursesbyCategory } = require("../controllers/courses");

// Middleware
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// Create  category routers
const categoryRouter = express.Router();

categoryRouter.post("/create", authentication, createNewCategory);
categoryRouter.get("/:id", authentication, getCoursesbyCategory);


categoryRouter.post(
  "/:id/comments",
  authentication,
  authorization("CREATE_COURSES")
);

module.exports = categoryRouter;
