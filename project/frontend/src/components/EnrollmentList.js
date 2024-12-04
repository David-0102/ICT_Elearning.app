import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnrollmentList = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            const response = await axios.get(`/api/enrollments/${studentId}`); // Replace with actual student ID
            setEnrollments(response.data);
        };
        fetchEnrollments();
    }, []);

    return (
        <div>
            <h2>Your Enrollments</h2>
            <ul>
                {enrollments.map(enrollment => (
                    <li key={enrollment._id}>
                        {enrollment.course_id.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentList;
