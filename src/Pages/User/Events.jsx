import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import Timeline from "../../Components/Events/Timeline";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .MuiContainer-root": {
    paddingTop: "10px",
    paddingBottom: "80px",
    "& .pageHeader": {
      margin: "20px 0 30px 0",
      textAlign: "center",
      textTransform: "uppercase",
    },
  },
}));

const Events = () => {
  return (
    <Root>
      <Container>
        <div className="pageHeader">
          <h3>Events</h3>
        </div>
        <Timeline />
      </Container>
    </Root>
  );
};

export default Events;
