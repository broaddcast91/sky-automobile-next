"use client";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.location.href = "/admin/home";
  }, []);
  return <div>Home</div>;
};

export default Home;
