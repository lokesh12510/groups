import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .MuiContainer-root": {
    paddingTop: "40px",
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
