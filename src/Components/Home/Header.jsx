import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { GradientCard, MiniGradientCard } from "../../UIElements/Card";
import { BG_MINI_1, BG_VARIANT_2 } from "../../UIElements/Images";
import {
  DonationIcon,
  ExpenseIcon,
  MasterCardIcon,
  SavingsIcon,
} from "../../UIElements/Icons";
import { DefaultTheme } from "../../Constant";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { startLoader, stopLoader } from "../../redux/actions/Loader.action";

import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/actions/Message.actions";
import { GroupServices } from "../../Services/GroupServices";
import { useEffect } from "react";
import { updateGroup } from "../../redux/actions/Group.actions";

import { bounce } from "react-animations";

const bounceAnimation = `keyframes ${bounce}`;

const HeaderSection = styled("section")((theme) => ({
  paddingTop: "1px",
  background:
    "linear-gradient(180.65deg, #6CB9FF -60.63%, rgba(132, 135, 255, 0) 103.4%)",
  "& .currentUser": {
    textTransform: "Capitalize",
  },
  "& .card": {
    animation: `1s ${bounceAnimation}`,
    display: "block",
    width: "100%",
    padding: 0,
    borderRadius: "20px",
    color: "#fff",
    textAlign: "start",
    "& .cardIcon": { marginBottom: "14px" },
    filter: "drop-shadow(0px 13.9875px 29.1406px rgba(15, 51, 107, 0.25))",
    marginBottom: "20px",
  },
  "& .miniCard": {
    display: "block",
    width: "100%",
    padding: 0,
    borderRadius: "20px",
    "& .cardIcon": { marginBottom: "14px" },
    filter: " drop-shadow(0px 5.55px 12.6px rgba(15, 51, 107, 0.25))",
    marginBottom: "30px",
    "& .card_title": {
      color: DefaultTheme.palette.primary.main,
      lineHeight: "1",
    },
  },
}));
const ProfileImage = styled("img")((theme) => ({
  width: 36,
  height: 36,
  borderRadius: "50%",
  objectFit: "cover",
}));

const Header = () => {
  const user = useSelector((state) => state.user);
  const { groupInfo } = useSelector((state) => state.groups);

  return (
    <HeaderSection>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography
              variant="h5"
              mt={4}
              mb={4}
              component="div"
              className="currentUser"
            >
              Hi, {user.username}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton focusRipple component={Link} to={"/settings"}>
              <ProfileImage
                alt="avatar"
                src={user.profile.avatar}
                width="36"
                height="36"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Button className="card" waves="light">
          <GradientCard bg={BG_VARIANT_2}>
            <div className="cardIcon">
              <MasterCardIcon width="34" height="24" />
            </div>
            <Typography variant="overline" display="block">
              Total Balance
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
              ₹ {groupInfo?.balance}
            </Typography>
            <Typography variant="p" component="p">
              • • • • 0212
            </Typography>
          </GradientCard>
        </Button>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <Button
              className="miniCard"
              waves="light"
              component={Link}
              to="/savings"
            >
              <MiniGradientCard bg={BG_MINI_1}>
                <SavingsIcon width="48" height="44" />
                <Typography
                  variant="overline"
                  display="block"
                  className="card_title"
                >
                  Savings
                </Typography>
              </MiniGradientCard>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              className="miniCard"
              waves="light"
              component={Link}
              to="/expenses"
            >
              <MiniGradientCard bg={BG_MINI_1}>
                <ExpenseIcon width="48" height="46" />
                <Typography
                  variant="overline"
                  display="block"
                  className="card_title"
                >
                  Expenses
                </Typography>
              </MiniGradientCard>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              className="miniCard"
              waves="light"
              component={Link}
              to="/donation"
            >
              <MiniGradientCard bg={BG_MINI_1}>
                <DonationIcon width="48" height="45" />
                <Typography
                  variant="overline"
                  display="block"
                  className="card_title"
                >
                  Donation
                </Typography>
              </MiniGradientCard>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </HeaderSection>
  );
};

export default Header;
