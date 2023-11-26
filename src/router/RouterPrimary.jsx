import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminScreen from "../pages/AdminScreen";
const RouterPrimary = ({ usuario }) => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminScreen usuario={usuario} />} />
    </Routes>
  );
};

export default RouterPrimary;
