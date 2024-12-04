import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/courses', { title, description });
        // Handle response and redirect or update state
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" required />
            <button type="submit">Create Course</button>
        </form>
    );
};

export default CourseForm;
