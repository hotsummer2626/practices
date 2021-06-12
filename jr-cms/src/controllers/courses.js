const Course = require("../models/course");
const Student = require("../models/student");
const Joi = require("joi");

async function getAllCourses(req, res) {
  const courses = await Course.find().exec();
  return res.json(courses);
}

async function getCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) {
    return res.sendStatus(404);
  }
  return res.json(course);
}
async function updateCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  const newContent = description ? { name, description } : { name };
  const course = await Course.findByIdAndUpdate(id, newContent, { new: true });
  if (!course) {
    res.sendStatus(404);
  }
  return res.json(course);
}
async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id);
  if (!course) {
    res.sendStatus(404);
  }
  return res.sendStatus(204);
}
async function createCourse(req, res) {
  // const { code, name, description } = req.body;
  const schema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    code: Joi.string()
      .regex(/^[a-zA-Z0-9]+$/)
      .required(),
    description: Joi.string(),
  });
  const { code, name, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });
  const course = new Course({ _id: code, name, description });
  await course.save();
  return res.status(201).json(course);
}

async function addCourseToStudent(req, res) {
  const { code, id } = req.params;
  const course = await Course.findById(code);
  const student = await Student.findById(id);
  if (!course || !student) {
    return res.sendStatus(404);
  }
  course.students.addToSet(student._id);
  student.courses.addToSet(course.code);
  await course.save();
  await student.save();
  return res.json(course);
}

async function removeCourseFromStudent(req, res) {
  const { id, code } = req.params;
  const course = await Course.findById(code);
  const student = await Student.findById(id);
  if (!course || !student) {
    return res.sendStatus(404);
  }
  course.students.pull(student._id);
  student.courses.pull(course.code);
  await course.save();
  await student.save();
  return res.json(course);
}

module.exports = {
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  createCourse,
  addCourseToStudent,
  removeCourseFromStudent,
};
