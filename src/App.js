import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import LandingView from "./views/LandingView/LandingView";
import AddProductsView from "./views/AddProductsView/AddProductsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/addProducts" element={<AddProductsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
