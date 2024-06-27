const express = require("express");

// Import articles controllers
const {
  getAllCourses,
  getCoursesbyInstructor,
  getCoursebyId,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
  deleteCourseByInstructor,
  getCoursesbyCategory,
  enrolledCourse,
  getCoursesbyUser
} = require("../controllers/courses");


// const enrollCourse = require("../controllers/enrolledCourses")


// Middleware
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// Create course and category routers
const coursesRouter = express.Router();


coursesRouter.get("/",  getAllCourses);
coursesRouter.get("/search_category/:categoryId/test", getCoursesbyCategory);
coursesRouter.get("/search_1/:Instructor", getCoursesbyInstructor);
coursesRouter.post("/enrollCourse/:courseId", authentication,enrolledCourse);
coursesRouter.get("/enrollCourse", authentication,getCoursesbyUser)


coursesRouter.get("/search_2/:id", getCoursebyId);
coursesRouter.post("/",authentication,authorization("CREATE_COURSES"),createNewCourse);
coursesRouter.put("/:id", updateCourseById);
// coursesRouter.delete("/:id" , authentication, deleteCourseById);
coursesRouter.delete("/:id" ,deleteCourseById);

coursesRouter.delete("/:id/author", deleteCourseByInstructor);

coursesRouter.post(
  "/:id/comments",
  authentication,
  authorization("CREATE_COURSES")
);

module.exports = coursesRouter;
