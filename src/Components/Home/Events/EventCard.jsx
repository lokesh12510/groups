import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { BLOG_OVERLAY } from "../../../UIElements/Images";

import { DefaultTheme } from "../../../Constant";

const BlogCard = styled("div")((theme) => ({
  "& .blogCard": {
    position: "relative",
    width: "100%",
    height: "170px",
    padding: "0",
    textAlign: "start",
    borderRadius: "10px",
    overflow: "hidden",
    "& .MuiTouchRipple-root span": {
      backgroundColor: DefaultTheme.palette.secondary.main,
      opacity: 0.5,
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "5px",
    },
    "& .overlay": {
      width: "100%",
      height: "100%",
      backgroundImage: `url("${BLOG_OVERLAY}")`,
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "2",
      backgroundPosition: "center",
    },
    "& .blogContent": {
      position: "absolute",
      bottom: "10px",
      left: "15px",
      zIndex: "3",
      color: "#fff",
      "& .blogTitle": {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
      },
      "& .secondaryTitle": {
        fontSize: "12px",
        overflow: "ellipses",
        color: "#f5f5f5",
      },
    },

    "& .eventPosition": {
      width: "50px",
      position: "absolute",
      top: "20%",
      right: "15px",
      zIndex: "4",
      display: "grid",
      placeItems: "center",
      "& .count": {
        fontSize: "70px",
        fontWeight: "normal",
        color: DefaultTheme.palette.primary.main,
      },
    },
  },
}));

const EventCard = ({ count }) => {
  return (
    <Grid item xs={11}>
      <BlogCard>
        <Button className="blogCard" waves="light">
          <img
            src="https://img.etimg.com/thumb/msid-77734860,width-650,imgsize-951020,,resizemode-4,quality-100/sports_istock.jpg"
            alt=""
          />
          <div className="overlay"></div>
          <div className="blogContent">
            <Typography
              variant="p"
              gutterBottom
              component="div"
              className="blogTitle"
            >
              Sport’s Event 2021
            </Typography>
          </div>
          <div className="eventPosition">
            <div className="count">{count + 1}</div>
          </div>
        </Button>
      </BlogCard>
    </Grid>
  );
};

export default EventCard;
