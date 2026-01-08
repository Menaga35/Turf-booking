import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import "../css/details.css";

export default function TurfDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No Turf Data Found</h2>;
  }

  const reviews = [
    { user: "A", rating: 5, comment: "Excellent turf!", date: "Dec 25, 2025" },
    { user: "R", rating: 4, comment: "Good experience.", date: "Dec 18, 2025" },
    { user: "S", rating: 5, comment: "Best turf!", date: "Dec 10, 2025" },
    { user: "K", rating: 4, comment: "Nice turf.", date: "Dec 05, 2025" },
    {
      user: "M",
      rating: 5,
      comment: "Loved the atmosphere.",
      date: "Nov 29, 2025",
    },
    {
      user: "P",
      rating: 4,
      comment: "Parking could be better.",
      date: "Nov 20, 2025",
    },
    {
      user: "J",
      rating: 5,
      comment: "One of the best turfs!",
      date: "Nov 15, 2025",
    },
  ];

  const INITIAL_COUNT = 5;
  const LOAD_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const loadMore = () => setVisibleCount((prev) => prev + LOAD_COUNT);
  const showLess = () => setVisibleCount(INITIAL_COUNT);

  return (
    <>
      <Navbar />

      <div className="turf-details-container">
        <div className="turf-image-box">
          <img src={state.image} alt={state.name} />
          <div className="image-overlay">
            <h2>{state.name}</h2>
            <p>📍 Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="turf-info-box">
          <h3>Rating ⭐⭐⭐⭐☆ (4.1)</h3>
          <p className="description">
            {state.name} hosts semi-professional games and provides excellent
            sports facilities.
          </p>

          <div className="info-grid">
            <div>
              <strong>💰 Price per Hour</strong>
              <p>₹ 980</p>
            </div>
            <div>
              <strong>⚽ Sports</strong>
              <p>{state.sports.join(", ")}</p>
            </div>
            <div>
              <strong>⏰ Open Time</strong>
              <p>06:00 AM</p>
            </div>
            <div>
              <strong>⏰ Close Time</strong>
              <p>11:00 PM</p>
            </div>
          </div>

          <button
            className="reserve-btn"
            onClick={() =>
              navigate(`/book/${state._id}`, { state: { turf: state } })
            }
          >
            Reserve Now
          </button>
        </div>
      </div>

      <div className="turf-extra-info">
        <div className="about-turf">
          <h2>About {state.name}</h2>
          <p>
            {state.name} is a premium artificial turf designed for football and
            cricket enthusiasts. The turf is well maintained with high-quality
            flood lights, smooth surface, and safety standards.
          </p>

          <ul>
            <li>⚽ Sports: {state.sports.join(", ")}</li>
            <li>🌱 Surface: Artificial Grass</li>
            <li>🏟️ Size: 7s</li>
            <li>💡 Flood Lights Available</li>
            <li>🚗 Parking Available</li>
          </ul>
        </div>

        <div className="contact-turf">
          <h2>Contact</h2>
          <p>+91 98765 43210</p>
          <p>{state.name.toLowerCase()}@gmail.com</p>
          <p>Coimbatore, Tamil Nadu</p>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Reviews</h2>

        {reviews.slice(0, visibleCount).map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-left">
              <div className="avatar">{review.user}</div>
            </div>
            <div className="review-right">
              <div className="review-header">
                <div className="stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <p className="review-text">{review.comment}</p>
            </div>
          </div>
        ))}

        <div className="review-actions">
          {visibleCount < reviews.length && (
            <button onClick={loadMore} className="load-more-btn">
              Load More
            </button>
          )}
          {visibleCount > INITIAL_COUNT && (
            <button onClick={showLess} className="show-less-btn">
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
}
