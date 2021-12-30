import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "40px",
    paddingBottom: "100px",
  },
}));

const Download = () => {
  return (
    <Root>
      <Container>Click below to download</Container>
    </Root>
  );
};

export default Download;
