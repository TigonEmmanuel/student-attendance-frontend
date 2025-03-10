import { createContext, useState, useEffect } from "react";
import { getAttendanceRecords, markAttendance } from "../services/attendanceService"; 

export const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  // ✅ Corrected fetch function using getAttendanceRecords
  const fetchAttendance = async () => {
    try {
      const response = await getAttendanceRecords(); // ✅ Call service function
      setAttendanceRecords(response); // ✅ Assuming response is an array
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  // ✅ Function to add attendance (including API call)
  const addAttendanceRecord = async (record) => {
    try {
      const newRecord = await markAttendance(record); // ✅ API call to save attendance
      setAttendanceRecords((prev) => [...prev, newRecord]); // ✅ Add to state
    } catch (error) {
      console.error("Error adding attendance:", error);
    }
  };

  return (
    <AttendanceContext.Provider value={{ attendanceRecords, addAttendanceRecord }}>
      {children}
    </AttendanceContext.Provider>
  );
};
