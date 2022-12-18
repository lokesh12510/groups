import styled from "@emotion/styled";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Fab,
  Grid,
  IconButton,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { PrimaryBtn, StyledIconBtn } from "../../UIElements/Buttons";
import { Close, Edit } from "@mui/icons-material";
import { useEffect } from "react";
import { GroupServices } from "../../Services/GroupServices";
import { SET_MESSAGE } from "../../redux/actionTypes";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const ManageSubscriptions = () => {
  const dispatch = useDispatch();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenModal = (e, item) => {
    setOpenDrawer(true);
    item && handleSelectPlan(item);
  };

  const handleModalClose = () => {
    setOpenDrawer(false);
    setSelectedPlan(null);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleGetSubscriptions = useCallback(() => {
    GroupServices.getSubscriptions(
      {},
      () => {
        setIsLoading(true);
      },
      (data) => {
        console.log(data);
        setList(data.data.data);
      },
      (error) => {
        console.log(error);
        dispatch({
          type: SET_MESSAGE,
          payload: { message: "", type: "error" },
        });
      },
      () => {
        setIsLoading(false);
      }
    );
  }, [dispatch]);

  // --------------- sideEffects----------------

  useEffect(() => {
    handleGetSubscriptions();
  }, [dispatch, handleGetSubscriptions]);

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
          Subscriptions
        </Button>
        <Fab aria-label="add" className="fabBtn" onClick={handleOpenModal}>
          <AddIcon />
        </Fab>
      </HeaderSection>

      <Container sx={{ mt: 4 }}>
        {isLoading && (
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            width="100%"
            mb={2}
          >
            <CircularProgress size={20} />
          </Box>
        )}
        <Stack spacing={2}>
          {!isLoading &&
            list.map((item, i) => {
              return (
                <SubscriptionBox
                  direction={"row"}
                  justifyContent="space-between"
                  key={i}
                >
                  <Stack pl={2}>
                    <Typography variant="subtitle1">{item.planName}</Typography>
                    <Typography>{item.amount}</Typography>
                  </Stack>
                  <StyledIconBtn
                    sx={{ color: "#96007a" }}
                    onClick={(e) => handleOpenModal(e, item)}
                  >
                    <Edit />
                  </StyledIconBtn>{" "}
                </SubscriptionBox>
              );
            })}
        </Stack>
      </Container>

      {/* Select Members */}
      <Drawer
        anchor={"bottom"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => console.log("first")}
      >
        <DrawerContent
          handleModalClose={handleModalClose}
          selectedPlan={selectedPlan}
          handleGetSubscriptions={handleGetSubscriptions}
        />
      </Drawer>
      {/* Select Members */}
    </Root>
  );
};

export default ManageSubscriptions;

const DrawerContent = ({
  handleModalClose,
  selectedPlan,
  handleGetSubscriptions,
}) => {
  const [plan, setPlan] = useState({ planName: "", amount: "" });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCreate = () => {
    GroupServices.createSubscriptions(
      {
        planName: plan.planName,
        amount: Number(plan.amount),
        method: "create",
      },
      () => {
        setIsLoading(true);
      },
      (data) => {
        handleModalClose();
        handleGetSubscriptions();
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "Subscription created successfully!",
            type: "success",
          },
        });
      },
      (error) => {
        console.log(error);
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: error.message || "something went wrong!",
            type: "error",
          },
        });
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  const handleDelete = () => {
    GroupServices.deleteSubscriptions(
      {
        planName: plan.planName,
        amount: Number(plan.amount),
      },
      () => {
        setIsLoading(true);
      },
      (data) => {
        handleModalClose();
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "Subscription Deleted successfully!",
            type: "success",
          },
        });
      },
      (error) => {
        console.log(error);
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: error.message || "something went wrong!",
            type: "error",
          },
        });
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan((p) => ({ ...p, [name]: value }));
  };

  useEffect(() => {
    selectedPlan && setPlan(selectedPlan);
    return () => {
      setPlan({ planName: "", amount: "" });
    };
  }, [selectedPlan]);

  return (
    <>
      <DrawerHeader className="header">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          Create Subscriptions
          <IconButton onClick={handleModalClose}>
            <Close />
          </IconButton>
        </Stack>
      </DrawerHeader>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Title"
            value={plan.planName}
            onChange={handleChange}
            mb={1}
            name="planName"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Amount"
            value={plan.amount}
            onChange={handleChange}
            name="amount"
            mb={1}
            fullWidth
          />
        </Grid>
        {!selectedPlan ? (
          <Grid item xs={12}>
            <PrimaryBtn onClick={handleCreate}>
              {isLoading ? <CircularProgress /> : "Create"}
            </PrimaryBtn>
          </Grid>
        ) : (
          <Grid item xs={12}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                color="error"
                variant="contained"
                fullWidth
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </Grid>
        )}
      </Grid>
    </>
  );
};

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .MuiContainer-root": {
    paddingBlock: "20px",
  },
  "& .notFound": {
    width: "300px",
    height: "100%",
    objectFit: "cover",
  },
}));

const SubscriptionBox = styled(Stack)((theme) => ({
  border: `1px solid #ccc`,
  paddingBlock: 10,
  borderRadius: 5,
}));

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",

  background: "#96007a",
  "& .backBtn": {
    color: "#fff",
    fontSize: "18px",
    paddingInline: "0",
  },
  "& .fabBtn": {
    position: "absolute",
    top: "55px",
    right: "10px",
    background: "#96007a",
    color: "#fff",
    "&:hover": {
      background: "#96007a",
      color: "#fff",
    },
  },
}));

const Drawer = styled(SwipeableDrawer)({
  "& .MuiPaper-root": {
    padding: "15px",
    borderRadius: "10px 10px 0 0",
    minHeight: "50vh",
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
  },
});

const DrawerHeader = styled("div")({
  padding: "15px 0",
  borderBottom: "1px solid #dedede",
  fontSize: "20px",
  color: "#000",
  marginBottom: "20px",
  paddingTop: 0,
});
