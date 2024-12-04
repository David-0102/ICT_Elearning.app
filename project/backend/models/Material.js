const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    file_name: { type: String, required: true },
    file_url: { type: String, required: true },
    uploaded_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Material', materialSchema);
