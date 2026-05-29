import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/turf.css";

const turfs = [
  {
    id: 1,
    name: "Kovai Arena",
    sports: ["Football", "Cricket"],
    time: "06:00 AM - 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724306203/TurfSpot/turfs/u0r1n2aybvxstgn8ke4m.jpg",
  },
  {
    id: 2,
    name: "Arena 18 Turf",
    sports: ["Cricket", "Football"],
    time: "06:00 AM - 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724306481/TurfSpot/turfs/k0hphsic4vhh6n1gorhb.webp",
  },
  {
    id: 3,
    name: "A1 Sports Arena",
    sports: ["Football"],
    time: "06:00 AM - 10:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724306842/TurfSpot/turfs/jczkfltxxkhgcbbvsxl7.jpg",
  },
  {
    id: 4,
    name: "Elite Turf Park",
    sports: ["Football"],
    time: "05:00 AM - 10:00 PM",
    image: "https://i.postimg.cc/rwjLPK89/elite.jpg",
  },
  {
    id: 5,
    name: "Pro Play Arena",
    sports: ["Football"],
    time: "06:00 AM - 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724909791/TurfSpot/turfs/qkzsgsek46rngsnup7em.jpg",
  },
  {
    id: 6,
    name: "Victory Sports Ground",
    sports: ["Football", "Cricket"],
    time: "06:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/KvKkFhK9/victory-sports.jpg",
  },
  {
    id: 7,
    name: "Champion Arena",
    sports: ["Football"],
    time: "05:30 AM - 10:30 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1725379597/TurfSpot/turfs/lbbqxbmjm4dhwflebyhk.jpg",
  },
  {
    id: 8,
    name: "Galaxy Turf",
    sports: ["Cricket"],
    time: "06:00 AM - 10:00 PM",
    image: "https://i.postimg.cc/05JGtMY5/galaxy.jpg",
  },
  {
    id: 9,
    name: "Premier Sports Park",
    sports: ["Football", "Cricket"],
    time: "06:00 AM - 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1725442168/TurfSpot/turfs/vtxjukqgdvvdrnjsy4e6.jpg",
  },
  {
    id: 10,
    name: "Star Arena",
    sports: ["Football"],
    time: "06:30 AM - 10:30 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1724479971/TurfSpot/turfs/espsvscif3ikrvxsdezt.jpg",
  },
  {
    id: 11,
    name: "Royal Turf",
    sports: ["Cricket"],
    time: "09:00 AM - 11:00 PM",
    image:
      "https://res.cloudinary.com/dezcso0p1/image/upload/v1755779249/TurfSpot/turfs/jzrpy8spapx3sflrcrwg.jpg",
  },
  {
    id: 12,
    name: "Infinity Arena",
    sports: ["Football"],
    time: "06:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/9XGRRGP1/infinity-areana.jpg",
  },
];

export default function Turf() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredTurfs = turfs.filter((turf) =>
    turf.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="turf-page">
        <div className="turf-wrapper">
          <div className="turf-header">
            <h1>Discover Turfs</h1>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search for turfs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>

          <div className="turf-grid">
            {filteredTurfs.map((turf) => (
              <div key={turf.id} className="turf-card">
                <img src={turf.image} alt={turf.name} />

                <div className="turf-content">
                  <h3>{turf.name}</h3>

                  <div className="tags">
                    {turf.sports.map((sport, i) => (
                      <span key={i}>{sport}</span>
                    ))}
                  </div>

                  <p className="time">Open: {turf.time}</p>

                  <button
                    className="details-btn"
                    onClick={() => navigate("/turf-details", { state: turf })}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
