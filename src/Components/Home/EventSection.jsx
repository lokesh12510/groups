import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import { TopEventsIcon } from "../../UIElements/Icons";
import EventCard from "../Events/EventCard";
import { useSelector } from "react-redux";

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
  const { blogList } = useSelector((state) => state.events);

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
    year: 2019,
    title: "Kids Motivation",
    date: "28th Dec",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
    desc1:
      "In order to motivate the kids, Thambatty Vivekanandar Illaignar Narpani Mandram organized three games as a start up for the new society club at Thambatty. Many kids from the village participated and the prizes were distributed by the elder people from Thambatty. Carrom, chess, Badminton was conducted.",
    desc2: "Place: Thambatty Date: 28/12/2019",
  },
  {
    id: 2,
    year: 2021,
    title: "Prize distribution",
    date: "24th Jan",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1641486582/avatars/zon75vigjtkxeka8qybo.jpg",
    desc1:
      "In order to brush up the kids extra curricular activity skills, few competitions were held and the prizes were distributed. This competition made sure many of the kids from different classes participated and bagged the prizes.",
    desc2: "DATE: Jan 24, 2021.VENUE: Thambatty",
  },
  {
    id: 3,
    year: 2021,
    title: "Covid Precautions",
    date: "24th May",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1641486717/avatars/w9zrldridc5paca90wfl.jpg",
    desc1:
      "During the time of Covid, the team was working for the better and healthy life of the village people. Providing Kabasura kudineer was carried out effectively. With a proper procedure, and support from the team, it was done successfully for few weeks.",
    desc2: "DATE: May, 2021.VENUE: Thambatty",
  },

  {
    id: 4,
    year: 2020,
    title: "Society club Event",
    date: "27th May",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1641486905/avatars/nr13kxqn5nje2dfyg08m.jpg",
    desc1:
      "In order to keep the village, free from plastics, we as a team have taken a vow to collect plastics from each home weekly and this work was brought into act. Girls and boys joining their service hands together, to be together, to make sure that Thambatty is free from plastics.",
    desc2: "DATE: May 27, 2020.VENUE: Thambatty",
  },
];
