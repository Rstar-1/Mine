import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Management = lazy(() => import("./pages/management/Management"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full flex">
        <div className="w-20">
          <Sidebar />
        </div>
        <div className="w-80 h-100 overflow-hidden px-10">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
