import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import EventCard from "./EventCard";
import { Button, Grid, Typography } from "@mui/material";
import { DefaultTheme } from "../../Constant";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .timeline_year": {
    marginBottom: "12px",
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
      marginBottom: "14px",
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
    date: "14st Jan",
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
    date: "1st Jun",
    image:
      "https://img.etimg.com/thumb/msid-77734860,width-650,imgsize-951020,,resizemode-4,quality-100/sports_istock.jpg",
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
  