import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import { TopEventsIcon } from "../../../UIElements/Icons";
import EventCard from "./EventCard";

const Root = styled("section")((theme) => ({
  paddingBottom: "30px",
  "& .sectionTitle": {
    fontSize: "18px",
    marginLeft: "16px",
    display: "flex",
  },
  "& .sectionTitle svg": {
    marginRight: "10px",
  },
  "& .MuiContainer-root": {
    padding: "0",
  },
  "& .BlogScroll": {
    overflowX: "auto",

    "& .MuiGrid-root": {
      flex: "0 0 auto",
      width: "85.666667%",
      maxWidth: "100%",
    },
    "& .MuiGrid-item": {
      paddingTop: 0,
      marginLeft: 10,
    },
    "& .MuiGrid-item:first-of-type": {
      marginLeft: 16,
    },
    "& .MuiGrid-item:last-of-type": {
      marginRight: 16,
    },
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
}));

const EventSection = () => {
  return (
    <Root>
      <Container>
        <Typography variant="p" mb={2} component="div" className="sectionTitle">
          <TopEventsIcon width="24" height="24" />
          Top Events
        </Typography>
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          className="BlogScroll"
        >
          {[...new Array(3)].map((item, index) => {
            return <EventCard key={index} />;
          })}
        </Grid>
      </Container>
    </Root>
  );
};

export default EventSection;
