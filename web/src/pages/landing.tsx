import { Navigate, useNavigate } from "react-router-dom";
import applelogo from "../styles/assets/icons8-apple-logo-60.png";
import twitterlogo from "../styles/assets/twitterlogo.png";
import "../styles/landing.css";
import "../styles/utility.css";
function Landing() {
  const navigate = useNavigate();
  return (
    <>
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
              <h1 style={{ fontSize: "70px" }}>Happening now</h1>
            </div>
            <h2 id="heading2">Join Twitter today.</h2>
            <section
              id="login-section"
              className="w-70 d-flex flex-column align-items-center"
              style={{
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
              <div className="or d-flex " style={{ position: "relative" }}>
                <hr className="hr1" style={{ width: "110px" }} />
                <h6 className="mt-1 px-1"> or </h6>
                <hr className="hr2" style={{ width: "110px" }} />
              </div>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="button1 py-1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "13.33px",
                  backgroundColor: "rgb(29, 155, 240)",
                  fontWeight: "normal",
                  width: "90%",
                }}>
                Sign up with phone or email
              </button>

              <p
                className="mb-2"
                style={{
                  color: "#7c7b7b",
                  fontSize: "12px",
                  paddingLeft: "20px",
                }}>
                By signing up, you agree to the
                <a href="/terms-of-service" style={{ color: "#1d9bf0" }}>
                  {" "}
                  Terms of Service
                </a>{" "}
                and
                <a href="/privacy-policy" style={{ color: "#1d9bf0" }}>
                  {" "}
                  Privacy Policy{" "}
                </a>
                , including
                <a href="/cookie-use" style={{ color: "#1d9bf0" }}>
                  {" "}
                  Cookie Use.
                </a>
              </p>
              <h4 style={{ fontSize: "16px" }}>Already have an account?</h4>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="button2 py-1"
                style={{
                  backgroundColor: "white",
                  fontWeight: "normal",
                  color: "rgb(29,155,240)",
                  marginBottom: "9px",
                  border: "0.5px solid #c1d8f4",
                  fontSize: "14px",
                  width: "90%",
                }}>
                Sign in
              </button>
            </section>
          </section>
        </section>
      </main>
      <footer id="footer">
        <ul>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Help Center</li>
          </a>
          <a href="">
            <li>Terms of Service</li>
          </a>
          <a href="">
            <li>Privacy Policy</li>
          </a>
          <a href="">
            <li>Cookie Policy</li>
          </a>
          <a href="">
            <li>Accessibility</li>
          </a>
          <a href="">
            <li>Ads info</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Status</li>
          </a>
          <a href="">
            <li>Careers</li>
          </a>
          <a href="">
            <li>Brand Resources</li>
          </a>
          <a href="">
            <li>Advertising</li>
          </a>
          <a href="">
            <li>Marketing</li>
          </a>
          <a href="">
            <li>Twitter for Business</li>
          </a>
          <a href="">
            <li>Developers</li>
          </a>
          <a href="">
            <li>Directory</li>
          </a>
          <a href="">
            <li>Settings</li>
          </a>
          <span>
            {" "}
            <li>© 2022 Twitter, Inc.</li>{" "}
          </span>
        </ul>
      </footer>
    </>
  );
}

export default Landing;
