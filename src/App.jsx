import React from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

import RegisterPage from "./Pages/RegisterPage";
import UserLoginPage from "./Pages/UserLoginPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import StudentDashBoard from "./Pages/StudentDashBoard";
import MentorDashBoard from "./Pages/MentorDashBoard";
import AdminDashBoard from "./Pages/AdminDashBoard";
import ProfilePage from "./Pages/ProfilePage";
import ProdectedRoute from "./ProdectedRoute/ProdectedRoute";
import Career from "./Pages/Career";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/student-dashboard"
          element={
            <ProdectedRoute allowedRoles={["student"]}>
              <StudentDashBoard />
            </ProdectedRoute>
          }
        />

        <Route
          path="/mentor-dashboard"
          element={
            <ProdectedRoute allowedRoles={["mentor"]}>
              <MentorDashBoard />
            </ProdectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProdectedRoute allowedRoles={["admin"]}>
              <AdminDashBoard />
            </ProdectedRoute>
          }
        />

        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer
       position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="colored" />
    </BrowserRouter>
  );
}

export default App;
