import React from "react";
import { Link } from "react-router-dom";
import twitterlogo from "../styles/assets/twitterlogo.png";
import "../styles/landing.css";
import "../styles/utility.css";
function Landing() {
  return (
    <main style={{ backgroundColor: "#C5C5C5" }}>
      <div id="image-section">
        <div></div>
      </div>
      <section id="content-section" style={{ backgroundColor: "#d9d9d9" }}>
        <section id="content-section-wrapper">
          <nav>
            <img src={twitterlogo} alt="twitter.com" />
          </nav>
          <h3>Happening now</h3>
          <h3>Join Twitter today.</h3>
          <section></section>
        </section>
      </section>
    </main>
  );
}

export default Landing;
