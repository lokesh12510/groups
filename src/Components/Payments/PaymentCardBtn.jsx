import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Avatar,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
} from "@mui/material";
import { DefaultTheme } from "../../Constant";
import moment from "moment";
import {  useSelector } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";

const PaymentCardBtn = ({ payment, handleAccept, handleClickOpen }) => {

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
  margin: "10px 0",
  background: "#fff",
  border: "1px solid #dfdfdf",
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
      "& h3": {
        marginBottom: 0,
      },
    },
  },
}));
