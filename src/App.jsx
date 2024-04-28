import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import ListRestaurant from "./components/ListRestaurant";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/grab-tw" element={<Home />} />
        <Route path="/restaurant" element={<ListRestaurant />} />
      </Routes>
      {/* <Home /> */}
      {/* <ListRestaurant /> */}
      {/* <Test /> */}
    </>
  );
}

export default App;
