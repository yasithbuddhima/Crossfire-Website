import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Auth
// Only when user is not logged in
export function AuthRoute({ children }) {
  const { currentUser, loading } = useAuth();
  //   TODO : Implement a better loading page
  if (loading)
    return <div className="flex justify-center p-10">Loading...</div>;

  if (currentUser) {
    // TODO: Show a message that the user is already logged in
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

// Team Dashboard
// Any Logged in user
export function TeamRoute({ children }) {
  const { currentUser, loading } = useAuth();
  //   TODO : Implement a better loading page
  if (loading)
    return <div className="flex justify-center p-10">Loading...</div>;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Admin Portal
// Logged user + admin
export function AdminRoute({ children }) {
  const { currentUser, isAdmin, loading } = useAuth();

  //   TODO : Implement a better loading page
  if (loading)
    return <div className="flex justify-center p-10">Loading...</div>;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    // TODO : Give a proper error
    return (
      <div className="text-center p-10 text-red-500 font-bold">
        Access Denied: Admin privileges required.
      </div>
    );
  }

  return children;
}
