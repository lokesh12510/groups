import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthLayouts from "./Layouts/AuthLayouts";
import PublicLayouts from "./Layouts/PublicLayouts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/*" element={<AuthLayouts />} />
          <Route path="/*" element={<PublicLayouts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
