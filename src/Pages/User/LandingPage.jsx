import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroup, updateGroup } from "../../redux/actions/Group.actions";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { setMessage } from "../../redux/actions/Message.actions";
import { UserServices } from "../../Services/UserServices";
import Home from "./Home";
import Thankyou from "./Thankyou";

const LandingPage = () => {
  const { groupStatus } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    getMembersList();
  }, []);

  const getMembersList = () => {
    UserServices.home(
      {},
      () => dispatch(startLoader()),
      handleHome,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleHome = (data) => {
    console.log(data.data.data);
    dispatch(updateGroup(data.data.data));
    dispatch(setMessage({ message: "", type: "success" }));
  };

  const handleError = (error) => {
    dispatch(
      setMessage({ message: "Wait for admin verification!", type: "success" })
    );
    console.log(error);
  };

  return (
    <div>
      {groupStatus && <Home />}
      {!groupStatus && <Thankyou />}
    </div>
  );
};

export default LandingPage;
