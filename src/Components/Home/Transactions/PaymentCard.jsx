import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { PAYMENT_BG, PAYMENT_BG_FINE } from "../../../UIElements/Images";

const Root = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  marginBottom: "10px",
  borderRadius: "5px",
  overflow: "hidden",
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
    },
    "& .paymentDetails .userName": {
      fontSize: "16px",
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
    padding: "10px 15px 10px 20px",
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

const PaymentCard = () => {
  return (
    <Root>
      <div className="card-start">
        <div className="profileImage">
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I4uMKqSMw2XqG7DKA1gROd0gPOI9UoMZHe6Jnoa9w=s32-c-mo"
            width="40"
            height="40"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="paymentDetails">
          <Typography
            variant="p"
            gutterBottom
            component="div"
            className="UserName"
          >
            Adam
          </Typography>
          <Typography variant="p" gutterBottom component="div" className="date">
            04:55 PM
          </Typography>
        </div>
      </div>
      <div className="card-end" data-fine="true">
        <Typography variant="p" gutterBottom component="div" className="amount">
          ₹ 50<span>.00</span>
        </Typography>
      </div>
    </Root>
  );
};

export default PaymentCard;
