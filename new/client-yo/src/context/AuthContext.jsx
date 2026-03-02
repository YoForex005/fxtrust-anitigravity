import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Initialize auth state
    useEffect(() => {
        const initAuth = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                try {
                    // Start checking if token is expired
                    const decoded = jwtDecode(storedToken);
                    const currentTime = Date.now() / 1000;

                    if (decoded.exp < currentTime) {
                        logout();
                    } else {
                        setToken(storedToken);
                        setIsAuthenticated(true);
                        // Fetch fresh user data
                        await fetchUserProfile(storedToken);
                    }
                } catch (error) {
                    console.error("Invalid token:", error);
                    logout();
                }
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    const fetchUserProfile = async (authToken) => {
        try {
            const response = await axios.get('/api/client/profile', {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            setUser(response.data.user);
        } catch (error) {
            console.error("Error fetching user profile:", error);
            // Don't logout here automatically to avoid loop if server error, 
            // but maybe set user to null or show error
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/client/login', {
                email,
                password
            });

            const { token, user } = response.data;

            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            setIsAuthenticated(true);

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('/api/client/register', userData);

            const { token, user } = response.data;

            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            setIsAuthenticated(true);

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Registration failed'
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
        // Optional: Redirect to login
        window.location.href = '/login';
    };

    const updateProfile = async (data) => {
        try {
            const response = await axios.put('/api/client/profile', data, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser({ ...user, ...response.data.user });
            return { success: true, message: 'Profile updated' };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Update failed'
            };
        }
    };

    const value = {
        user,
        token,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
