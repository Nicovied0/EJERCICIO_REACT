import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import LandingView from "./views/LandingView/LandingView";
import AuthView from "./views/AuthView/AuthView";
import AddProductsView from "./views/AddProductsView/AddProductsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/auth" element={<AuthView />} />
        <Route path="/addProducts" element={<AddProductsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
