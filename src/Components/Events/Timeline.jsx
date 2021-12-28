import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";
import { DefaultTheme } from "../../Constant";

import Event4 from "../../Assets/Images/event4.jpg";
import Event3 from "../../Assets/Images/event3.jpg";

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
    year: 2020,
    title: "FOOTBALL LEAGUE- 4",
    date: "27th Dec",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
  },
  {
    id: 2,
    year: 2020,
    title: "Plastic Free Thambatty",
    date: "27th May",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
  },
  {
    id: 3,
    year: 2021,
    title: "Kids Motivational",
    date: "24th Jan",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
  },
  {
    id: 4,
    year: 2019,
    title: "Society club Event",
    date: "29th Dec",
    image:
      "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
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
