import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminScreen from "../pages/AdminScreen";
const RouterPrimary = () => {
  return (
    <Routes>
     
      
    <Route path="/admin" element={<AdminScreen />} />
      
    </Routes>
  );
};

export default RouterPrimary;