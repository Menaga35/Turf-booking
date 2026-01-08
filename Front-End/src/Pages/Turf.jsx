import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../css/turf.css";

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
    sports: ["Cricket"],
    time: "05:00 AM - 10:00 PM",
    image: "https://i.postimg.cc/7Z0Y3N7m/turf4.jpg",
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
    image: "https://i.postimg.cc/9Q2B9nV0/turf6.jpg",
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
    image:
      "https://turftown.in/chennai/sports-venue/y-square-multisports-turf-morai-cricket",
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
    image: "https://i.postimg.cc/6qMfDhRg/turf12.jpg",
  },
  {
    id: 13,
    name: "Olympic Turf",
    sports: ["Football", "Cricket"],
    time: "06:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/T3vM4Qy5/turf13.jpg",
  },
  {
    id: 14,
    name: "Victory Park",
    sports: ["Cricket"],
    time: "05:30 AM - 10:30 PM",
    image: "https://i.postimg.cc/Zqv1QZgF/turf14.jpg",
  },
  {
    id: 15,
    name: "Elite Sports Arena",
    sports: ["Football"],
    time: "06:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/6XzN7Bhv/turf15.jpg",
  },
  {
    id: 16,
    name: "Pro Champions Turf",
    sports: ["Football", "Cricket"],
    time: "06:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/N0T9g6yw/turf16.jpg",
  },

  // New 10 turfs
  {
    id: 17,
    name: "Galaxy Champions",
    sports: ["Football"],
    time: "06:00 AM - 10:00 PM",
    image: "https://i.postimg.cc/8kFh8KJz/turf17.jpg",
  },
  {
    id: 18,
    name: "Champion Sports Arena",
    sports: ["Cricket"],
    time: "05:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/Xv5q0XgR/turf18.jpg",
  },
  {
    id: 19,
    name: "Elite Victory Ground",
    sports: ["Football", "Cricket"],
    time: "06:00 AM - 11:00 PM",
    image: "https://i.postimg.cc/c49G9n6H/turf19.jpg",
  },
  {
    id: 20,
    name: "Pro Star Arena",
    sports: ["Football"],
    time: "06:00 AM - 10:30 PM",
    image: "https://i.postimg.cc/QC4HJr0x/turf20.jpg",
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
