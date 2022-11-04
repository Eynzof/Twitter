import React from "react";
import { Link } from "react-router-dom";
import favicon from "../styles/assets/twitterlogo.png";
import "../styles/leftNav.css";
// import Logout from "./Logout"
// import Tweet from "./Tweet"

function LeftNav() {
  return (
    <header style={{ width: "236px", float: "right" }}>
      <div className="d-flex flex-column ">
        <div>
          <Link to="/users">
            <div style={{ height: "50px", width: "50px", padding: "13px" }}>
              <img src={favicon} alt="logo" style={{ width: "24px" }} />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h2>
              <i className="fa fa-home" aria-hidden="true" />{" "}
              <span className="title">Home</span>
            </h2>
          </Link>
          <Link to="/profile">
            <h2>
              <i className="fa fa-user" aria-hidden="true" />{" "}
              <span className="title">Profile</span>
            </h2>
          </Link>
          <Link to="/users">
            <h2>
              <i className="fa fa-envelope" aria-hidden="true" />{" "}
              <span className="title">Messages</span>
            </h2>
          </Link>
          <Link to="/users">
            <h2>
              <i className="fa fa-bell" aria-hidden="true" />{" "}
              <span className="title">Notify</span>
            </h2>
          </Link>
          <Link to="/users">
            <h2>
              <i className="fa fa-ellipsis-h" aria-hidden="true" />{" "}
              <span className="title">More</span>
            </h2>
          </Link>
        </div>
      </div>
      {/* <Tweet /> */}
      {/* <Logout /> */}
    </header>
  );
}

export default LeftNav;
