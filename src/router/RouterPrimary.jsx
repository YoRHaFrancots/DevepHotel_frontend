import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPageScreen from "../pages/AdminPageScreen";
const RouterPrimary = ({ usuario }) => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPageScreen usuario={usuario} />} />
    </Routes>
  );
};

export default RouterPrimary;
