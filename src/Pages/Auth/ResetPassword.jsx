import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  SET_MESSAGE,
  START_LOADER,
  STOP_LOADER,
} from "../../redux/actionTypes";
import { UserServices } from "../../Services/UserServices";
import { PrimaryBtn } from "../../UIElements/Buttons";
import { APP_LOGO } from "../../UIElements/Images";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const handleResetPassword = () => {
    UserServices.resetPassword(
      { emailId: email },
      () => {
        dispatch({
          type: START_LOADER,
        });
      },
      (data) => {
        setStatus(true);
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "Link sent to your emailID!",
            type: "success",
          },
        });
      },
      (error) => {
        console.log(error);
      },
      () => {
        dispatch({
          type: STOP_LOADER,
        });
      }
    );
  };

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
            Enter your Email ID to send link to reset password
          </p>
        </div>

        <TextField
          label="Email Id"
          placeholder="Enter email"
          fullWidth
          name="email"
          sx={{ mb: 5 }}
          onChange={({ target }) => setEmail(target.value)}
        />

        <PrimaryBtn onClick={handleResetPassword}>send link</PrimaryBtn>
        {status && (
          <>
            <Typography my={3}>
              Link sent to submitted email Id to change password.
            </Typography>
          </>
        )}
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
