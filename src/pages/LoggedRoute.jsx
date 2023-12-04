import { Navigate, Outlet } from "react-router-dom";

export default function LoggedRoute() {
    if (window.localStorage.getItem("pocketbase_auth"))
    return <Navigate to="/" replace />;
  return <Outlet />;
}
