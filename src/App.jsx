// Public
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Public Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AdminRoute, TeamRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
// Teams
// schedule

// Team
// Dashbord

// Admin
// Admin Portal

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Team */}
        <Route
          path="/dashboard"
          element={
            <TeamRoute>
              <Dashboard />
            </TeamRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
