import axios from 'axios';

const API_URL = '/api';

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};

export const fetchCourses = async () => {
    return await axios.get(`${API_URL}/courses`);
};
