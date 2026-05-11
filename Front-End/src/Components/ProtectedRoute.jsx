import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");

//   console.log("TOKEN IN ProtectedRoute:", token);

//   if (!token) {
//     console.log("NO TOKEN → redirecting to login");
//     return <Navigate to="/login" replace />;
//   }

//   console.log("TOKEN FOUND → rendering page");
//   return children;
// }

