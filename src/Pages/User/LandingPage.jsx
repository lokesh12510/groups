import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../redux/actions/Group.actions";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import Home from "./Home";
import Thankyou from "./Thankyou";

const LandingPage = () => {
  const { groupStatus } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  return (
    <div>
      {groupStatus && <Home />}
      {!groupStatus && <Thankyou />}
    </div>
  );
};

export default LandingPage;
