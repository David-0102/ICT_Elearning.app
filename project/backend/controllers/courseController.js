const Course = require('../models/Course');

const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};

const createCourse = async (req, res) => {
    const { title, description, materials } = req.body;
    const course = new Course({ title, description, instructor: req.user._id, materials });
    await course.save();
    res.status(201).json(course);
};

const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
    res.json(course);
};

const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.status(204).send();
};

module.exports = { getCourses, createCourse, updateCourse, deleteCourse };
