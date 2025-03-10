import { useState } from "react";

const AttendanceTable = ({ data }) => {
  const [sortBy, setSortBy] = useState("name"); // Sorting criteria
  const [filterStatus, setFilterStatus] = useState("All"); // Filtering criteria

  // Sorting function
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "date") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  // Filtering function
  const filteredData =
    filterStatus === "All" ? sortedData : sortedData.filter((record) => record.status === filterStatus);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Attendance Records</h2>

      {/* Sorting & Filtering Options */}
      <div className="flex justify-between mb-4">
        <select className="border p-2 rounded" onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
        </select>

        <select className="border p-2 rounded" onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      {/* Attendance Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 cursor-pointer">Student Name</th>
            <th className="border p-2 cursor-pointer">Date</th>
            <th className="border p-2 cursor-pointer">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((record, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
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
  );
};

export default AttendanceTable;
