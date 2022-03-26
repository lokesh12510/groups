import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, Stack } from "@mui/material";
import { APP_LOGO, MOBILE_IMAGE } from "../../UIElements/Images";
import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../redux/actions/Group.actions";
import { PrimaryBtn } from "../../UIElements/Buttons";

const Download = () => {
  const { groupStatus } = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!groupStatus) {
      dispatch(setGroup());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Root>
      <Container>
        <div className="title">
          <Stack direction="row" justifyContent="center" alignItems="center">
            <ProfileImage src={APP_LOGO} />
          </Stack>

          <h2 className="sectionTitle">
            THAMBATTY <br /> VIVEKANANDHAR ILLAINGAR NARPANI MANDRAM
          </h2>
          <p>
            This app is created for the members of TVINM, To download our app
            click the download button and install it.!
          </p>
        </div>
        <div className="bodyImage">
          <img width={250} src={MOBILE_IMAGE} alt="" />
        </div>

        <PrimaryBtn
          className="btn"
          variant="contained"
          fullWidth
          startIcon={PlayIcon}
          download
          href="https://play.google.com/store/apps/details?id=com.tvinmooty.webapplication"
        >
          Download
        </PrimaryBtn>
      </Container>
    </Root>
  );
};

export default Download;

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  background: "#fff",
  textAlign: "center",
  "& .btn": {
    marginBottom: "0px",
  },
  "& .bodyImage": {
    marginTop: "20px",
    marginBottom: "30px",
  },
  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
  "& .pageBottom": {
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "0",
  },
  "& .secondaryTitle": {
    textTransform: "Capitalize",
    marginBottom: "0",
  },
  "& .sectionTitle": {
    fontSize: "16px",
    color: "#000979",
  },
}));

const ProfileImage = styled("img")((theme) => ({
  width: 50,
  height: 50,
  borderRadius: "50%",
  objectFit: "cover",
}));

const PlayIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 242 287"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.9722 4.53715C1.51766 8.86941 -0.244997 14.4384 0.0450831 20.104V266.061C-0.311619 271.736 1.45921 277.33 4.9722 281.628L5.70602 282.517L135.593 144.75V141.414L5.70602 3.75879L4.9722 4.53715Z"
      fill="url(#paint0_linear_37_2)"
    />
    <path
      d="M178.577 190.669L135.596 144.747V141.411L178.577 95.4888L179.52 96.1559L230.993 127.067C245.669 135.852 245.669 150.307 230.993 159.202L179.73 190.113L178.577 190.669Z"
      fill="url(#paint1_linear_37_2)"
    />
    <path
      d="M179.833 190.003L135.594 143.08L4.97266 281.625C7.93496 284.422 11.7267 286.031 15.6902 286.173C19.6538 286.315 23.5393 284.982 26.673 282.404L179.833 190.003Z"
      fill="url(#paint2_linear_37_2)"
    />
    <path
      d="M179.833 96.1548L26.673 3.86552C23.5597 1.25156 19.6773 -0.114501 15.7083 0.00752088C11.7393 0.129542 7.93795 1.73185 4.97266 4.53269L135.594 143.078L179.833 96.1548Z"
      fill="url(#paint3_linear_37_2)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_37_2"
        x1="124.061"
        y1="17.5466"
        x2="-62.1956"
        y2="193.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00A0FF" />
        <stop offset="0.01" stop-color="#00A1FF" />
        <stop offset="0.26" stop-color="#00BEFF" />
        <stop offset="0.51" stop-color="#00D2FF" />
        <stop offset="0.76" stop-color="#00DFFF" />
        <stop offset="1" stop-color="#00E3FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_37_2"
        x1="250.177"
        y1="143.079"
        x2="-3.41168"
        y2="143.079"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE000" />
        <stop offset="0.41" stop-color="#FFBD00" />
        <stop offset="0.78" stop-color="#FFA500" />
        <stop offset="1" stop-color="#FF9C00" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_37_2"
        x1="155.827"
        y1="168.654"
        x2="-96.8013"
        y2="406.729"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF3A44" />
        <stop offset="1" stop-color="#C31162" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_37_2"
        x1="-27.9448"
        y1="-77.3045"
        x2="84.8305"
        y2="29.021"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#32A071" />
        <stop offset="0.07" stop-color="#2DA771" />
        <stop offset="0.48" stop-color="#15CF74" />
        <stop offset="0.8" stop-color="#06E775" />
        <stop offset="1" stop-color="#00F076" />
      </linearGradient>
    </defs>
  </svg>
);
