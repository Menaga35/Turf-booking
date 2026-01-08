import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar"; // make sure the path is correct
import "../css/bookTurf.css";

export default function BookTurf() {
  const { state } = useLocation();

  if (!state?.turf) {
    return <h2 style={{ textAlign: "center" }}>No Booking Data</h2>;
  }

  const { turf } = state;
  const pricePerHour = 800;

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState(1);

  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  const changeDate = (days) => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + days);
    setSelectedDate(date.toISOString().split("T")[0]);
    setSelectedTime(null);
  };

  const parseTime = (time) => {
    const [t, meridian] = time.split(" ");
    let [hours] = t.split(":");
    hours = parseInt(hours);

    if (meridian === "PM" && hours !== 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;

    return hours;
  };

  const formatTime = (hour) => {
    const h = hour % 24;
    const meridian = h >= 12 ? "PM" : "AM";
    const display = h % 12 === 0 ? 12 : h % 12;
    return `${String(display).padStart(2, "0")}:00 ${meridian}`;
  };

  const getEndTime = () => {
    if (!selectedTime) return "";
    return formatTime(parseTime(selectedTime) + duration);
  };

  const handleConfirm = () => {
    if (!selectedTime) return;

    const booking = {
      turfName: turf.name,
      date: selectedDate,
      startTime: selectedTime,
      endTime: getEndTime(),
      duration,
      price: pricePerHour * duration,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert("Booking Confirmed!");

    setSelectedTime(null);
    setDuration(1);
  };

  return (
    <>
      <Navbar />
      <div className="booking-wrapper">
        <h2 className="booking-title">Reserve Turf</h2>

        <div className="booking-card">
          <div className="date-section">
            <label>Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div className="date-actions">
              <button onClick={() => changeDate(-1)} disabled>
                PREV DATE
              </button>
              <span className="active-date">
                {new Date(selectedDate).toLocaleDateString("en-GB")}
              </span>
              <button onClick={() => changeDate(1)}>NEXT DATE</button>
            </div>
          </div>

          {/* TIME SLOTS */}
          <div className="time-section">
            <h3>Select Start Time</h3>
            <div className="time-grid">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedTime(time);
                    setDuration(1);
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* DURATION */}
          {selectedTime && (
            <div className="duration-section">
              <h3>Select Duration</h3>
              <div className="duration-cards">
                {[1, 2, 3].map((hr) => (
                  <button
                    key={hr}
                    className={`duration-card ${
                      duration === hr ? "active" : ""
                    }`}
                    onClick={() => setDuration(hr)}
                  >
                    <strong>
                      {hr} hour{hr > 1 && "s"}
                    </strong>
                    <span>
                      {selectedTime} to{" "}
                      {formatTime(parseTime(selectedTime) + hr)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SUMMARY */}
          {selectedTime && (
            <div className="summary-box">
              <h3>Your Reservation</h3>
              <p>Date: {new Date(selectedDate).toLocaleDateString("en-GB")}</p>
              <p>
                Time: {selectedTime} to {getEndTime()}
              </p>
              <p>Duration: {duration} hour(s)</p>
              <p className="price">Price: {pricePerHour * duration} INR</p>
            </div>
          )}

          {/* CONFIRM */}
          <button
            className="confirm-btn"
            disabled={!selectedTime}
            onClick={handleConfirm}
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </>
  );
}
