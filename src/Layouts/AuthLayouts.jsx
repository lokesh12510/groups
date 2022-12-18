import React, { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Onboard from "../Pages/Auth/Onboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Thankyou from "../Pages/User/Thankyou";
import { useSelector } from "react-redux";
import ResetPassword from "../Pages/Auth/ResetPassword";

const AuthLayouts = () => {
  const { accessToken, isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && isLoggedIn) {
      navigate("/");
    }
  }, [accessToken, isLoggedIn, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/start" element={<Onboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default AuthLayouts;
