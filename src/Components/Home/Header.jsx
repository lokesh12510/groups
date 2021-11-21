import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import { GradientCard, MiniGradientCard } from "../../UIElements/Card";
import { BG_MINI_1, BG_VARIANT_2 } from "../../UIElements/Images";
import {
  DonationIcon,
  ExpenseIcon,
  MasterCardIcon,
  SavingsIcon,
} from "../../UIElements/Icons";
import { DefaultTheme } from "../../Constant";

const HeaderSection = styled("section")((theme) => ({
  paddingTop: "1px",
  background:
    "linear-gradient(180.65deg, #6CB9FF -60.63%, rgba(132, 135, 255, 0) 103.4%)",
  "& .card": {
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

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Typography variant="h5" mt={4} mb={4} component="div">
          Hi, Adam
        </Typography>
        <Button className="card" waves="light">
          <GradientCard bg={BG_VARIANT_2}>
            <div className="cardIcon">
              <MasterCardIcon width="34" height="24" />
            </div>
            <Typography variant="overline" display="block">
              Total Balance
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
              ₹ 55,340.23
            </Typography>
            <Typography variant="p" component="p">
              • • • • 0212
            </Typography>
          </GradientCard>
        </Button>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <Button className="miniCard" waves="light">
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
            <Button className="miniCard" waves="light">
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
            <Button className="miniCard" waves="light">
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
