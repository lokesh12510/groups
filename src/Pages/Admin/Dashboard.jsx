import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPendingPayments } from "../../redux/actions/Payments.actions";
import { setDashboard } from "../../redux/actions/Group.actions";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "20px",
    paddingBottom: "100px",
  },
}));

const CardBtn = styled(Button)(({ theme, h, bg }) => ({
  flexDirection: "column",
  padding: "20px",
  borderRadius: "20px",
  fontSize: "16px",
  minHeight: `${h}px`,
  marginBottom: "10px",
  backgroundColor: `${bg}`,
  textAlign: "center",
  "&:hover": {
    backgroundColor: `${bg}`,
  },
  "&:active": {
    backgroundColor: `${bg}`,
  },
}));

const Dashboard = () => {
  const { dashboard } = useSelector((state) => state.dashboard);
  const { isFetched } = useSelector((state) => state.groups);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(setDashboard());
    }
  }, []);

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
              <h1>{dashboard.pendingPayments}</h1>
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
              component={Link}
              to="/admin/manage-expenses"
            >
              Manage Expenses
            </CardBtn>
          </Grid>
          <Grid item xs={6}>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="180"
              bg="#673ab7"
              gutterBottom
              disabled
            >
              Manage Events
            </CardBtn>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="130"
              bg="#ff7043"
              gutterBottom
              component={Link}
              to="/admin/manage-members"
            >
              <h1>{dashboard.groupMembers}</h1>
              Manage Members
            </CardBtn>
            <CardBtn
              fullWidth
              variant="contained"
              color="primary"
              h="130"
              bg="#1de9b6"
              gutterBottom
              component={Link}
              to="/admin/manage-donation"
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
