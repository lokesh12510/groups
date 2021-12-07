import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { APP_LOGO, STARTER_BG } from "../../UIElements/Images";
import { DefaultTheme } from "../../Constant";
import { PrimaryBtn, PrimaryOutlinedBtn } from "../../UIElements/Buttons";
import { Link } from "react-router-dom";

const BackgroundImg = styled("div")(() => ({
  background: "#fff",
  "& img": {
    width: "100%",
    height: "100%",
  },
  position: "absolute",
  top: "0px",
  left: "0px",
  zIndex: -1,
}));

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .MuiContainer-root": {
    paddingTop: "40px",
  },

  "& .title": {
    marginBottom: "100px",
  },

  "& .sectionTitle": {
    fontSize: "30px",
    marginBottom: "10px",
  },
  "& .secondaryTitle": {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#898989",
  },
  "& .page_footer": {
    textAlign: "center",
    fontSize: "14px",
    color: "#7A7A7A",
    "& span": {
      color: DefaultTheme.palette.primary.main,
    },
  },
  "& .cta_btns a": {
    textDecoration: "none",
  },
}));

const AppLogo = styled("div")((theme) => ({
  paddingBottom: "20px",
}));

const Onboard = () => {
  return (
    <Root>
      <BackgroundImg>
        <img src={STARTER_BG} alt="world map" />
      </BackgroundImg>

      <Container>
        <AppLogo>
          <img src={APP_LOGO} alt="logo" width="83px" height="83px" />
        </AppLogo>

        <div className="title">
          <h1 className="sectionTitle">
            SAVE LESS, <br />
            SERVE MORE!
          </h1>
          <p className="secondaryTitle">
            Together we bring the <br /> change
          </p>
        </div>

        <div className="cta_btns">
          <Link to="/create/register">
            <PrimaryBtn variant="contained">Create an Account</PrimaryBtn>
          </Link>
          <Link to="/create/login">
            <PrimaryOutlinedBtn variant="outlined">LOGIN</PrimaryOutlinedBtn>
          </Link>
        </div>
        <div className="page_footer">
          <p>
            By joining as member, you agree to our <br />
            <span>Terms and Conditions</span> and agree to
            <span> Privacy Policy</span>.
          </p>
        </div>
      </Container>
    </Root>
  );
};

export default Onboard;
