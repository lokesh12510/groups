import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";

// Styles
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

//ICONS
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupIcon from "@mui/icons-material/Group";
import TodayIcon from "@mui/icons-material/Today";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useSelector } from "react-redux";

const Appbar = (props) => {
  const [value, setValue] = useState("home");

  const location = useLocation();

  useEffect(() => {
    setValue(location.pathname.split("/")[1] || "home");
  }, [location.pathname]);

  const user = useSelector((state) => state.user);
  const groupAdmin = useSelector((state) => state.groups.isGroupAdmin);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Root className="root">
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          className="appbar"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab
            value="home"
            icon={
              location.pathname === "/" ? (
                <HomeIcon fontSize="medium" />
              ) : (
                <HomeOutlinedIcon fontSize="medium" color="#7BE8D8" />
              )
            }
            component={Link}
            to={"/"}
          />
          <Tab
            value="members"
            icon={
              location.pathname === "/members" ? (
                <GroupIcon fontSize="medium" />
              ) : (
                <GroupOutlinedIcon fontSize="medium" />
              )
            }
            component={Link}
            to={"/members"}
          />
          {user.isAdmin && (
            <Tab
              value="admin"
              icon={
                location.pathname.split("/")[1] === "admin" ? (
                  <AddCircleIcon fontSize="medium" />
                ) : (
                  <AddCircleOutlineIcon fontSize="medium" />
                )
              }
              component={Link}
              to={"/admin/dashboard"}
            />
          )}

          <Tab
            value="events"
            icon={
              location.pathname === "/events" ? (
                <TodayIcon fontSize="medium" />
              ) : (
                <EventOutlinedIcon fontSize="medium" />
              )
            }
            component={Link}
            to={"/events"}
          />
          <Tab
            value="payments"
            icon={
              location.pathname === "/payments" ? (
                <AccountBalanceIcon fontSize="medium" />
              ) : (
                <AccountBalanceOutlinedIcon fontSize="medium" />
              )
            }
            component={Link}
            to={"/payments"}
          ></Tab>
        </Tabs>
      </Container>
    </Root>
  );
};

export default Appbar;

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  position: "fixed",
  bottom: 10,
  left: 0,
  zIndex: "1051",

  "& .MuiContainer-root ": {
    padding: "0 10px",
  },
  "& .appbar": {
    height: 60,
    maxWidth: 500,
    margin: "auto",
    borderRadius: "15px",
    filter: "drop-shadow(0px 13.9875px 29.1406px rgba(15, 51, 107, 0.25))",
  },
  "& .MuiTabs-scroller": {
    boxShadow: "-8px 2px 56px -6px rgba(138,133,138,0.95)",
  },
  "& .MuiTab-root": {
    padding: "0 10px",
    fontSize: 12,
    minHeight: 60,
    minWidth: "unset",
    flex: 1,
    textTransform: "initial",
    backgroundColor: "#fff",
  },
  "& .MuiTab-root svg": { marginBottom: "5px" },
  "& .MuiTabs-flexContainer": { justifyContent: "center" },
  "& .MuiButtonBase-root": {
    fontFamily: "DM Sans, Sans-serif",
  },
}));

const ProfileImage = styled("img")(({ theme }) => ({
  width: 45,
  height: 45,
  borderRadius: "50%",
  objectFit: "cover",
  border: "1px solid #d3d3d3",
}));

const ProfileImageSrc = ({ src }) => (
  <ProfileImage src={src} width="45" height="45" loading="lazy" />
);
