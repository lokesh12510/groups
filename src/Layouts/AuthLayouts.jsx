import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Onboard from "../Pages/Auth/Onboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Thankyou from "../Pages/User/Thankyou";

const AuthLayouts = () => {
  const [user, setUser] = useState(true);
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/start" element={<Onboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router> */}

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
