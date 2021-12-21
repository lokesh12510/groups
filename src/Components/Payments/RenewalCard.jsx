import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Button, Container, Stack, Typography } from "@mui/material";

const Root = styled(Button)((theme) => ({
  width: "100%",
  minHeight: "250px",
}));

const RenewalCard = ({ payment }) => {
  return (
    <Root>
      <Stack>
        <Typography variant="overline">{payment.payment_id}</Typography>
      </Stack>
    </Root>
  );
};

export default RenewalCard;
