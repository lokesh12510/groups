import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Container,
  Button,
  Fab,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  SwipeableDrawer,
  Paper,
  TextField,
  InputAdornment,
  Grid,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../../Components/Payments/PaymentCard";
import { GroupServices } from "../../Services/GroupServices";
import { useDispatch, useSelector } from "react-redux";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { useEffect } from "react";
import PaymentCardBtn from "../../Components/Payments/PaymentCardBtn";
import {
  acceptPayment,
  createPayment,
  getPendingPayments,
} from "../../redux/actions/Payments.actions";
import Autocomplete from "@mui/material/Autocomplete";
import { DefaultTheme } from "../../Constant";
import { PrimaryBtn } from "../../UIElements/Buttons";
import { getMembersList } from "../../redux/actions/Members.actions";
import NotFound from "../../Components/Elements/NotFound";

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

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  background: "#9eadff",
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
    "&:hover": {
      background: "#3f51b5",
      color: "#fff",
    },
  },
}));

const PaymentContainer = styled(Container)({
  paddingBlock: "10px",
  "& .sectionTitle": {
    fontSize: "18px",
    display: "flex",
    gap: "15px",
  },
});

const ManagePayments = () => {
  const dispatch = useDispatch();

  const { currentGroupId } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);
  const { pendingList, isFetched } = useSelector((state) => state.payment);
  const { isFetched: isMembers } = useSelector((state) => state.members);
  const [currentId, setCurrentId] = useState("");

  const [open, setOpen] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClickOpen = (action, id) => {
    setOpen(action);
    setCurrentId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAcceptPayment = () => {
    console.log(currentId);
    dispatch(acceptPayment(currentId));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPendingPayments(currentGroupId, "Unpaid"));
  }, []);

  const handleModalClose = () => {
    setOpenDrawer(false);
  };

  const handleOpenModal = () => {
    setOpenDrawer(true);
    !isMembers && dispatch(getMembersList());
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
          Payments
        </Button>
        <Fab aria-label="add" className="fabBtn" onClick={handleOpenModal}>
          <AddIcon />
        </Fab>
      </HeaderSection>
      <PaymentContainer>
        <Typography variant="p" mb={2} component="div" className="sectionTitle">
          <RecentTransaction width="24" height="24" />
          Pending Payments
        </Typography>
        {!loading && pendingList.length > 0 && (
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            mb={2}
            className="transactionDate"
          >
            Today, November 4th
          </Typography>
        )}

        {!loading &&
          pendingList.length > 0 &&
          pendingList.map((payment, index) => {
            return (
              <PaymentCardBtn
                key={index}
                payment={payment}
                handleClickOpen={handleClickOpen}
              />
            );
          })}
        {loading &&
          [...new Array(3)].map((item) => {
            return (
              <MemberSkeleton>
                <div>
                  <Skeleton variant="circular" width={45} height={45} />
                </div>
                <div className="skeletonContent">
                  <Skeleton variant="rectangular" width={"100%"} height={80} />
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={10}
                    className="secondText"
                  />
                </div>
              </MemberSkeleton>
            );
          })}
        {!loading && pendingList.length === 0 && <NotFound />}
      </PaymentContainer>
      {/* confirmation dialog */}
      <Dialog open={open} onClose={handleClose} style={{ textAlign: "center" }}>
        <DialogTitle>Accept Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to accept the payment!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
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
            onClick={handleAcceptPayment}
            fullWidth
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Select Members */}
      <Drawer
        anchor={"bottom"}
        open={openDrawer}
        onBackdropClick={() => setOpenDrawer(false)}
      >
        <DrawerContent handleModalClose={handleModalClose} />
      </Drawer>
      {/* Select Members */}
    </Root>
  );
};

export default ManagePayments;

const DrawerContent = ({ handleModalClose }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { loading } = useSelector((state) => state.loader);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const { currentGroupId } = useSelector((state) => state.groups);

  const { membersList } = useSelector((state) => state.members);

  const handleSubmitPayment = () => {
    dispatch(createPayment(selectedUser, price));
    // dispatch(getPendingPayments(currentGroupId, "Unpaid"));
    handleModalClose();
  };

  return (
    <>
      <DrawerHeader className="header">Create Payment</DrawerHeader>

      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Autocomplete
            id="combo-box-demo"
            options={membersList}
            fullWidth
            loading={loading}
            getOptionLabel={(option) => option.user.username}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Member"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            onChange={(event, newValue) => {
              let obj = JSON.stringify(newValue, null, " ");
              let newUser = JSON.parse(obj);
              setSelectedUser(newUser.user.user_id);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiTextField
            label="Amount"
            id="amount"
            type="number"
            name="amount"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <PrimaryBtn
            disabled={selectedUser && price ? false : true}
            onClick={handleSubmitPayment}
          >
            Create
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
  },
});

const DrawerHeader = styled("div")({
  padding: "15px 0",
  borderBottom: "1px solid #dedede",
  fontSize: "20px",
  color: "#000",
  marginBottom: "40px",
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

const MemberSkeleton = styled("div")({
  display: "flex",
  alignItems: "start",
  gap: "10px",
  marginBottom: "10px",
  "& .skeletonContent": {
    width: "100%",
  },
  "& .secondText": {
    width: "100%",
    marginBlock: "5px",
    flex: "1",
  },
});
