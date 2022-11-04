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
            <div style={{ height: "50px", width: "50px", padding: "13px" }}>
              <img src={favicon} alt="logo" style={{ width: "24px" }} />
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
              Home
            </Button>
          </Link>
          <Link to="/profile">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={<FontAwesomeIcon fixedWidth size="lg" icon={faUser} />}>
              User
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
              Messages
            </Button>
          </Link>
          <Link to="/users">
            <Button
              size="lg"
              colorScheme="black"
              variant="ghost"
              leftIcon={<FontAwesomeIcon fixedWidth size="lg" icon={faBell} />}>
              Notify
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
              More
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
