import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../UIElements/Buttons";
import { APP_LOGO } from "../../UIElements/Images";

const ResetPassword = () => {
  return (
    <Root>
      <Container>
        <HeaderSection>
          <Link to="/create/start">
            <Button
              className="backBtn"
              variant="text"
              startIcon={<ArrowBack />}
            >
              RESET PASSWORD
            </Button>
          </Link>
          <div className="pageLogo">
            <img src={APP_LOGO} alt="" />
          </div>
        </HeaderSection>
        <div className="title">
          <p className="secondaryTitle">
            Enter your Email ID to send link to reset password{" "}
          </p>
        </div>

        <TextField
          label="Email Id"
          placeholder="Enter email"
          fullWidth
          sx={{ mb: 5 }}
        />

        <PrimaryBtn>send link</PrimaryBtn>
      </Container>
    </Root>
  );
};

export default ResetPassword;

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  // background: `url(${BOTTOM_SVG}) no-repeat bottom left fixed`,
  zIndex: -1,

  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
  "& .backBtn": {
    color: "#000",
    fontSize: "18px",
  },

  "& .title": {
    marginBottom: "35px",
  },

  "& .pageLogo img": {
    width: "32px",
    height: "32px",
  },
  "& .secondaryTitle": {
    fontSize: "18px",
    color: "#000",
  },
  "& .formFields": { marginBottom: "30px" },
  "& .cta_btns a": {
    textDecoration: "none",
  },
  "& .dateInput": {
    "&::-webkit-calendar-picker-indicator": {
      display: "none",
      "-webkit-appearance": "none",
    },
  },
}));

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "20px",
}));
