import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [userCode, setUserCode] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userCode) return alert("Enter your login code!");

    const userData = { code: userCode, role };
    login(userData);

    // Redirect based on role
    if (role === "admin") navigate("/admin");
    else navigate("/student");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="text"
            placeholder="Enter Code"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
