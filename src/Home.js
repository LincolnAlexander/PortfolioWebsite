import React from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";

import { Routes, Route } from "react-router-dom";
function Home() {
  return (
    <>
      <Routes>
        <Route path="/PortfolioWebsite" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}
export default Home;
