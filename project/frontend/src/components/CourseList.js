import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await axios.get('/api/courses');
            setCourses(response.data);
        };
        fetchCourses();
    }, []);

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        {course.title} - {course.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
