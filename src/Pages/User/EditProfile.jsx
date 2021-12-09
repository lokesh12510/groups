import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BOTTOM_SVG, DEFAULT_PROFILE } from "../../UIElements/Images";
import Grid from "@mui/material/Grid";
import { DefaultTheme } from "../../Constant";
import { SecondaryBtn, ViewOutlinedBtn } from "../../UIElements/Buttons";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";

// ICONS
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import { useDispatch, useSelector } from "react-redux";
import { FormField } from "../../UIElements/Form";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WcIcon from "@mui/icons-material/Wc";

// FUNC
import { UserServices } from "../../Services/UserServices";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { SET_USER } from "../../redux/actionTypes";
import { setUser, updateUser } from "../../redux/actions/User.actions";
import { setMessage } from "../../redux/actions/Message.actions";

const Root = styled("div")((theme) => ({
  width: "100%",
  background: `url(${BOTTOM_SVG}) no-repeat bottom left fixed`,
  zIndex: -1,

  "& .MuiContainer-root": {
    paddingTop: "20px",
    background: "#fff",
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
  marginBottom: "40px",
}));

const ProfileImageContainer = styled("div")((theme) => ({
  width: 100,
  height: 100,
  borderRadius: "50%",
  objectFit: "cover",
  overflow: "hidden",
  border: `1px solid ${DefaultTheme.palette.primary.main}`,
}));

const EditIconBtn = styled("div")((theme) => ({
  background: "#fff",
  borderRadius: "50%",
  position: "absolute",
  bottom: "5px",
  right: "10px",
  border: `1px solid ${DefaultTheme.palette.secondary.main}`,
}));

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Password Field
  const [passToggle, setPassToggle] = useState(false);

  const handlePassToggle = () => {
    setPassToggle((passToggle) => !passToggle);
  };

  // Data
  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [emailId, setEmailId] = useState(user.profile.emailId);
  const [gender, setGender] = useState(user.profile.gender);

  //Date Field
  const [value, setValue] = React.useState(user.profile.dob);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const formData = {
      username: username,
      dob: value._d,
      emailId: emailId,
      gender: gender,
    };

    // SERVICE CALL

    UserServices.userUpdate(
      formData,
      () => dispatch(startLoader()),
      handleUpdateSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };
  const handleUpdateSuccess = (data) => {
    dispatch(
      setMessage({ message: "Profile Updated Successfully!", type: "success" })
    );
    navigate("/profile");
    // dispatch(updateUser());
  };

  const handleError = (error) => {
    console.log(error);
    dispatch(setMessage({ message: error.message, type: "error" }));
  };

  return (
    <Root>
      <Container>
        <HeaderSection>
          <Button
            onClick={() => navigate(-1)}
            className="backBtn"
            variant="text"
            startIcon={<ArrowBackIcon />}
          >
            Edit Profile
          </Button>
        </HeaderSection>

        <form action="" onSubmit={handleProfileUpdate}>
          <Grid container direction="row" className="formFields" spacing={4}>
            <Grid item xs={12}>
              <MuiTextField
                label="Full Name"
                id="name"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                id="email"
                type="emailId"
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
                  disableFuture
                  label="Date of Birth"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
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
            <SecondaryBtn variant="contained" type="submit">
              SAVE
            </SecondaryBtn>
            <ViewOutlinedBtn variant="outlined" onClick={() => navigate(-1)}>
              cancel
            </ViewOutlinedBtn>
          </div>
        </form>
      </Container>
    </Root>
  );
};

export default EditProfile;
