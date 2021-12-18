import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Button, Container, IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_LOGO, BOTTOM_SVG } from "../../UIElements/Images";
import Grid from "@mui/material/Grid";
import { FormTextField } from "../../UIElements/Form";
import { DefaultTheme } from "../../Constant";
import { PrimaryBtn } from "../../UIElements/Buttons";

//ICONS
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

// FUNCTION
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/Auth.actions";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import { LinearProgress } from "@mui/material";
import { Form, Field } from "formik";
import { TextField } from "formik-mui";
import { object, string } from "yup";

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
    marginBottom: "30px",
  },

  "& .pageLogo img": {
    width: "32px",
    height: "32px",
  },
  "& .secondaryTitle": {
    fontSize: "18px",
    color: "#000",
  },
  "& .formFields": { marginBottom: "30px" },
  "& .cta_btns a": {
    textDecoration: "none",
  },
}));

const HeaderSection = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "20px",
}));

const FormTemplate = () => {
  // Password Field
  const [passToggle, setPassToggle] = useState(false);
  const handlePassToggle = () => {
    setPassToggle((passToggle) => !passToggle);
  };

  // Form data
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleFormData = (data) => {
  //   setFormData({
  //     ...formData,
  //     email: data.email,
  //     password: data.password,
  //   });
  // };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   // dispatch(login(formData.emailId, formData.password));
  // };

  const navigate = useNavigate();

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
              Log In
            </Button>
          </Link>
          <div className="pageLogo">
            <img src={APP_LOGO} alt="" />
          </div>
        </HeaderSection>

        <Formik
          initialValues={{
            emailId: "",
            password: "",
          }}
          onSubmit={(values, formikHelpers) => {
            dispatch(login(values.emailId, values.password));
            // navigate("/");
            formikHelpers.resetForm();
          }}
          validationSchema={object({
            emailId: string()
              .required("Enter Email ID")
              .email("Invalid Email!"),
            password: string().required("Enter Password"),
          })}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <Grid container direction="row" className="formFields">
                <Grid item xs={12}>
                  <Field
                    component={FormTextField}
                    name="emailId"
                    type="emailId"
                    label="Email"
                    error={Boolean(errors.emailId) && Boolean(touched.emailId)}
                    helperText={Boolean(touched.emailId) && errors.emailId}
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
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={FormTextField}
                    type={passToggle === true ? "text" : "password"}
                    label="Password"
                    name="password"
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                    helperText={Boolean(touched.password) && errors.password}
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
                </Grid>
              </Grid>
              <div className="cta_btns">
                <PrimaryBtn
                  variant="contained"
                  type="submit"
                  disabled={!dirty || !isValid}
                >
                  LOGIN
                </PrimaryBtn>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </Root>
  );
};

export default FormTemplate;
