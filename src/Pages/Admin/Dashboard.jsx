import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
}));

const CardBtn = styled(Button)(({ theme, h, bg }) => ({
  padding: "20px",
  borderRadius: "20px",
  fontSize: "16px",
  minHeight: `${h}px`,
  marginBottom: "10px",
  backgroundColor: `${bg}`,
  "&:hover": {
    backgroundColor: `${bg}`,
  },
  "&:active": {
    backgroundColor: `${bg}`,
  },
}));

const Dashboard = () => {
  return (
    <Root>
      <Container>
        <h3>Hi Admin</h3>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="180"
              bg="#3f51b5"
              gutterBottom
              component={Link}
              to="/admin/manage-payments"
            >
              Manage Payments
            </CardBtn>
            <CardBtn
              fullWidth
              variant="contained"
              bg="#009688"
              h="130"
              gutterBottom
            >
              Manage Group
            </CardBtn>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="180"
              bg="#00b0ff"
              gutterBottom
            >
              Manage Expenses
            </CardBtn>
          </Grid>
          <Grid item xs={6}>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="130"
              bg="#ff7043"
              gutterBottom
            >
              Manage Members
            </CardBtn>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="180"
              bg="#673ab7"
              gutterBottom
            >
              Manage Blog
            </CardBtn>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="130"
              bg="#1de9b6"
              gutterBottom
            >
              Manage Donation
            </CardBtn>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Dashboard;
