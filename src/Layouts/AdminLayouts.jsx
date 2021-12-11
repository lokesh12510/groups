import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Onboard from "../Pages/Auth/Onboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Thankyou from "../Pages/User/Thankyou";
import { useSelector } from "react-redux";
import Dashboard from "../Pages/Admin/Dashboard";
import Appbar from "../Components/Appbar/Appbar";
import ManagePayments from "../Pages/Admin/ManagePayments";

const AdminRoute = ({ nav = true }) => {
  const { isLoggedIn, accessToken } = useSelector((state) => state.auth); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return accessToken && isLoggedIn !== null ? (
    <>
      <Outlet /> {nav === true && <Appbar />}
    </>
  ) : (
    <Navigate replace to="/" />
  );
};

const AdminLayouts = () => {
  const { isAdmin } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin]);

  return (
    <div>
      <Routes>
        <Route exact path="/dashboard" element={<AdminRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/manage-payments" element={<ManagePayments />} />
      </Routes>
    </div>
  );
};

export default AdminLayouts;
