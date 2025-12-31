import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Turfs from "./Pages/Turf";
import BookTurf from "./Pages/bookTurf";
import MyBookings from "./Pages/Mybooking";
import TurfDetails from "./Pages/turfDetails";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Turf details MUST be public (Reserve button handles auth) */}
        <Route path="/turf-details" element={<TurfDetails />} />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/turfs"
          element={
            <ProtectedRoute>
              <Turfs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book/:turfId"
          element={
            <ProtectedRoute>
              <BookTurf />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
