import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import Header from "../../Components/Home/Header";
import EventSection from "../../Components/Home/EventSection";
import TransactionSection from "../../Components/Home/TransactionSection";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
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
      <TransactionSection />
      {/* TRANSACTION SECTION END */}
    </Root>
  );
};

export default Home;
