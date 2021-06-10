const express = require("express");
const {
  getAllCourses,
  getCourseById,
  updataCourseById,
  deleteCourseById,
  createCourse,
} = require("../controllers/courses");

const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', updataCourseById);
router.delete('/:id',deleteCourseById);
router.post('/', createCourse);

module.exports = router;
