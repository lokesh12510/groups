import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { APP_LOGO, BOTTOM_SVG } from "../../UIElements/Images";
import Grid from "@mui/material/Grid";
import { FormTextField } from "../../UIElements/Form";
import { DefaultTheme } from "../../Constant";
import { PrimaryBtn } from "../../UIElements/Buttons";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";

// ICONS
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import WcIcon from "@mui/icons-material/Wc";

// Func
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/Auth.actions";
import { useNavigate } from "react-router";
import moment from "moment";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  // background: `url(${BOTTOM_SVG}) no-repeat bottom left fixed`,
  zIndex: -1,

  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
  "& .backBtn": {
    color: "#000",
    fontSize: "18px",
  },

  "& .title": {
    marginBottom: "35px",
  },

  "& .pageLogo img": {
    width: "32px",
    height: "32px",
  },
  "& .secondaryTitle": {
    fontSize: "22px",
    color: "#000",
  },
  "& .formFields": { marginBottom: "30px" },
  "& .cta_btns a": {
    textDecoration: "none",
  },
  "& .dateInput": {
    "&::-webkit-calendar-picker-indicator": {
      display: "none",
      "-webkit-appearance": "none",
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
  marginBottom: "30px",
  "&::-webkit-calendar-picker-indicator": {
    display: "none",
    "-webkit-appearance": "none",
  },
}));

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "20px",
}));

const Register = () => {
  // Password Field
  const [passToggle, setPassToggle] = useState(false);

  const handlePassToggle = () => {
    setPassToggle((passToggle) => !passToggle);
  };

  // Form data
  // const [formData, setFormData] = useState({
  //   username: "",
  //   emailId: "",
  //   password: "",
  //   dob: "",
  //   gender: "",
  // });
  // const handleFormData = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: [e.target.value],
  //   });
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(null);
  const [emailId, setEmailId] = useState("");
  const [gender, setGender] = useState(null);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(username, emailId, password, dob._d, gender));
  };
  //Date Field

  return (
    <Root>
      <Container>
        <HeaderSection>
          <Link to="/create/start">
            <Button
              className="backBtn"
              variant="text"
              startIcon={<ArrowBackIcon />}
            >
              CREATE ACCOUNT
            </Button>
          </Link>
          <div className="pageLogo">
            <img src={APP_LOGO} alt="" />
          </div>
        </HeaderSection>
        <div className="title">
          <p className="secondaryTitle">Hi Welcome! </p>
        </div>

        <form action="" onSubmit={handleRegister}>
          <Grid container direction="row" className="formFields">
            <Grid item xs={12}>
              <MuiTextField
                label="Full Name"
                id="name"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle
                        style={{ color: DefaultTheme.palette.primary.main }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <MuiTextField
                label="Email Id"
                id="emailId"
                type="email"
                name="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon
                        style={{ color: DefaultTheme.palette.primary.main }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  error={false}
                  disableFuture
                  label="Date of Birth"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={dob}
                  onChange={(newValue) => {
                    setDob(newValue);
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

              <MuiTextField
                label="Password"
                id="password"
                type={passToggle === true ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 14 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.79004 17.251C6.92285 17.251 7.13037 17.2012 7.33789 17.0933C12.061 14.6196 13.5801 13.3828 13.5801 10.4028V4.14404C13.5801 3.28906 13.2148 3.01514 12.5176 2.72461C11.5464 2.32617 8.44189 1.19727 7.479 0.865234C7.25488 0.790527 7.02246 0.749023 6.79004 0.749023C6.55762 0.749023 6.3252 0.798828 6.10938 0.865234C5.13818 1.18066 2.03369 2.33447 1.0625 2.72461C0.373535 3.00684 0 3.28906 0 4.14404V10.4028C0 13.3828 1.60205 14.4785 6.24219 17.0933C6.45801 17.2095 6.65723 17.251 6.79004 17.251ZM3.70215 11.9634V8.56006C3.70215 7.9541 3.95117 7.65527 4.44922 7.62207V6.61768C4.44922 5.04053 5.39551 3.97803 6.79004 3.97803C8.18457 3.97803 9.13086 5.04053 9.13086 6.61768V7.62207C9.62891 7.65527 9.87793 7.9541 9.87793 8.56006V11.9634C9.87793 12.6025 9.5957 12.9014 9.00635 12.9014H4.57373C3.98438 12.9014 3.70215 12.6025 3.70215 11.9634ZM5.3457 7.61377H8.23438V6.51807C8.23438 5.51367 7.65332 4.84131 6.79004 4.84131C5.92676 4.84131 5.3457 5.51367 5.3457 6.51807V7.61377Z"
                          fill={DefaultTheme.palette.primary.main}
                        />
                      </svg>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePassToggle}>
                        {passToggle ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <MuiTextField
                id="gender"
                select
                value={gender}
                label="Gender"
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WcIcon
                        style={{ color: DefaultTheme.palette.primary.main }}
                      />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </MuiTextField>
            </Grid>
          </Grid>
          <div className="cta_btns">
            <PrimaryBtn variant="contained" type="submit">
              Let’s get started
            </PrimaryBtn>
          </div>
        </form>
      </Container>
    </Root>
  );
};

export default Register;
