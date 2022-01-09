import React from "react";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthLayouts from "./Layouts/AuthLayouts";
import PublicLayouts from "./Layouts/PublicLayouts";
import Toast from "./UIElements/Toast";
import { useDispatch, useSelector } from "react-redux";
import AdminLayouts from "./Layouts/AdminLayouts";
import { isAdmin } from "./redux/actions/User.actions";
import { updateGroup } from "./redux/actions/Group.actions";
import Privacy from "./Pages/User/Privacy";
import Download from "./Pages/User/Download";

function App() {
  const { message, type } = useSelector((state) => state.message);
  const { loading } = useSelector((state) => state.loader);

  const dispatch = useDispatch();

  const { currentGroupId } = useSelector((state) => state.groups);

  const location = useLocation();

  useEffect(() => {
    dispatch(isAdmin());
    if (currentGroupId) {
      dispatch(updateGroup(currentGroupId));
    }
  }, [currentGroupId,dispatch]);

  return (
    <div className="App">
      {!loading && message && <Toast message={message} type={type} />}
      {loading &&
        location.pathname !== "/members" &&
        location.pathname !== "/savings" && (
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
          element={isAdmin ? <AdminLayouts /> : <AuthLayouts />}
        />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
