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

import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../UIElements/Buttons";
import { DefaultTheme } from "../../Constant";
import { useDispatch } from "react-redux";
import {
  addDonation,
} from "../../redux/actions/Transaction.actions";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "40px",
    paddingBottom: "100px",
  },
}));

const ManageExpenses = () => {
  // SELECTOR

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [event, setEvent] = useState("");
  const [type, setType] = useState("New");
  const [date, setDate] = useState(new Date());

  const handleType = (e) => {
    setType(e.target.value);
  };

  const dispatch = useDispatch();

  const handleDonationSubmit = () => {
    dispatch(addDonation(name, price, date, event));
    setName("");
    setPrice("");
    setEvent("");
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
          Add Donation
        </Button>
      </HeaderSection>
      <Container>
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <MuiTextField
              id="type"
              select
              value={type}
              label="Type"
              onChange={handleType}
              mb={1}
              className="typeSelect"
            >
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Old">Old</MenuItem>
            </MuiTextField>
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              label="Name"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon
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
              label="Event"
              id="event"
              type="text"
              name="event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalActivityIcon
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
          {type === "Old" && (
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  error={false}
                  disableFuture
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <MuiTextField
                      required
                      {...params}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon
                              style={{
                                color: DefaultTheme.palette.primary.main,
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          )}

          <Grid item xs={12}>
            <PrimaryBtn
              disabled={name && price ? false : true}
              onClick={handleDonationSubmit}
            >
              ADD
            </PrimaryBtn>
            <Button
              className="defaultBtn"
              variant="outlined"
              fullWidth
              component={Link}
              to="/admin/dashboard"
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default ManageExpenses;

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
