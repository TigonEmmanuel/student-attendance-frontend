import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [userCode, setUserCode] = useState(""); // Empty by default
  const [error, setError] = useState(""); // State to store error messages

  const validStudentCode = "12345"; // Hardcoded valid student code for now

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the entered student code
    if (userCode !== validStudentCode) {
      setError("Invalid Student Code. Please try again.");
      return;
    }

    setError(""); // Clear error if login is successful
    onLogin(userCode); // Proceed with login
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Student Code"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          
          {/* Show error message if invalid */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          
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

export default LoginForm;
