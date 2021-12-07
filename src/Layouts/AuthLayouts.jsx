import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Onboard from "../Pages/Auth/Onboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Thankyou from "../Pages/User/Thankyou";
import { useSelector } from "react-redux";

const AuthLayouts = () => {
  const { accessToken, isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && isLoggedIn) {
      navigate("/");
    }
  }, [accessToken, isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route path="/start" element={<Onboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  );
};

export default AuthLayouts;
