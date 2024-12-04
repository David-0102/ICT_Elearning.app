const express = require('express');
const { getCourses, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getCourses);
router.post('/', auth, createCourse);
router.put('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);

module.exports = router;
