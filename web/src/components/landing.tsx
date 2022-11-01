import React from "react";
import { Link } from "react-router-dom";
import TwitterLogo from "../styles/assets/TwitterLogo.png";
import "../styles/landing.css";
import "../styles/uti.css";
function Landing() {
  return (
    <main style={{ backgroundColor: "#C5C5C5" }}>
      <div id="image-section" style={{ backgroundColor: "#808080" }}>
        <div></div>
        <svg></svg>
      </div>
      <section id="content-section" style={{ backgroundColor: "#d9d9d9" }}>
        <section id="content-section-wrapper">
          <svg></svg>
          <h1>Happening now</h1>
          <h3>Join Twitter today.</h3>
          <section></section>
        </section>
      </section>
    </main>
  );
}

export default Landing;
