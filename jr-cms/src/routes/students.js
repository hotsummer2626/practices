const express = require("express");
const {
  getAllStudents,
  getStudentById,
  updataStudentById,
  deleteStudentById,
  createStudent,
} = require("../controllers/students");

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updataStudentById);
router.delete('/:id',deleteStudentById);
router.post('/', createStudent);

module.exports = router;
