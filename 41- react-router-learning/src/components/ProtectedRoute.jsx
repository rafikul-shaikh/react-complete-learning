import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loggedIn = false; // change to true to allow dashboard

  return loggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
