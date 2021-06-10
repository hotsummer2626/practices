const Course = require("../models/course");

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
async function updataCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  const newContent = description ? { name, description } : { name };
  const course = await Course.findByIdAndUpdate(
    id,
    newContent,
    { new: true }
  );
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
  const { code, name, description } = req.body;
  const course = new Course({ _id: code, name, description });
  await course.save();
  return res.status(201).json(course);
}

module.exports = {
  getAllCourses,
  getCourseById,
  updataCourseById,
  deleteCourseById,
  createCourse,
};
