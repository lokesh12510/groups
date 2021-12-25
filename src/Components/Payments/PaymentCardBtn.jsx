import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
} from "@mui/material";
import { DefaultTheme } from "../../Constant";
import { Link } from "react-router-dom";
import moment from "moment";
import { AddCircleOutline } from "@mui/icons-material";
import { GroupServices } from "../../Services/GroupServices";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/actions/Message.actions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaidIcon from "@mui/icons-material/Paid";

const PaymentCardBtn = ({ payment, handleAccept, handleClickOpen }) => {
  const { currentGroupId } = useSelector((state) => state.groups);

  const { isAdmin } = useSelector((state) => state.user);

  return (
    <Root
    // component={Link} to={"/profile"}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: DefaultTheme.palette.secondary.main }}
            aria-label="recipe"
            src={payment.user_avatar}
          >
            {payment.username.slice(0, 1)}
          </Avatar>
        }
        title={payment.username}
        subheader={moment(payment.createdAt).utcOffset(0).calendar()}
        action={
          isAdmin && (
            <Chip
              label="Accept"
              onDelete={() => handleClickOpen(true, payment.payment_id)}
              variant="contained"
              deleteIcon={
                <CheckCircleOutlineIcon style={{ color: "#696DF3" }} />
              }
            />
          )
        }
      />
      <CardContent>
        <div className="ItemContent">
          <DateRangeIcon />
          <h3>{moment(payment.createdAt).format("MMMM")}</h3>
        </div>
        <div className="ItemContent">
          <h3>
            ₹ {payment.amount}
            {payment?.fine && <span> + ₹ {payment?.fine}</span>}
          </h3>
        </div>
      </CardContent>
    </Root>
  );
};

export default PaymentCardBtn;

const Root = styled(CardActionArea)((theme) => ({
  padding: ".7rem",
  color: "#2f2f2f",
  borderRadius: "5px",
  boxShadow: "none",
  margin: "1px 0",
  background: "#fff",
  "& .MuiCardHeader-root": {
    width: "100%",
    padding: "0rem",
    "& .statusDot": {
      "& .MuiBadge-dot": {
        border: "1px solid #fff",
        minWidth: "10px",
        height: "10px",
        borderRadius: "9px",
      },
    },
    "& .MuiCardHeader-content": {
      textAlign: "left",
      "& .MuiCardHeader-title": {
        fontSize: "1rem",
        fontWeight: "500",
        textTransform: "Capitalize",
      },
      "& .MuiCardHeader-subheader": {
        fontSize: "0.675rem",
      },
    },
  },
  "& .MuiCardHeader-action": {
    margin: "0",
    alignSelf: "center",
    textAlign: "left",
    "& .MuiChip-root": {
      fontSize: "11px",
      textTransform: "capitalize",
    },
  },
  "& .MuiCardContent-root": {
    padding: "11.2px 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "666666",
    "& .ItemContent": {
      display: "flex",
      alignItems: "center",
      gap: "7px",
    },
  },
}));
