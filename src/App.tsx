import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage";
import SharedLayout from "./components/layout/SharedLayout";
import RoundsPage from "./pages/RoundsPage";

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
