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
      <section id="content-section" className="d-flex h-100">
        <section
          id="content-section-wrapper"
          className="d-flex h-100 flex-column align-items-start justify-content-between">
          <nav style={{ height: "60px" }}>
            <img
              src={twitterlogo}
              alt="twitter.com"
              style={{
                height: "60px",
                paddingTop: "20px",
              }}
            />
          </nav>
          <div id="heading1">
            <h1>Happening now</h1>
          </div>
          <h2 id="heading2">Join Twitter today.</h2>
          <section
            id="login-section"
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "300px",
            }}>
            <div style={{ width: "90%" }}>
              <a
                className="signup-button d-flex justify-content-center mb-2 p-2"
                href="/login-g"
                style={{
                  border: "0.5px solid rgb(212, 211, 211)",
                  borderRadius: "20px",
                  color: "black",
                  fontSize: "0.875rem",
                }}>
                <img
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                    marginRight: "10px",
                  }}
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="google logo"
                />
                Sign up with Google
              </a>
            </div>
            <div style={{ width: "90%" }}>
              <a
                className="signup-button d-flex justify-content-center mb-2 p-2"
                href="/login-a"
                style={{
                  borderRadius: "20px",
                  border: "0.5px solid rgb(212, 211, 211)",
                  color: "black",
                  fontSize: "0.875rem",
                }}>
                <img
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                    marginRight: "10px",
                  }}
                  src={applelogo}
                  alt="apple logo"
                />
                Sign up with Apple
              </a>
            </div>
            <div className="or" style={{ position: "relative" }}>
              <hr
                className="hr1"
                style={{ width: "110px", position: "absolute", top: "10px" }}
              />
              <h6> or </h6>
              <hr
                className="hr2"
                style={{ width: "110px", position: "absolute", top: "30px" }}
              />
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
