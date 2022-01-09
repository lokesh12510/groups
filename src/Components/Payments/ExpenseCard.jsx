import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { PAYMENT_BG, PAYMENT_BG_FINE } from "../../UIElements/Images";
import moment from "moment";

const Root = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  marginBottom: "10px",
  borderRadius: "5px",
  overflow: "hidden",
  border: "1px solid #e8e8e8",
  "& .card-start": {
    display: "flex",
    padding: "10px",
    paddingLeft: "15px",
    alignItems: "center",
    "& .profileImage img": {
      borderRadius: "50%",
      marginRight: "10px",
      maxWidth: "40px",
      maxHeight: "40px",
      objectFit: "cover",
    },
    "& .paymentDetails .userName": {
      fontSize: "16px",
      textTransform: "capitalize",
      marginBottom: "0px",
    },
    "& .paymentDetails .date": {
      fontSize: "13px",
      margin: "0",
      color: "#828282",
    },
  },
  "& .card-end": {
    display: "grid",
    placeItems: "center",
    padding: "10px 15px 10px 35px",
    height: "50px",
    "& .amount": {
      fontSize: "18px",
      fontWeight: "bold",
      margin: 0,
      "& span": { fontSize: "13px" },
    },

    backgroundPosition: "2% 40%",
    backgroundSize: " 180px",
    backgroundRepeat: "no-repeat",
  },
  "& .card-end[data-fine=true]": {
    backgroundImage: `url("${PAYMENT_BG_FINE}")`,
  },
  "& .card-end[data-fine=false]": { backgroundImage: `url("${PAYMENT_BG}")` },
}));

const ExpenseCard = ({ expense }) => {
  return (
    <Root>
      <div className="card-start">
        <div className="paymentDetails">
          <Typography
            variant="p"
            gutterBottom
            component="div"
            className="userName"
          >
            {expense.event}
          </Typography>
          <Typography variant="p" gutterBottom component="div" className="date">
            {moment(expense?.createdAt).format('MMM D0 YYYY')}
          </Typography>
        </div>
      </div>
      <div className="card-end" data-fine={true}>
        <Typography variant="p" gutterBottom component="div" className="amount">
          ₹ {expense?.amount}
        </Typography>
      </div>
    </Root>
  );
};

export default ExpenseCard;
