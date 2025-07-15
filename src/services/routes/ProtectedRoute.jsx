import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/context/AuthContext";

export default function ProtectedRoute() {
  const { user, admin } = useAuth();

  return user || admin ? <Outlet /> : <Navigate to='/login' />;
}
