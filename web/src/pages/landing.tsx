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
      <section id="content-section" style={{ display: "flex", height: "100%" }}>
        <section
          id="content-section-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}>
          <nav style={{ height: "60px" }}>
            <img
              src={twitterlogo}
              alt="twitter.com"
              style={{
                height: "40px",
                paddingTop: "20px",
                paddingLeft: "10px",
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
                className="signup-button"
                href="/login-g"
                style={{
                  display: "flex",
                  border: "0.5px solid rgb(212, 211, 211)",
                  borderRadius: "20px",
                  marginBottom: "8px",

                  padding: "8px",
                  color: "black",
                  justifyContent: "center",
                  fontSize: "14px",
                }}>
                <img
                  style={{ width: "18px", marginRight: "10px" }}
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="google logo"
                />
                Sign up with Google
              </a>
            </div>
            <div style={{ width: "90%" }}>
              <a
                className="signup-button"
                href="/login-a"
                style={{
                  display: "flex",
                  border: "0.5px solid rgb(212, 211, 211)",
                  borderRadius: "20px",
                  padding: "8px",
                  color: "black",

                  justifyContent: "center",
                  fontSize: "14px",
                }}>
                <img
                  style={{
                    width: "18px",
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
