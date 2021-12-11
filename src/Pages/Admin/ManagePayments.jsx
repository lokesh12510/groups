import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Button, Fab, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../../Components/Payments/PaymentCard";
import { GroupServices } from "../../Services/GroupServices";
import { useDispatch, useSelector } from "react-redux";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { useEffect } from "react";
import PaymentCardBtn from "../../Components/Payments/PaymentCardBtn";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .MuiContainer-root": {
    paddingBlock: "20px",
  },
}));

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  background: "#9fcfff",
  "& .backBtn": {
    color: "#000",
    fontSize: "18px",
    paddingInline: "0",
  },
  "& .fabBtn": {
    position: "absolute",
    top: "55px",
    right: "10px",
  },
}));

const PaymentContainer = styled(Container)({
  paddingBlock: "10px",
  "& .sectionTitle": {
    fontSize: "18px",
    display: "flex",
    gap: "15px",
  },
});

const ManagePayments = () => {
  const dispatch = useDispatch();

  const [payments, setPayments] = useState([]);

  const { currentGroupId } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);

  useEffect(() => {
    getPendingPayments(currentGroupId);
  }, []);

  const getPendingPayments = (currentGroupId) => {
    GroupServices.pendingPayments(
      {
        group_id: currentGroupId,
        status: "Unpaid",
      },
      () => dispatch(startLoader()),
      handlePaymentSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    setPayments(data.data.data);
  };

  const handleError = (err) => {
    console.log(err);
  };

  return (
    <Root>
      <HeaderSection>
        <Button
          component={Link}
          to="/admin/dashboard"
          className="backBtn"
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Payments
        </Button>
        <Fab color="primary" aria-label="add" className="fabBtn">
          <AddIcon />
        </Fab>
      </HeaderSection>
      <PaymentContainer>
        <Typography variant="p" mb={2} component="div" className="sectionTitle">
          <RecentTransaction width="24" height="24" />
          Recent Payments
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          mb={2}
          className="transactionDate"
        >
          Today, November 4th
        </Typography>

        {!loading &&
          payments.length > 0 &&
          payments.map((payment, index) => {
            return <PaymentCardBtn key={index} payment={payment} />;
          })}
      </PaymentContainer>
    </Root>
  );
};

export default ManagePayments;
