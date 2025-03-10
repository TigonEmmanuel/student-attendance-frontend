import axios from "axios";

const API_URL = "http://localhost:8080/api/students";

// Fetch all students
export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

// Add a new student
export const addStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, studentData);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    return null;
  }
};
