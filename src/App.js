
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import LandingView from "./views/LandingView/LandingView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
