import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import Header from "../../Components/Home/Header";
import EventSection from "../../Components/Home/EventSection";

const Root = styled("div")((theme) => ({
  width: "100%",
  paddingBottom: "50px",
}));

const Home = () => {
  return (
    <Root>
      {/* HEADER SECTION START */}
      <Header />
      {/* HEADER SECTION START */}
      {/* BLOG SECTION START */}
      <EventSection />
      {/* BLOG SECTION END */}
      {/* TRANSACTION SECTION START */}
      {/* <TransactionSection /> */}
      {/* TRANSACTION SECTION END */}
    </Root>
  );
};

export default Home;
