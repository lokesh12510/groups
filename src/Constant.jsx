import { createTheme } from "@mui/material/styles";

export let DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#696DF3",
    },
    secondary: {
      main: "#2AC7A8",
    },
  },
});

const URLS = {
  development: "https://finance-app-management.herokuapp.com/",
  // development: "http://localhost:8000/",
};

export const BASE_URL = URLS[process.env.NODE_ENV];
