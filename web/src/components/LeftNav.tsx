import React from "react";
import { Link } from "react-router-dom";
import favicon from "../styles/assets/twitterlogo.png";
import "../styles/leftNav.css";
// import Logout from "./Logout"
// import Tweet from "./Tweet"

import { Box, Button, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBell,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

function LeftNav() {
  return (
    <header style={{ width: "236px", float: "right" }}>
      <div className="d-flex flex-column ">
        <div>
          <Link to="/users">
            <div
              style={{
                height: "50px",
                width: "50px",
                padding: "11px",
                marginLeft: "14px",
              }}>
              <img src={favicon} alt="logo" style={{ width: "28px" }} />
            </div>
          </Link>
        </div>
        <VStack align="stretch">
          <Link to="/">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={<FontAwesomeIcon fixedWidth size="lg" icon={faHome} />}>
              <span style={{ marginLeft: "12px", fontSize: "20px" }}>Home</span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={<FontAwesomeIcon fixedWidth size="lg" icon={faUser} />}>
              <span style={{ marginLeft: "12px", fontSize: "20px" }}>User</span>
            </Button>
          </Link>
          <Link to="/users">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={
                <FontAwesomeIcon fixedWidth size="lg" icon={faEnvelope} />
              }>
              <span style={{ marginLeft: "12px", fontSize: "20px" }}>
                Message
              </span>
            </Button>
          </Link>
          <Link to="/users">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={<FontAwesomeIcon fixedWidth size="lg" icon={faBell} />}>
              <span style={{ marginLeft: "12px", fontSize: "20px" }}>
                Notify
              </span>
            </Button>
          </Link>
          <Link to="/users">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={
                <FontAwesomeIcon fixedWidth size="lg" icon={faEllipsis} />
              }>
              <span style={{ marginLeft: "12px", fontSize: "20px" }}>More</span>
            </Button>
          </Link>
        </VStack>
      </div>
      {/* <Tweet /> */}
      {/* <Logout /> */}
    </header>
  );
}

export default LeftNav;
