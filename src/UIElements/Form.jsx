import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DefaultTheme } from "../Constant";

export const FormTextField = styled(TextField)(({ theme }) => ({
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

export const SearchBar = styled(TextField)((theme) => ({
  position: "sticky",
  top: 0,
  zIndex: 2,
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "5px",
  "& label.Mui-focused": {
    color: DefaultTheme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: DefaultTheme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      padding: ".9rem",
    },
    "&:hover fieldset": {
      borderColor: DefaultTheme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${DefaultTheme.palette.primary.main}70`,
      borderWidth: ".7px",
    },
    "& fieldset": {
      borderColor: "transparent",
      transition: "all .5s ease",
    },
  },
}));
