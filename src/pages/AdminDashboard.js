import { useContext, useState } from "react";
import { AttendanceContext } from "../context/AttendanceContext";

const AdminDashboard = () => {
  const { attendanceRecords, addAttendanceRecord } = useContext(AttendanceContext);
  const [studentName, setStudentName] = useState("");
  const [status, setStatus] = useState("Present");

  const handleMarkAttendance = () => {
    if (!studentName) return alert("Enter student name!");

    const newRecord = {
      name: studentName,
      date: new Date().toISOString().split("T")[0], // Format date YYYY-MM-DD
      status,
    };
    addAttendanceRecord(newRecord);
    setStudentName("");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Mark Attendance Form */}
      <div className="bg-white p-4 shadow-md rounded-md mb-6">
        <h2 className="text-xl font-bold mb-2">Mark Attendance</h2>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button
          onClick={handleMarkAttendance}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Mark Attendance
        </button>
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-2">Attendance Records</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Student Name</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{record.name}</td>
                <td className="border p-2">{record.date}</td>
                <td className={`border p-2 ${record.status === "Present" ? "text-green-500" : "text-red-500"}`}>
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
