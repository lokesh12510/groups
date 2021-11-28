import React, { useState } from "react";
import Appbar from "../Components/Appbar/Appbar";
import Home from "../Pages/User/Home";
import Profile from "../Pages/User/Profile";
import EditProfile from "../Pages/User/EditProfile";
import Members from "../Pages/User/Members";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import Events from "../Pages/User/Events";
import EventDetail from "../Components/Events/EventDetail";
import NotFound from "../Pages/Auth/NotFound";

const PublicLayouts = () => {
  const [user, setUser] = useState(true);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={!user ? <Navigate to="/start" /> : <Home />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>

      {user && <Appbar />}
    </div>
  );
};

export default PublicLayouts;
