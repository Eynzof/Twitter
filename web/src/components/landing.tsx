import React from "react";
import { Link } from "react-router-dom";
import twitterlogo from "../styles/assets/twitterlogo.png";
import "../styles/landing.css";
import "../styles/utility.css";
function Landing() {
  return (
    <main>
      <div id="image-section">
        <div></div>
      </div>
      <section id="content-section">
        <section id="content-section-wrapper">
          <nav>
            <img src={twitterlogo} alt="twitter.com" />
          </nav>
          <div id="heading1">
            <h1>Happening now</h1>
          </div>
          <h2 id="heading2">Join Twitter today.</h2>
          <section></section>
        </section>
      </section>
    </main>
  );
}

export default Landing;
