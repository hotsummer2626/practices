const express = require("express");
const {
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  createCourse,
  addCourseToStudent,
  removeCourseFromStudent,
} = require("../controllers/courses");

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", updateCourseById);
router.delete("/:id", deleteCourseById);
router.post("/", createCourse);

router.post("/:code/students/:id", addCourseToStudent);
router.delete("/:code/students/:id", removeCourseFromStudent);

module.exports = router;
