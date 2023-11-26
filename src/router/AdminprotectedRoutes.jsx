import { Navigate } from "react-router-dom";

const AdminProtectedRoutes = ({ children, usuario }) => {
  if (usuario.role === "ADMIN_ROLE") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminProtectedRoutes;
