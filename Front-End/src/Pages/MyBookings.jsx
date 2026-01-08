import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../css/myBooking.css";

export default function MyBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const clearBookings = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  if (bookings.length === 0) {
    return (
      <>
        <Navbar />
        <div className="mybooking-empty">
          <h2>No bookings yet!</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mybooking-wrapper">
        <h2>My Booking History</h2>

        <button className="clear-btn" onClick={clearBookings}>
          Clear All Bookings
        </button>

        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div className="booking-card" key={index}>
              <p>
                <strong>Turf:</strong> {booking.turfName}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(booking.date).toLocaleDateString("en-GB")}
              </p>
              <p>
                <strong>Time:</strong> {booking.startTime} - {booking.endTime}
              </p>
              <p>
                <strong>Duration:</strong> {booking.duration} hour(s)
              </p>
              <p>
                <strong>Price:</strong> {booking.price} INR
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
