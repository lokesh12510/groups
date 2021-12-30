import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardHeader,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import { DefaultTheme } from "../../Constant";

import { useDispatch, useSelector } from "react-redux";

import { PrimaryBtn } from "../../UIElements/Buttons";

import { getMembersList } from "../../redux/actions/Members.actions";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { updatePosition } from "../../redux/actions/Group.actions";

const ManageMembers = () => {
  const dispatch = useDispatch();
  const { membersCount } = useSelector((state) => state.members);
  const { loading } = useSelector((state) => state.loader);
  const [search, setSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  // Members list state
  const { membersList, isFetched } = useSelector((state) => state.members);

  const [selectedUser, setSelectedUser] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!isFetched) {
      dispatch(getMembersList());
    }
  }, [isFetched, dispatch]);

  const handleModalClose = () => {
    setOpenDrawer(false);
    setSelectedUser({});
  };

  const handleOpenModal = (data) => {
    setSelectedUser(data);
    setOpenDrawer(true);
  };

  return (
    <Root>
      <HeaderSection>
        <Button
          component={Link}
          to="/admin/dashboard"
          className="backBtn"
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Members
        </Button>
      </HeaderSection>
      <Container>
        <div className="PageTitle">
          <SearchBar
            onChange={handleSearchChange}
            placeholder="Search..."
            color="success"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Typography variant="overline" display="block" className="memberCount">
          Active : {membersCount}
        </Typography>
      </Container>
      <div className="memberListSection">
        <Container>
          {!loading &&
            membersList.length > 0 &&
            membersList
              .filter((item) => {
                if (search === "") {
                  return item;
                } else {
                  return item.user.username
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
              })
              .map((member, index) => {
                return (
                  <MemberCard
                    key={index}
                    isFromAdmin={true}
                    onClick={() => handleOpenModal(member)}
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
                        member.created_at.split("-").join("").slice(0, 8),
                        "YYYYMMDD"
                      ).fromNow()}
                      action={
                        <EditIcon
                          fontSize="small"
                          style={{ color: "#696DF3" }}
                        />
                      }
                    />
                  </MemberCard>
                );
              })}
        </Container>
      </div>
      {/* Select Members */}
      <Drawer
        anchor={"bottom"}
        open={openDrawer}
        onBackdropClick={() => setOpenDrawer(false)}
      >
        <DrawerContent
          handleModalClose={handleModalClose}
          selectedUser={selectedUser}
        />
      </Drawer>
      {/* Select Members */}
    </Root>
  );
};

export default ManageMembers;

const DrawerContent = ({ handleModalClose, selectedUser }) => {
  const { loading } = useSelector((state) => state.loader);
  const [role, setRole] = useState("user");
  const [position, setPosition] = useState(selectedUser.position || "member");

  const dispatch = useDispatch();

  const handleSubmitPayment = () => {
    dispatch(updatePosition(selectedUser?.user?.user_id, position));
    handleModalClose();
  };

  return (
    <>
      <DrawerHeader className="header">Edit Member</DrawerHeader>

      <Grid container>
        <Grid item xs={12} container alignItems={"center"} mb={4}>
          <Avatar className="miniAvatar" src={selectedUser?.user?.avatar} />
          <Typography component={"div"} variant="h6" className="userName">
            {selectedUser?.user?.username}
          </Typography>
        </Grid>
        <Grid item xs={12} mb={5}>
          <MuiTextField
            id="position"
            select
            value={position}
            label="Position"
            onChange={(e) => setPosition(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon
                    style={{ color: DefaultTheme.palette.primary.main }}
                  />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="president">President</MenuItem>
            <MenuItem value="casher">Casher</MenuItem>
            <MenuItem value="vice_president">Vice President</MenuItem>
            <MenuItem value="secretory">Secretory</MenuItem>
            <MenuItem value="joint_secretory">Joint Secretory</MenuItem>
            <MenuItem value="member">Member</MenuItem>
          </MuiTextField>
        </Grid>
        <Grid item xs={12}>
          <PrimaryBtn
            disabled={position && role ? false : true}
            onClick={handleSubmitPayment}
          >
            Update
          </PrimaryBtn>
          <Button
            className="defaultBtn"
            variant="outlined"
            fullWidth
            onClick={handleModalClose}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const Drawer = styled(SwipeableDrawer)({
  "& .MuiPaper-root": {
    padding: "15px",
    borderRadius: "10px 10px 0 0",
    minHeight: "90vh",
    "& .MuiAutocomplete-root": {
      width: "100%",
      minWidth: "100%",
    },
    "& .defaultBtn": {
      minHeight: "50px",
      color: "#666666",
      borderColor: "#666666",
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&:active": {
        backgroundColor: "#fff",
      },
      fontSize: "16px",
      marginBottom: "25px",
      fontWeight: "bold",
      textDecoration: "none",
    },
    "& .miniAvatar": {
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "15px",
    },
    "& .userName": {
      textTransform: "uppercase",
    },
  },
});

const DrawerHeader = styled("div")({
  padding: "15px 0",
  borderBottom: "1px solid #dedede",
  fontSize: "20px",
  color: "#000",
  marginBottom: "20px",
});

export const MuiTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& label.Mui-focused": {
    color: DefaultTheme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: DefaultTheme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: DefaultTheme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: DefaultTheme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: DefaultTheme.palette.primary.main,
    },
  },
  "& .MuiInputLabel-root": { color: DefaultTheme.palette.primary.main },
  marginBottom: "30px",
  "&::-webkit-calendar-picker-indicator": {
    display: "none",
    "-webkit-appearance": "none",
  },
}));

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#fff",

  "& .MuiContainer-root": { backgroundColor: "#ffd7ca" },
  "& .PageTitle": { padding: "10px 0 5px 0 " },
  "& .memberCount": { color: "#a3a2a2" },
  "& .memberListSection": {
    backgroundColor: "#fff",
    padding: "15px 0 120px 0px",
    borderRadius: "20px 20px 0 0",
    "& .MuiContainer-root": {
      padding: "0 10px",
      backgroundColor: "#fff",
    },
    "& .MuiTypography-root": {
      color: "#666666",
    },
  },
}));

export const SearchBar = styled(TextField)((theme) => ({
  position: "sticky",
  top: 0,
  zIndex: 2,
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "5px",
  "& label.Mui-focused": {
    color: DefaultTheme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: DefaultTheme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      padding: ".9rem",
    },
    "&:hover fieldset": {
      borderColor: DefaultTheme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${DefaultTheme.palette.primary.main}70`,
      borderWidth: ".7px",
    },
    "& fieldset": {
      borderColor: "transparent",
      transition: "all .5s ease",
    },
  },
}));

const MemberCard = styled(Button)((theme) => ({
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

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 20px 5px 20px",
  background: "#ffd7ca",
  "& .backBtn": {
    color: "#000",
    fontSize: "18px",
    paddingInline: "0",
  },
  "& .fabBtn": {
    position: "absolute",
    top: "55px",
    right: "10px",
    background: "#3f51b5",
    color: "#fff",
  },
}));
