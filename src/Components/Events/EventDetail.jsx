import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, IconButton, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
          src={blogList[path].image}
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
