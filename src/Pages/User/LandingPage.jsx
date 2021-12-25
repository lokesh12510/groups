import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import Thankyou from "./Thankyou";

const LandingPage = () => {
  const { groupStatus } = useSelector((state) => state.groups);

  return (
    <div>
      {groupStatus && <Home />}
      {!groupStatus && <Thankyou />}
    </div>
  );
};

export default LandingPage;
