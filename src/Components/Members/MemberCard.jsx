import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Avatar, Badge, Button, CardHeader, Chip } from "@mui/material";
import { DefaultTheme } from "../../Constant";
import { Link } from "react-router-dom";
import moment from "moment";
import { AddCircleOutline } from "@mui/icons-material";
import { GroupServices } from "../../Services/GroupServices";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/actions/Message.actions";

const MemberCard = ({ member, handleRemoveMember }) => {
  const { currentGroupId } = useSelector((state) => state.groups);

  const { isAdmin } = useSelector((state) => state.user);

  return (
    <Root
    // component={Link} to={"/profile"}
    >
      <CardHeader
        avatar={
          <Badge
            color={member.status === "active" ? "success" : "error"}
            overlap="circular"
            badgeContent=" "
            variant="dot"
            className="statusDot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar
              sx={{ bgcolor: DefaultTheme.palette.secondary.main }}
              aria-label="recipe"
              src={member.user?.avatar}
            >
              {member.user?.username.slice(0, 1)}
            </Avatar>
          </Badge>
        }
        title={member.user?.username.slice(0, 17)}
        subheader={moment(
          member.created_at.split("-").join("").slice(0, 8),
          "YYYYMMDD"
        ).fromNow()}
        action={
          isAdmin && (
            <Chip
              label="Remove"
              onDelete={() => handleRemoveMember(member.user.user_id)}
              variant="contained"
              deleteIcon={<AddCircleOutline style={{ color: "#696DF3" }} />}
            />
          )
        }
      />
    </Root>
  );
};

export default MemberCard;

const Root = styled(Button)((theme) => ({
  width: "100%",
  padding: ".7rem 0",
  color: "#2f2f2f",
  borderRadius: "5px",
  boxShadow: "none",
  margin: "1px 0",
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
}));
