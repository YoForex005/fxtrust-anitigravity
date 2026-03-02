import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL,
});

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const login = async (email, password) => {
    const response = await api.post('/client/login', { email, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const fetchUsers = async () => {
    const response = await api.get('/admin/users');
    return response.data;
};

export const fetchUserDetail = async (id) => {
    const response = await api.get(`/admin/users/${id}`);
    return response.data;
};

export const fetchDashboardStats = async () => {
    const response = await api.get('/admin/stats');
    return response.data;
};

export const updateUser = async (id, userData) => {
    const token = localStorage.getItem('token');
    const response = await api.put(`/admin/users/${id}`, userData);
    return response.data;
};

export const deleteUser = async (id) => {
    const token = localStorage.getItem('token');
    const response = await api.delete(`/admin/users/${id}`);
    return response.data;
};

export default api;
