import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Avatar, Badge, Button, CardHeader, Chip } from "@mui/material";
import { DefaultTheme } from "../../Constant";
import { AddCircleOutline } from "@mui/icons-material";

const NonMemberCard = ({ member, handleAddMember }) => {

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
            onDelete={() => handleAddMember(member.user_id)}
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
