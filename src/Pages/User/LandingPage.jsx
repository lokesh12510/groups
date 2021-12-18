import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroup, updateGroup } from "../../redux/actions/Group.actions";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { setMessage } from "../../redux/actions/Message.actions";
import { UserServices } from "../../Services/UserServices";
import Home from "./Home";
import Thankyou from "./Thankyou";
import { useNavigate } from "react-router-dom";
import { getPendingPayments } from "../../redux/actions/Payments.actions";

const LandingPage = () => {
  const { groupStatus, isFetched } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isFetched) {
  //     home();
  //   }
  // }, [isFetched]);

  // const home = () => {
  //   UserServices.home(
  //     {},
  //     () => dispatch(startLoader()),
  //     handleHome,
  //     handleError,
  //     () => dispatch(stopLoader())
  //   );
  // };

  // const handleHome = (data) => {
  //   dispatch(updateGroup(data.data.data));
  //   dispatch(setMessage({ message: "", type: "success" }));
  // };

  // const handleError = (error) => {
  //   if (error.jwtErr === 1) {
  //     navigate("/create/start");
  //     dispatch(setMessage({ message: "Session expired!", type: "error" }));
  //   } else {
  //     dispatch(
  //       setMessage({ message: "Wait for admin verification!", type: "success" })
  //     );
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      {groupStatus && <Home />}
      {!groupStatus && <Thankyou />}
    </div>
  );
};

export default LandingPage;
