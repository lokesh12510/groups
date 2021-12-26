import React from "react";

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../Pages/Admin/Dashboard";
import Appbar from "../Components/Appbar/Appbar";
import ManagePayments from "../Pages/Admin/ManagePayments";
import ManageMembers from "../Pages/Admin/ManageMembers";
import ManageExpenses from "../Pages/Admin/ManageExpenses";
import ManageDonation from "../Pages/Admin/ManageDonation";

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
  return (
    <div>
      <Routes>
        <Route exact path="/dashboard" element={<AdminRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          exact
          path="/manage-payments"
          element={<AdminRoute nav={false} />}
        >
          <Route exact path="/manage-payments" element={<ManagePayments />} />
        </Route>
        <Route
          exact
          path="/manage-members"
          element={<AdminRoute nav={false} />}
        >
          <Route exact path="/manage-members" element={<ManageMembers />} />
        </Route>
        <Route
          exact
          path="/manage-expenses"
          element={<AdminRoute nav={false} />}
        >
          <Route exact path="/manage-expenses" element={<ManageExpenses />} />
        </Route>
        <Route
          exact
          path="/manage-donation"
          element={<AdminRoute nav={false} />}
        >
          <Route exact path="/manage-donation" element={<ManageDonation />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminLayouts;
