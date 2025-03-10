import axios from "axios";

const API_URL = "http://localhost:8080/api/attendance"; //  Spring Boot backend URL

// Fetch attendance records
export const getAttendanceRecords = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`); // 
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return [];
  }
};

// Mark student attendance
export const markAttendance = async (studentName, status) => {
  try {
    const response = await axios.post(`${API_URL}/mark`, { // 
      name: studentName,
      status,
      date: new Date().toISOString().split("T")[0],
    });
    return response.data;
  } catch (error) {
    console.error("Error marking attendance:", error);
    return null;
  }
};