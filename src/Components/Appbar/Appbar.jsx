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
import { EventIcon, HomeIcon, MembersIcon } from "../../UIElements/Icons";
import { useSelector } from "react-redux";

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
    borderRadius: "50px",
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
    "&:first-of-type": { borderRadius: "50px 0 0 50px" },
    "&:last-of-type": { borderRadius: "0 50px 50px 0" },
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

const Appbar = (props) => {
  const [value, setValue] = useState("");

  const location = useLocation();

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const user = useSelector((state) => state.user);

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
            icon={<HomeIcon status={value} />}
            label="Home"
            value="/"
            component={Link}
            to={"/"}
          />
          <Tab
            icon={<MembersIcon status={value} />}
            label="Members"
            value="/members"
            component={Link}
            to={"/members"}
          />
          <Tab
            icon={<EventIcon status={value} />}
            label="Events"
            value="/events"
            component={Link}
            to={"/events"}
          />
          <Tab
            icon={<ProfileImageSrc src={user.profile.avatar} />}
            value="/profile"
            component={Link}
            to={"/profile"}
          ></Tab>
        </Tabs>
      </Container>
    </Root>
  );
};

export default Appbar;
