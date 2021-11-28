import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Avatar, Badge, Button, CardHeader, Chip } from "@mui/material";
import { DefaultTheme } from "../../Constant";
import { Link } from "react-router-dom";

const Root = styled(Button)((theme) => ({
  width: "100%",
  padding: ".7rem",
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
      fontSize: "9px",
      textTransform: "capitalize",
    },
  },
}));

const MemberCard = ({ member }) => {
  return (
    <Root component={Link} to={"/profile"}>
      <CardHeader
        avatar={
          <Badge
            color={member.status === true ? "success" : "error"}
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
            >
              {member.name.slice(0, 1)}
            </Avatar>
          </Badge>
        }
        title={member.name.slice(0, 17)}
        subheader={member.date}
        action={
          member.role !== "member" && (
            <Chip
              label={member.role}
              size="small"
              variant="outlined"
              color="primary"
            />
          )
        }
      />
    </Root>
  );
};

export default MemberCard;
