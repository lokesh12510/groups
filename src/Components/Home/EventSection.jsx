import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import { TopEventsIcon } from "../../UIElements/Icons";
import EventCard from "../Events/EventCard";

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
    webkitOverflowScrolling: "touch",
    scrollSnapType: "x mandatory",

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
    "& .blogScroll_item": {
      scrollSnapAlign: "center",
      scrollBehavior: "smooth",
      scrollSnapStop: "always",
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
          {timelines.map((item, index) => {
            return <EventCard key={index} index={index} data={item} />;
          })}
        </Grid>
      </Container>
    </Root>
  );
};

export default EventSection;

const timelines = [
  {
    id: 1,
    year: 2021,
    title: "Sports event 2021",
    date: "1st Nov",
    image:
      "https://img.etimg.com/thumb/msid-77734860,width-650,imgsize-951020,,resizemode-4,quality-100/sports_istock.jpg",
  },
  {
    id: 2,
    year: 2021,
    title: "Go Green 2021",
    date: "1st Jan",
    image:
      "https://img.etimg.com/thumb/msid-77734860,width-650,imgsize-951020,,resizemode-4,quality-100/sports_istock.jpg",
  },
  {
    id: 3,
    year: 2020,
    title: "Sports event 2020",
    date: "1st Nov",
    image:
      "https://img.etimg.com/thumb/msid-77734860,width-650,imgsize-951020,,resizemode-4,quality-100/sports_istock.jpg",
  },
  {
    id: 4,
    year: 2020,
    title: "Go Green 2020",
    date: "1st Nov",
    image:
      "https://img.etimg.com/thumb/msid-77734860,width-650,imgsize-951020,,resizemode-4,quality-100/sports_istock.jpg",
  },
];
