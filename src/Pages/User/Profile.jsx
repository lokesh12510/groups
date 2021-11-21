import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Icon, IconButton, Stack, Typography } from "@mui/material";
import {
  BG_VARIANT_1,
  DEFAULT_PROFILE,
  PROFILE_BG,
} from "../../UIElements/Images";
import { GradientCard } from "../../UIElements/Card";
import { WalletIcon } from "../../UIElements/Icons";
import EditIcon from "@mui/icons-material/Edit";
import { DefaultTheme } from "../../Constant";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .profileSection": {
    position: "relative",
    top: "-40px",
  },
  "& .MuiContainer-root": {
    paddingTop: "10px",
  },
  "& .ProfileImageSection": {
    backgroundImage: `url("${PROFILE_BG}")`,
    height: "230px",
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "cover",
    borderRadius: "0 0 20px 20px",
    display: "grid",
    placeItems: "center",
  },
  "& .profileName": {
    fontWeight: "bold",
    "& svg": {
      verticalAlign: "middle",
      marginLeft: "10px",
    },
    "& .roleChip": {
      fontSize: "11px",
      marginLeft: "10px",
    },
  },
  "& .MuiTypography-root": {
    fontFamily: "DM Sans, sans-serif",
  },
  "& .card": { marginBottom: "25px" },
}));

const ProfileImageContainer = styled("div")((theme) => ({
  width: 100,
  height: 100,
  borderRadius: "50%",
  objectFit: "cover",
  overflow: "hidden",
}));

const EditIconBtn = styled("div")((theme) => ({
  background: "#fff",
  borderRadius: "50%",
  position: "absolute",
  top: "10px",
  right: "10px",
}));

const Contribution = styled("section")((theme) => ({
  background: "#EEEEFF",
  padding: "20px 0",
  "& .sectionTitle": {
    marginBottom: "20px",
    display: "block",
  },
}));

const Profile = () => {
  return (
    <Root>
      <div className="ProfileImageSection">
        <IconButton focusRipple>
          <ProfileImageContainer>
            <DEFAULT_PROFILE />
            {/* <ProfileImage src={DEFAULT_PROFILE} /> */}
          </ProfileImageContainer>
        </IconButton>
      </div>
      <div className="profileSection">
        <Container>
          <GradientCard bg={BG_VARIANT_1} className="card">
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              style={{ minHeight: 150 }}
            >
              <Typography variant="body1" gutterBottom>
                Profile
              </Typography>
              <>
                <Typography variant="h6" className="profileName">
                  Adam
                  {/* <span>
                    <VerifiedIcon />
                  </span> */}
                  <Chip
                    color="success"
                    label="Member"
                    size="small"
                    className="roleChip"
                  />
                </Typography>
              </>
              <div className="profileContainer">
                <Typography variant="body1" gutterBottom>
                  980283408
                </Typography>
                <Typography variant="body1" gutterBottom>
                  adam234@gmail.com
                </Typography>
              </div>
            </Stack>
            <Link to="/edit-profile/68">
              <EditIconBtn>
                <IconButton>
                  <EditIcon
                    style={{
                      color: DefaultTheme.palette.primary.main,
                    }}
                  />
                </IconButton>
              </EditIconBtn>
            </Link>
          </GradientCard>
        </Container>
        <Contribution>
          <Container>
            <div className="sectionHeader">
              <Typography variant="p" className="sectionTitle">
                Total Contribution
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={2}
              >
                <Icon>
                  <WalletIcon />
                </Icon>
                <Typography variant="h4">₹ 20,590.90</Typography>
              </Stack>
            </div>
          </Container>
        </Contribution>
      </div>
    </Root>
  );
};

export default Profile;
