import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Avatar, Badge, Button, CardHeader, Chip } from "@mui/material";
import { DefaultTheme } from "../../Constant";
import { Link } from "react-router-dom";
import moment from "moment";
import { AddCircleOutline } from "@mui/icons-material";
import { GroupServices } from "../../Services/GroupServices";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/actions/Message.actions";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const NonMemberCard = ({ member }) => {
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddMembers = (id) => {
    console.info(id);

    GroupServices.addGroupMembers(
      {
        user_id: id,
      },
      () => dispatch(startLoader()),
      handleAddSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleAddSuccess = (data) => {
    console.log(data);
    setAdded((added) => !added);
    dispatch(
      setMessage({ message: "Member Added Successfully!", type: "success" })
    );
  };

  const handleError = (err) => {
    console.log(err);
    setAdded((added) => !added);
    dispatch(
      setMessage({ message: "Member already in Group!", type: "error" })
    );
  };

  return (
    <Root
    // component={Link} to={"/profile"}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: DefaultTheme.palette.secondary.main }}
            aria-label="recipe"
            src={member.avatar}
          >
            {member.username.slice(0, 1)}
          </Avatar>
        }
        title={member.username.slice(0, 17)}
        action={
          <Chip
            label="ADD"
            onDelete={(e) => handleAddMembers(member.user_id)}
            variant="contained"
            deleteIcon={<AddCircleOutline style={{ color: "#696DF3" }} />}
          />
        }
      />
    </Root>
  );
};

export default NonMemberCard;

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
