import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-2">
        <li><Link to="/admin" className="block p-2 hover:bg-gray-600">Dashboard</Link></li>
        <li><Link to="/admin/students" className="block p-2 hover:bg-gray-600">Manage Students</Link></li>
        <li><Link to="/admin/attendance" className="block p-2 hover:bg-gray-600">Attendance</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
