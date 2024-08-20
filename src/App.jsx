import React from "react";
import { Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Home from "layouts/Home/Home";
const App = () => {
  const GoogleWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="27309396415-gmcm8601o5ba2t157p9utajkv1vashvb.apps.googleusercontent.com">
        <AuthLayout />
      </GoogleOAuthProvider>
    );
  };
  return (
    <Routes className="">
      <Route path="/" element={<Home />} />
      <Route path="auth/*" element={<GoogleWrapper />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
    </Routes>
  );
};

export default App;
