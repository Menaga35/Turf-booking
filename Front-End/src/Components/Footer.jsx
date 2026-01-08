import React from "react";
import "../CSS/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 TurfSpot. All rights reserved.</p>
      <p className="footer-text">
        Developed with <span className="heart">♥</span> by{" "}
        <span className="developer">Menaga Shanmugam</span>
      </p>
    </footer>
  );
}
