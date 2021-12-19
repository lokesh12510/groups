import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../Payments/PaymentCard";
import { ViewOutlinedBtn } from "../../UIElements/Buttons";
import { Link } from "react-router-dom";

const Root = styled("section")((theme) => ({
  "& .sectionTitle": {
    fontSize: "18px",
    display: "flex",
  },
  "& .sectionTitle svg": {
    marginRight: "10px",
  },
  "& .transactionDate": { color: "#868686", fontSize: "12px" },
  paddingBottom: "100px",

  "& .MuiTypography-root": { fontFamily: "DM Sans, sans-serif" },
}));

const TransactionSection = () => {
  return (
    <Root>
      <Container>
        <Typography variant="p" mb={2} component="div" className="sectionTitle">
          <RecentTransaction width="24" height="24" />
          Recent Transaction
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

        {[...new Array(3)].map((item, index) => {
          return <PaymentCard key={index} />;
        })}
        <ViewOutlinedBtn variant="outlined" component={Link} to="/savings">
          View More
        </ViewOutlinedBtn>
      </Container>
    </Root>
  );
};

export default TransactionSection;
