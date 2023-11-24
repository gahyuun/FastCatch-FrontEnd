import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/commonHeader/CommonHeader";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}
