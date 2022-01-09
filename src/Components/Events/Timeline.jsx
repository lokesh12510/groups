import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";
import { DefaultTheme } from "../../Constant";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .timeline_year": {
    marginBottom: "0px",
    "& .MuiTypography-overline": {
      fontSize: "16px",
    },
  },
}));

const TimelineCard = styled("div")((theme) => ({
  width: "100%",
  minHeight: "auto",
  padding: "0",
  margin: "0",
  transition: "all .4s ease",
  "& .timeStamp_Title": {
    display: "flex",
    alignItems: "center",
    "& .timeStamp": { margin: "0 3px" },
  },
  "& .strip": {
    width: ".1rem",
    background: DefaultTheme.palette.secondary.main,
    height: "100%",
    margin: "0 12px",
  },
  "& .dot": {
    width: "15px",
    background: DefaultTheme.palette.primary.main,
    height: "15px",
    borderRadius: "50%",
    margin: "6px",
  },
  "& .eventItem": {
    padding: "15px 0",
    "& .blogScroll_item": {
      flex: 1,
      maxWidth: "100%",
      filter: "drop-shadow(0px 2.94964px 5.66187px rgba(0, 0, 0, 0.2))",
    },
  },
}));

const Timeline = () => {
  return (
    <Root>
      {groupedData.map((item) => {
        return (
          <>
            <div className="timeline_year">
              <Typography variant="overline" display="block">
                {item[0]}
              </Typography>
            </div>
            {item[1].map((item, index) => {
              return (
                <TimelineCard key={index}>
                  <Grid container direction="row">
                    <Grid item className="timeStamp_Title" xs={12}>
                      <div className="dot"></div>
                      <div className="timeStamp">{item.date}</div>
                    </Grid>
                    <Grid item className="timeStrip" xs={1}>
                      <div className="strip"></div>
                    </Grid>
                    <Grid item className="eventItem" xs={11}>
                      <EventCard data={item} index={index} />
                    </Grid>
                  </Grid>
                </TimelineCard>
              );
            })}
          </>
        );
      })}
    </Root>
  );
};

export default Timeline;

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

// Group Timeline
function groupTimeline(list, key) {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

let [...groupedData] = new Map(
  Object.entries(groupTimeline(timelines, "year")).reverse()
);
