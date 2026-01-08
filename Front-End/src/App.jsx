import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Turfs from "./Pages/Turf";
import BookTurf from "./Pages/BookTurfs";
import MyBookings from "./Pages/MyBookings";
import TurfDetails from "./Pages/TurfDetail";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
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
          path="/turf-details"
          element={
            <ProtectedRoute>
              <TurfDetails />
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

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
