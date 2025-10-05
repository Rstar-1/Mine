import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full flex">
        <div className="w-20">
          <Sidebar />
        </div>
        <div className="w-80 h-100 overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
