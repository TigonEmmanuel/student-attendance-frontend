import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { AttendanceProvider } from "./context/AttendanceContext";

const App = () => {
  return (
    <AuthProvider>
      <AttendanceProvider>
        <AppRoutes />
      </AttendanceProvider>
    </AuthProvider>
  );
};

export default App;