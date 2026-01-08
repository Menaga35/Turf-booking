import "../CSS/about.css";

export default function TurfAboutContact({ turf }) {
  return (
    <div className="turf-info-container">
      {/* ABOUT TURF */}
      <section className="turf-about">
        <h2>About {turf.name}</h2>
        <p>{turf.description}</p>

        <ul>
          <li>
            <strong>Sports:</strong> {turf.sports.join(", ")}
          </li>
          <li>
            <strong>Surface:</strong> {turf.surface}
          </li>
          <li>
            <strong>Size:</strong> {turf.size}
          </li>
          <li>
            <strong>Opening Hours:</strong> {turf.openingHours}
          </li>
        </ul>
      </section>

      {/* CONTACT TURF */}
      <section className="turf-contact">
        <h2>Contact</h2>
        <p>📞 {turf.phone}</p>
        <p>📧 {turf.email}</p>
        <p>📍 {turf.address}</p>
      </section>
    </div>
  );
}
