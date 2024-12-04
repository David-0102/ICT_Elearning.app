const express = require('express');
const { enrollStudent, getEnrollments } = require('../controllers/enrollmentController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, enrollStudent);
router.get('/:student_id', auth, getEnrollments);

module.exports = router;
