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
import Dashboard from "../Pages/Admin/Dashboard";
import Appbar from "../Components/Appbar/Appbar";

const AdminLayouts = () => {
  const { accessToken, isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Appbar />
    </div>
  );
};

export default AdminLayouts;
