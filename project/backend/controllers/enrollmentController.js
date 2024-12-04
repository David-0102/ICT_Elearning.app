const Enrollment = require('../models/Enrollment');

const enrollStudent = async (req, res) => {
    const { course_id } = req.body;
    const enrollment = new Enrollment({
        student_id: req.user._id,
        course_id,
    });
    await enrollment.save();
    res.status(201).json(enrollment);
};

const getEnrollments = async (req, res) => {
    const enrollments = await Enrollment.find({ student_id: req.params.student_id }).populate('course_id');
    res.json(enrollments);
};

module.exports = { enrollStudent, getEnrollments };
