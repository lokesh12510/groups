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

const Template = () => {
  return (
    <Root>
      <Container></Container>
    </Root>
  );
};

export default Template;
