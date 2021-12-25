import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GradientCard = styled("div")((props) => ({
  minHeight: "150px",
  background: `url("${props.bg}")`,
  padding: "20px 20px",
  borderRadius: "20px",
  backgroundSize: "cover",
  position: "relative",
}));

export const MiniGradientCard = styled("div")((props) => ({
  minHeight: "80px",
  background: `url("${props.bg}")`,
  padding: "10px 10px",
  borderRadius: "10px",
  backgroundSize: "cover",
  position: "relative",
  display: "grid",
  placeItems: "center",
}));