import React, { useState } from "react";
import Appbar from "../Components/Appbar/Appbar";
import Home from "../Pages/User/Home";
import Profile from "../Pages/User/Profile";
import EditProfile from "../Pages/User/EditProfile";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const PublicLayouts = () => {
  const [user, setUser] = useState(true);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={!user ? <Navigate to="/start" /> : <Home />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
        </Routes>
      </Router>
      {user && <Appbar />}
    </div>
  );
};

export default PublicLayouts;
