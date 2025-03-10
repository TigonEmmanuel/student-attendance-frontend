import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Adjust according to backend

// Admin login
export const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; // JWT token expected
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

// Student login (using student code)
export const loginStudent = async (studentCode) => {
  try {
    const response = await axios.post(`${API_URL}/student-login`, { code: studentCode });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

// Logout function (clear token)
export const logout = () => {
  localStorage.removeItem("authToken");
};
