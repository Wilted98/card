import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import AddCard from "./pages/AddCard";

const App = () => {
  return (
    <Routes>
      <Route exact path="/add-card" element={<AddCard />} />
    </Routes>
  );
};

export default App;
