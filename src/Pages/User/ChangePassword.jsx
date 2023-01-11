import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import { DefaultTheme } from "../../Constant";
// ICON
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { PrimaryBtn } from "../../UIElements/Buttons";
import { UserServices } from "../../Services/UserServices";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";

import { setMessage } from "../../redux/actions/Message.actions";

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
  "& .backBtn": {
    color: "#000",
    fontSize: "18px",
  },
  "& .profileText": {
    display: "flex",
    alignItems: "center",
  },
  "& .profileImgBtn": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#3f3c3c",
    marginBottom: "25px",
  },
  "& .logoutBtn": {
    padding: "11.2px",
    marginTop: "100px",
  },
}));

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "50px",
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

const ChangePassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { p1, p2 } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (p1 && p2) {
      UserServices.changePassword(
        `${p1}/${p2}`,
        {
          password: password,
        },
        () => dispatch(startLoader()),
        handleUpdateSuccess,
        handleResetError,
        () => dispatch(stopLoader())
      );
    } else {
      UserServices.userUpdate(
        {
          password: password,
        },
        () => dispatch(startLoader()),
        handleUpdateSuccess,
        handleError,
        () => dispatch(stopLoader())
      );
    }
  };

  const handleUpdateSuccess = (data) => {
    dispatch(
      setMessage({ message: "Password Changed Successfully!", type: "success" })
    );
    navigate("/settings");
  };

  const handleError = (error) => {
    console.log(error);
    dispatch(setMessage({ message: error.message, type: "error" }));
  };

  const handleResetError = (error) => {
    console.log(error);
    dispatch(
      setMessage({ message: "Token has Expired or Invalid", type: "error" })
    );
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
            Change Password
          </Button>
        </HeaderSection>
        <form action="" onSubmit={handleSubmit}>
          <Grid container direction="row" className="formFields" spacing={4}>
            <Grid item xs={12}>
              <MuiTextField
                label="New Password"
                id="password"
                type="text"
                required
                name="password"
                placeholder="Enter New Password"
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
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <PrimaryBtn variant="contained" type="submit">
                Update
              </PrimaryBtn>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Root>
  );
};

export default ChangePassword;
