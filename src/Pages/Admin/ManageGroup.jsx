import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  MenuItem,
  Container,
} from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TimerIcon from "@mui/icons-material/Timer";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../UIElements/Buttons";
import { DefaultTheme } from "../../Constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addDonation,
  addExpense,
} from "../../redux/actions/Transaction.actions";
import { updateGroupInfo } from "../../redux/actions/Group.actions";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "40px",
    paddingBottom: "100px",
  },
}));

const ManageGroup = () => {
  // SELECTOR
  const { loading } = useSelector((state) => state.loader);
  const {
    minimum_amount_male,
    minimum_amount_female,
    fine_amount,
    fine_period,
  } = useSelector((state) => state.groups.groupInfo);

  const [male, setMale] = useState(minimum_amount_male);
  const [female, setFemale] = useState(minimum_amount_female);
  const [fineAmount, setFineAmount] = useState(fine_amount);
  const [finePeriod, setFinePeriod] = useState(fine_period);

  const dispatch = useDispatch();

  const handleDonationSubmit = () => {
    dispatch(updateGroupInfo(male, female, fineAmount, finePeriod));
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
          Edit Group Info
        </Button>
      </HeaderSection>
      <Container>
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <MuiTextField
              label="Male Amount"
              id="male"
              type="text"
              name="male"
              value={male}
              onChange={(e) => setMale(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MaleIcon
                      style={{
                        color: DefaultTheme.palette.primary.main,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              label="Female Amount"
              id="event"
              type="text"
              name="event"
              value={female}
              onChange={(e) => setFemale(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FemaleIcon
                      style={{
                        color: DefaultTheme.palette.primary.main,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              label="Fine Amount"
              id="amount"
              type="number"
              name="amount"
              value={fineAmount}
              onChange={(e) => setFineAmount(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span
                      style={{
                        color: DefaultTheme.palette.primary.main,
                      }}
                    >
                      ₹
                    </span>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              label="Fine Period"
              id="period"
              type="number"
              name="period"
              value={finePeriod}
              onChange={(e) => setFinePeriod(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimerIcon
                      style={{
                        color: DefaultTheme.palette.primary.main,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <PrimaryBtn
              disabled={
                male && female && fineAmount && finePeriod ? false : true
              }
              onClick={handleDonationSubmit}
            >
              Update
            </PrimaryBtn>
            <Button
              className="defaultBtn"
              variant="outlined"
              fullWidth
              component={Link}
              to="/admin/dashboard"
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default ManageGroup;

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
  "&::-webkit-calendar-picker-indicator": {
    display: "none",
    "-webkit-appearance": "none",
  },
}));
