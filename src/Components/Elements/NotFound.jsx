import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import React from "react";
import image from "../../Assets/Images/NotFound.svg";

const NotFound = () => {
  return (
    <ImgDiv container alignItems={"center"}>
      <Grid item xs={12} container justifyContent={"center"}>
        <img width="300px" className="notFound" src={image} alt="not found" />
      </Grid>
    </ImgDiv>
  );
};

export default NotFound;

const ImgDiv = styled(Grid)({
  height: "420px",
});
