const Student = require("../models/student");
const Course = require("../models/course");

async function getAllStudents(req, res) {
  const students = await Student.find().exec();
  return res.json(students);
}

async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    return res.sendStatus(404);
  }
  return res.json(student);
}

async function updateStudentById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await Student.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  );
  if (!student) {
    return res.sendStatus(404);
  }
  return res.json(student);
}

async function deleteStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id);
  if (!student) {
    return res.sendStatus(404);
  }
  await Course.updateMany(
    {
      students: student._id,
    },
    {
      $pull: {
        students: student._id,
      },
    }
  );
  return res.sendStatus(204);
}

async function createStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Student({ firstName, lastName, email });
  try {
    await student.save();
  } catch (e) {
    return res.send(e);
  }
  return res.status(201).json(student);
}

async function addStudentToCourse(req, res) {
  const { id, code } = req.params;
  const student = await Student.findById(id).exec();
  const course = await Course.findById(code).exec();
  if (!student || !course) {
    return res.sendStatus(404);
  }
  student.courses.addToSet(course.code);
  course.students.addToSet(student._id);
  await student.save();
  await course.save();
  return res.json(student);
}

async function removeStudentFromCourse(req, res) {
  const { id, code } = req.params;
  const student = await Student.findById(id);
  const course = await Course.findById(code);
  if (!student || !course) {
    return res.sendStatus(404);
  }
  student.courses.pull(course.code);
  course.students.pull(student._id);
  await student.save();
  await course.save();
  return res.json(student);
}

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  createStudent,
  addStudentToCourse,
  removeStudentFromCourse,
};
