import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { DefaultTheme } from "../Constant";
import { Switch } from "@mui/material";

export const PrimaryBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(DefaultTheme.palette.primary.main),
  width: "100%",
  height: "50px",
  backgroundColor: DefaultTheme.palette.primary.main,
  "&:hover": {
    backgroundColor: DefaultTheme.palette.primary.main,
  },
  "&:active": {
    backgroundColor: DefaultTheme.palette.primary.main,
  },
  fontSize: "16px",
  marginBottom: "25px",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const SecondaryBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(DefaultTheme.palette.secondary.main),
  width: "100%",
  height: "50px",
  backgroundColor: DefaultTheme.palette.secondary.main,
  "&:hover": {
    backgroundColor: DefaultTheme.palette.secondary.main,
  },
  "&:active": {
    backgroundColor: DefaultTheme.palette.secondary.main,
  },
  fontSize: "16px",
  marginBottom: "25px",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const PrimaryOutlinedBtn = styled(Button)(({ theme }) => ({
  color: DefaultTheme.palette.primary.main,
  width: "100%",
  height: "50px",
  borderColor: DefaultTheme.palette.primary.main,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  fontSize: "16px",
  marginBottom: "25px",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const ViewOutlinedBtn = styled(Button)(({ theme }) => ({
  color: DefaultTheme.palette.primary.main,
  width: "100%",
  height: "50px",
  border:
    "4px solid linear-gradient(to right, rgba(107, 123, 240, 1), rgba(122, 224, 218, 1))",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  fontSize: "16px",
  marginBottom: "25px",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const SwitchBtn = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: DefaultTheme.palette.primary.main,
    "&:hover": {
      backgroundColor: "none",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: DefaultTheme.palette.primary.main,
  },
}));
