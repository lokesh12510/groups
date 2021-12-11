import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import Header from "../../Components/Home/Header";
import EventSection from "../../Components/Home/EventSection";
import TransactionSection from "../../Components/Home/TransactionSection";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/actions/Message.actions";
import { GroupServices } from "../../Services/GroupServices";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
}));

const Home = () => {
  const dispatch = useDispatch();

  const { currentGroupId } = useSelector((state) => state.groups);

  useEffect(() => {
    getGroupInfo(currentGroupId);
  }, [currentGroupId]);

  const getGroupInfo = (currentGroupId) => {
    GroupServices.getGroupInfo(
      currentGroupId,
      {},
      () => dispatch(startLoader()),
      handleGroupInfo,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleGroupInfo = (data) => {
    console.log(data);
  };

  const handleError = (error) => {
    dispatch(setMessage({ message: "Something Went Wrong!", type: "error" }));
    console.log(error);
  };

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
