import React from "react";
import { Link, useNavigate } from "react-router-dom";
import favicon from "../styles/assets/twitterlogo.png";
import "../styles/leftNav.css";
// import Logout from "./Logout"
// import Tweet from "./Tweet"

import { Box, Button, ButtonGroup, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBell,
  faEllipsis,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface buttons {
  text: string;
  icon: IconDefinition;
  path: string;
}

function LeftNav() {
  const buttons: buttons[] = [
    { text: "Home", icon: faHome, path: "/" },
    { text: "User", icon: faUser, path: "/users" },
    { text: "Message", icon: faEnvelope, path: "/" },
    { text: "Notify", icon: faBell, path: "/" },
    { text: "More", icon: faEllipsis, path: "/" },
  ];

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

        <ButtonGroup
          className="d-flex flex-column"
          size="lg"
          colorScheme="black"
          variant="ghost">
          {buttons.map(({ text, icon, path }) => (
            <Link key={text} to={path} style={{ marginLeft: "0" }}>
              <Button
                leftIcon={<FontAwesomeIcon fixedWidth size="lg" icon={icon} />}>
                <span
                  style={{
                    marginLeft: "12px",
                    fontSize: "20px",
                    fontWeight: "normal",
                  }}>
                  {text}
                </span>
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      </div>
      {/* <Tweet /> */}
      {/* <Logout /> */}
    </header>
  );
}

export default LeftNav;
