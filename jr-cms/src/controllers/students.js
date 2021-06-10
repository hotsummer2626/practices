const Studnet = require("../models/student");

async function getAllStudents(req, res) {
  const students = await Studnet.find().exec();
  return res.json(students);
}

async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Studnet.findById(id);
  if (!student) {
    return res.sendStatus(404);
  }
  return res.json(student);
}
async function updataStudentById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await Studnet.findByIdAndUpdate(
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
  const student = await Studnet.findByIdAndDelete(id);
  if (!student) {
    return res.sendStatus(404);
  }
  return res.sendStatus(204);
}
async function createStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Studnet({ firstName, lastName, email });
  await Studnet.save();
  return res.status(201).json(student);
}

module.exports = {
  getAllStudents,
  getStudentById,
  updataStudentById,
  deleteStudentById,
  createStudent,
};
