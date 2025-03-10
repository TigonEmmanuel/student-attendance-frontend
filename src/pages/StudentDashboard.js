import { useContext } from "react";
import { AttendanceContext } from "../context/AttendanceContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const { attendanceRecords } = useContext(AttendanceContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Filter attendance by logged-in student
  const studentRecords = attendanceRecords.filter((record) => record.name === user?.code);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-4 shadow-md rounded-md mt-6">
        <h2 className="text-xl font-bold mb-2">Your Attendance Records</h2>
        {studentRecords.length > 0 ? (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Date</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {studentRecords.map((record, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{record.date}</td>
                  <td className={`border p-2 ${record.status === "Present" ? "text-green-500" : "text-red-500"}`}>
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No attendance records found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
