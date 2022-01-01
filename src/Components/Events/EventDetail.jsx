import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, IconButton, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Event1 from "../../Assets/Images/event1.jpg"
import Event2 from "../../Assets/Images/event2.jpg"
import Event3 from "../../Assets/Images/event3.jpg"
import Event4 from "../../Assets/Images/event4.jpg"
import Event5 from "../../Assets/Images/event5.jpg"
import { APP_LOGO } from "../../UIElements/Images";

const Root = styled("div")((theme) => ({
  width: "100%",
  position: "relative",
  "& .MuiContainer-root": {
    paddingTop: "16px",
    paddingBottom: "80px",
    borderRadius: "20px 20px 0 0",
    transform: "translateY(-20px)",
    background: "#fff",
  },
  "& .eventTitle": { margin: "13px 0" },
  "& .eventImage img": {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    backgroundPosition: "center",
  },
  "& .eventContent": {
    color: "#646464",
  },
  "& .para": {
    marginBottom: "10px",
  },
}));

const BackBtn = styled(IconButton)((theme) => ({
  position: "absolute",
  top: "16px",
  left: "16px",
  background: "#fff",
  borderRadius: "7px",
  padding: "5px",
}));

const EventDetail = () => {
  const navigate = useNavigate();

  const {blogList} = useSelector(state => state.events)

  const location = useLocation()

  let path = location.pathname.split('/')[2]

  return (
    <Root>
      <BackBtn onClick={() => navigate(-1)}>
        <ArrowBack />
      </BackBtn>
      <div className="eventImage">
        <img
        style={{objectFit:'contain'}}
          src={APP_LOGO}
          alt=""
        />
      </div>
      <Container>
        <Typography
          className="eventTitle"
          variant="h6"
          component="p"
          gutterBottom
        >
          {blogList[path].title}
        </Typography>
        <div className="para">
          <Typography
            className="eventContent"
            variant="p"
            component="p"
            gutterBottom
          >
            {blogList[path].desc1}
          </Typography>
        </div>
        <div className="para">
          <Typography
            className="eventContent"
            variant="p"
            component="p"
            gutterBottom
          >
            {blogList[path].desc2}
          </Typography>
        </div>
      </Container>
    </Root>
  );
};

export default EventDetail;
