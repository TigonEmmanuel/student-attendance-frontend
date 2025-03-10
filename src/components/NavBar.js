import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">School Management System</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/admin" className="hover:underline">Admin</Link></li>
          <li><Link to="/student" className="hover:underline">Student</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
