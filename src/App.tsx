// import handleSubmit from "./handles/handlesubmit";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

const App: React.FC = () => {
  // const dataRef = useRef();

  // const submithandler = (e) => {
  //   e.preventDefault();
  //   handleSubmit(dataRef.current.value);
  //   dataRef.current.value = "";
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
};

export default App;
