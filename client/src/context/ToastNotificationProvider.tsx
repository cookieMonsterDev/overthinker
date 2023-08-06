"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthProviderProps {
  children: React.ReactNode;
}

const ToastNotificationProvider = ({ children }: AuthProviderProps) => {
  return (
    <React.Fragment>
      {children}
      <ToastContainer />
    </React.Fragment>
  );
};

export default ToastNotificationProvider;
