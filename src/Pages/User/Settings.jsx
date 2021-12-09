import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { DefaultTheme } from "../../Constant";
import { DEFAULT_PROFILE } from "../../UIElements/Images";
// ICON
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BadgeIcon from "@mui/icons-material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import { logout } from "../../redux/actions/Auth.actions";
import { useDispatch, useSelector } from "react-redux";

// FUNC
import { UploadServices } from "../../Services/UploadServices";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { UserServices } from "../../Services/UserServices";
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
  paddingBottom: "20px",
}));

const ButtonLight = styled(Button)((theme) => ({
  width: "100%",
  padding: ".7rem",
  color: "#2f2f2f",
  borderRadius: "5px",
  boxShadow: "none",
  margin: "1px 0",
  justifyContent: "space-between",
}));

const ProfileImageContainer = styled("div")((theme) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  objectFit: "cover",
  overflow: "hidden",
  border: `1px solid ${DefaultTheme.palette.primary.main}`,
  position: "relative",
  marginBottom: "15px",
  "& img": {
    width: "100%",
    height: "100%",
  },
}));

const EditIconBtn = styled(IconButton)((theme) => ({
  background: "#ffffff9e",
  borderRadius: "50%",
  position: "absolute",
  border: `1px solid ${DefaultTheme.palette.secondary.main}`,
  padding: "6px",
  inset: 0,
  width: 42,
  height: 42,
  margin: "auto",
}));

const Input = styled("input")({
  display: "none",
});

const Settings = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [profileImg, setProfileImg] = useState(user.profile.avatar);
  const [selectedImage, setSelectedImage] = useState("");
  const [preview, setPreview] = useState("");

  const [cloudImg, setCloudImg] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  const formData = new FormData();

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (/^image\//.test(e.target.files[0].type)) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setSelectedImage(e.target.files[0]);
      } else {
        dispatch(
          setMessage({ message: "File type not supported!", type: "error" })
        );
      }
    }
  };

  useEffect(() => {
    const formData = new FormData();
    if (selectedImage) {
      formData.append("avatar", selectedImage);
      UploadServices.uploadProfile(
        formData,
        () => dispatch(startLoader()),
        handleUploadImage,
        handleError,
        () => dispatch(stopLoader())
      );
    }
  }, [preview, selectedImage]);

  const handleUploadImage = (data) => {
    dispatch(startLoader());
    // setPreview("");
    setCloudImg(data.data.data.image_path);
    UserServices.userUpdate(
      { avatar: data.data.data.image_path },
      () => dispatch(startLoader()),
      handleUpdateSuccess,
      handleError,
      () => dispatch(stopLoader())
    );

    dispatch(stopLoader());
  };

  const handleUpdateSuccess = (data) => {
    dispatch(
      setMessage({
        message: "Profile image updated successfully!",
        type: "success",
      })
    );
    navigate("/profile");
  };

  const handleError = (error) => {
    dispatch(setMessage({ message: error.message, type: "error" }));
    setPreview("");
    console.log(error);
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
            Settings
          </Button>
        </HeaderSection>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                // onChange={e =>
                //   getBase64(e.target.files[0]).then(file =>
                //     handleImageSelect({ image: file })
                //  )}
                onChange={(e) => handleImageSelect(e)}
              />
              <Button
                focusRipple
                className="profileImgBtn"
                fullWidth
                component="span"
              >
                <ProfileImageContainer>
                  {/* <DEFAULT_PROFILE /> */}
                  {preview ? (
                    <img alt="preview" src={preview} />
                  ) : (
                    <img alt="profile" src={profileImg} />
                  )}

                  {/* <EditIconBtn>
                  <EditIcon
                    style={{
                      color: DefaultTheme.palette.secondary.main,
                    }}
                  />
                </EditIconBtn> */}
                </ProfileImageContainer>
                <Typography
                  variant="body1"
                  component="div"
                  className="profileText"
                >
                  <EditIcon
                    fontSize="small"
                    style={{
                      color: DefaultTheme.palette.secondary.main,
                      verticalAlign: "middle",
                      marginRight: "12px",
                    }}
                  />
                  Change profile image
                </Typography>
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <ButtonLight
              component={Link}
              to={"/edit-profile/12"}
              fullWidth
              endIcon={<ArrowForwardIosIcon />}
            >
              <Grid container className="" alignItems="center" spacing={2}>
                <Grid item>
                  <BadgeIcon
                    style={{
                      color: DefaultTheme.palette.secondary.main,
                      verticalAlign: "middle",
                    }}
                  />
                </Grid>
                <Grid item> Edit Profile Info</Grid>
              </Grid>
            </ButtonLight>
          </Grid>
          <Grid item xs={12}>
            <ButtonLight
              component={Link}
              to={"/change-password"}
              fullWidth
              endIcon={<ArrowForwardIosIcon />}
            >
              <Grid container className="" alignItems="center" spacing={2}>
                <Grid item>
                  <PasswordIcon
                    style={{
                      color: DefaultTheme.palette.secondary.main,
                      verticalAlign: "middle",
                    }}
                  />
                </Grid>
                <Grid item>Change Password</Grid>
              </Grid>
            </ButtonLight>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              className="logoutBtn"
              onClick={handleClickOpen}
              startIcon={
                <LogoutIcon
                  style={{
                    color: "#d32f2f",
                    verticalAlign: "middle",
                  }}
                />
              }
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Container>
      {/* confirmation dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to logout from this profile?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="info" onClick={handleClose}>
            No
          </Button>
          <Button variant="outlined" color="error" onClick={handleLogout}>
            Yes,Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Root>
  );
};

export default Settings;
