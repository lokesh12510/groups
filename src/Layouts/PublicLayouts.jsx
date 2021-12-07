import React, { useEffect, useState } from "react";
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
  useNavigate,
  useLocation,
  Link,
  useHistroy,
  Outlet,
} from "react-router-dom";
import Events from "../Pages/User/Events";
import EventDetail from "../Components/Events/EventDetail";
import NotFound from "../Pages/Auth/NotFound";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "../Pages/User/LandingPage";
import Settings from "../Pages/User/Settings";
import ChangePassword from "../Pages/User/ChangePassword";

const PrivateRoute = ({ nav = true }) => {
  const { isLoggedIn, accessToken } = useSelector((state) => state.auth); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return accessToken && isLoggedIn !== null ? (
    <>
      <Outlet /> {nav === true && <Appbar />}
    </>
  ) : (
    <Navigate replace to="/create/start" />
  );
};

const PublicLayouts = () => {
  const group = useSelector((state) => state.groups.groupStatus);
  const [groupStatus, setGroupStatus] = useState(false);

  useEffect(() => {
    if (group) setGroupStatus(group);
  }, [group, groupStatus]);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<PrivateRoute nav={groupStatus} />}>
          <Route exact path="/" element={<LandingPage />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute nav={groupStatus} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          exact
          path="/edit-profile/:id"
          element={<PrivateRoute nav={false} />}
        >
          <Route path="/edit-profile/:id" element={<EditProfile />} />
        </Route>
        <Route path="/members" element={<PrivateRoute />}>
          <Route path="/members" element={<Members />} />
        </Route>
        <Route path="/events" element={<PrivateRoute />}>
          <Route path="/events" element={<Events />} />
        </Route>
        <Route path="/event-detail/:id" element={<PrivateRoute nav={false} />}>
          <Route path="/event-detail/:id" element={<EventDetail />} />
        </Route>
        <Route path="/settings" element={<PrivateRoute nav={false} />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/change-password" element={<PrivateRoute nav={false} />}>
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
};

export default PublicLayouts;
