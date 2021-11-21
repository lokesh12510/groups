import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Styles
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

//ICONS
import { EventIcon, HomeIcon, MembersIcon } from "../../UIElements/Icons";

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
  backgroundSize: "cover",
}));

let profileImageSrc = (
  <ProfileImage
    src="https://lh3.googleusercontent.com/ogw/ADea4I4uMKqSMw2XqG7DKA1gROd0gPOI9UoMZHe6Jnoa9w=s32-c-mo"
    width="45"
    height="45"
    loading="lazy"
  />
);
const Appbar = () => {
  const [value, setValue] = React.useState(0);

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
          <Tab icon={<HomeIcon status={value} />} label="Home" />
          <Tab icon={<MembersIcon status={value} />} label="Members" />
          <Tab icon={<EventIcon status={value} />} label="Events" />
          <Tab icon={profileImageSrc} />
        </Tabs>
      </Container>
    </Root>
  );
};

export default Appbar;
