import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRoute() {
  const [user, setUser] = useState(false);

  return user ? <Outlet /> : <Navigate to='/login' />;
}
