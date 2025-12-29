import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/home.css";
import Footer from "../Components/Footer";

// Slider images
const images = [
  "https://i.postimg.cc/d3419ZFZ/home1.png",
  "https://i.postimg.cc/Cx0P8Z1v/home2.png",
  "https://i.postimg.cc/Gt1YfyZh/home3.png",
];

// Featured turfs data
const turfs = [
  {
    name: "Kovai Arena",
    sports: ["Football", "Cricket"],
    hours: "06:00 AM – 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724306203/TurfSpot/turfs/u0r1n2aybvxstgn8ke4m.jpg",
  },
  {
    name: "Arena 18 Turf",
    sports: ["Cricket", "Football"],
    hours: "06:00 AM – 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724306481/TurfSpot/turfs/k0hphsic4vhh6n1gorhb.webp",
  },
  {
    name: "A1 Sports Arena",
    sports: ["Football"],
    hours: "06:00 AM – 10:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724306842/TurfSpot/turfs/jczkfltxxkhgcbbvsxl7.jpg",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // ✅ Define goToTurfs properly
  const goToTurfs = () => navigate("/turfs");

  return (
    <>
      <Navbar />

      <div className="home-page">
        <div className="home-container">
          <div className="hero-left">
            <h1>Welcome to TurfSpot</h1>
            <p>
              Discover and book the best turf fields in your area. Whether
              you're
              <br />
              planning a casual game or a tournament, TurfSpot has got you
              <br />
              covered.
            </p>
            <button className="btn-get-started" onClick={goToTurfs}>
              Get Started
            </button>
          </div>

          <div className="hero-right">
            <div className="slider">
              <button className="arrow left" onClick={prevSlide}>
                &#10094;
              </button>

              <img src={images[current]} alt="Turf" className="slider-image" />

              <button className="arrow right" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Turfs */}
      <div className="featured-turfs">
        <h2>Featured Turfs</h2>

        <div className="turf-cards">
          {turfs.map((turf, index) => (
            <div className="turf-card" key={index}>
              <img src={turf.image} alt={turf.name} />
              <h3>{turf.name}</h3>

              <div className="sports-tags">
                {turf.sports.map((sport, i) => (
                  <span key={i} className="sport-tag">
                    {sport}
                  </span>
                ))}
              </div>

              <p>Open: {turf.hours}</p>

              <button
                className="btn-view-details"
                onClick={() => navigate("/turf-details", { state: turf })}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="view-more">
          <button className="btn-view-details" onClick={goToTurfs}>
            View More Turfs
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
