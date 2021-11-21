import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Button, Container, IconButton, Stack } from "@mui/material";
import { THANKS_IMAGE } from "../../UIElements/Images";
import { DefaultTheme } from "../../Constant";
import { Link } from "react-router-dom";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  background: DefaultTheme.palette.primary.main,
  color: "#fff",

  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
  "& .pageBottom": {
    textAlign: "center",
    marginBottom: "30px",
  },
}));

const ProfileImage = styled("img")((theme) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  objectFit: "cover",
}));

const Thankyou = () => {
  return (
    <Root>
      <Container>
        <div className="title">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h4 className="secondaryTitle">Hi Adam!</h4>
            <Link to="/profile">
              <IconButton focusRipple>
                <ProfileImage src="https://lh3.googleusercontent.com/ogw/ADea4I4uMKqSMw2XqG7DKA1gROd0gPOI9UoMZHe6Jnoa9w=s32-c-mo" />
              </IconButton>
            </Link>
          </Stack>

          <h2 className="sectionTitle">Registration success !</h2>
          <p>Thank you for joining to our family!</p>
        </div>
        <div className="bodyImage">
          <img src={THANKS_IMAGE} alt="" />
        </div>
        <div className="pageBottom">
          <p>
            Please wait for group admin’s confirmation <br /> to continue.
          </p>
        </div>
        <Link to="/">
          <Button
            variant="outlined"
            style={{ color: "#fff", borderColor: "#fff" }}
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Root>
  );
};

export default Thankyou;
