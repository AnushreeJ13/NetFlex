import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth'; // Change to your backend URL in production

export const signup = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { email, password });
        return response.data; // This will return the token or any other data from the response
    } catch (error) {
        throw error.response.data; // Handle error appropriately
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data; // This will return the token or any other data from the response
    } catch (error) {
        throw error.response.data; // Handle error appropriately
    }
};
