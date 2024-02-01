import React, { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div className="bg-hero h-[100vh] relative">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
