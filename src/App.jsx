import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

const Login = lazy(() => import("./auth/Login"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Management = lazy(() => import("./pages/management/Management"));
const Activity = lazy(() => import("./pages/activity/Activity"));
const Reports = lazy(() => import("./pages/reports/Reports"));
const Analytics = lazy(() => import("./pages/analytics/Analytics"));
const Investor = lazy(() => import("./pages/investor/Investor"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/mine" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="management" element={<Investor />} />
          <Route path="activity-stocks" element={<Activity />} />
          <Route path="activity-rolling" element={<Activity />} />
          <Route path="activity-bussiness" element={<Activity />} />
          <Route path="stocks-analytics" element={<Management />} />
          <Route path="stocks-userfund" element={<Reports />} />
          <Route path="rolling-analytics" element={<Management />} />
          <Route path="rolling-userfund" element={<Reports />} />
          <Route path="bussiness-analytics" element={<Activity />} />
          <Route path="bussiness-user-engagement" element={<Reports />} />
          <Route path="investor" element={<Analytics />} />
          <Route path="reports" element={<Analytics />} />
          <Route path="users" element={<Analytics />} />
          <Route path="customers" element={<Analytics />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
