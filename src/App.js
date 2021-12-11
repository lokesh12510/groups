import React from "react";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import AuthLayouts from "./Layouts/AuthLayouts";
import PublicLayouts from "./Layouts/PublicLayouts";
import Toast from "./UIElements/Toast";
import { useDispatch, useSelector } from "react-redux";
import AdminLayouts from "./Layouts/AdminLayouts";
import { isAdmin } from "./redux/actions/User.actions";

function App() {
  const { message, type } = useSelector((state) => state.message);
  const { isGroupAdmin } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);

  const dispatch = useDispatch();

  const { user, groups } = useSelector((state) => state);

  console.log(user.userId, groups.group.admin);

  useEffect(() => {
    if (
      user.userId &&
      groups.group.admin &&
      user.userId === groups.group.admin
    ) {
      dispatch(isAdmin());
    }
  }, []);

  return (
    <div className="App">
      {!loading && message && <Toast message={message} type={type} />}
      {loading && (
        <CircularProgress
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            zIndex: "1051",
          }}
        />
      )}

      <Routes>
        <Route path="/create/*" element={<AuthLayouts />} />
        <Route path="/*" element={<PublicLayouts />} />
        <Route
          path="/admin/*"
          element={isGroupAdmin ? <AdminLayouts /> : <AuthLayouts />}
        />
      </Routes>
    </div>
  );
}

export default App;
