import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { DefaultTheme } from "../../Constant";
import moment from "moment";
import { useSelector } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const MemberCard = ({ member, handleRemoveMember }) => {
  const { isAdmin } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const handleClickOpen = (id) => {
    setOpen(true);
    setCurrentId(id);
  };

  const handleClose = () => {
    setOpen(false);
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
            src={member.user?.avatar}
          >
            {member.user?.username.slice(0, 1)}
          </Avatar>
        }
        title={member.user?.username.slice(0, 17)}
        subheader={moment(
          member.created_at).calendar()}
        action={
          isAdmin ? (
            <Chip
              label="Remove"
              onClick={() => handleClickOpen(member.user.user_id)}
              variant="outlined"
              color="error"
              icon={<RemoveCircleOutlineIcon />}
            />
          ) : (
            member.position &&
            member.position !== "member" && (
              <Chip
                label={member?.position}
                variant="outlined"
                color="primary"
              />
            )
          )
        }
      />
      {/* confirmation dialog */}
      <Dialog open={open} onClose={handleClose} style={{ textAlign: "center" }}>
        <DialogTitle>Remove Member</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container justifyContent={"center"} mb={2}>
              <Avatar
                sx={{ bgcolor: DefaultTheme.palette.secondary.main }}
                aria-label="recipe"
                src={member.user?.avatar}
              ></Avatar>
            </Grid>
            Are you sure want to remove <br />{" "}
            <strong>{member.user?.username}</strong> !
          </DialogContentText>
        </DialogContent>
        <Actions className="actions">
          <Button
            variant="outlined"
            color="info"
            onClick={handleClose}
            fullWidth
          >
            No
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleRemoveMember(currentId)}
            fullWidth
          >
            Yes
          </Button>
        </Actions>
      </Dialog>
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

const Actions = styled(DialogActions)({
  padding: "20px",
});
