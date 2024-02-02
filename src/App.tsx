import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage";
import RoundsPage from "./pages/RoundsPage";
import SharedLayout from "./components/Layout/SharedLayout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="rounds" element={<RoundsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
