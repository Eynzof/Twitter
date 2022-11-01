import React from "react";
import { Link } from "react-router-dom";
import twitterlogo from "../styles/assets/twitterlogo.png";
import applelogo from "../styles/assets/icons8-apple-logo-60.png";
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
          <section id="login-section">
            <a className="signup-g" href="/login-g">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google logo"
              />
              Sign up with Google
            </a>
            <a className="signup-a" href="/login-a">
              <img src={applelogo} alt="apple logo" />
              Sign up with Apple
            </a>
            <div className="or">
              <hr className="hr1" />
              <h6> or </h6>
              <hr className="hr2" />
            </div>
            <a href="/signup">
              <button className="button1">Sign up with phone or email</button>
            </a>

            <p>
              By signing up, you agree to the
              <a href="/terms-of-service"> Terms of Service</a> and
              <a href="/privacy-policy"> Privacy Policy </a>, including
              <a href="/cookie-use"> Cookie Use.</a>
            </p>
            <h4>Already have an account?</h4>
            <button className="button2">Sign in</button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Landing;
