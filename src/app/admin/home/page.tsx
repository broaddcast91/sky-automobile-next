"use client";
import { useDataContext } from "@/context/index2";
import React from "react";

const Home = () => {
  const { arenaData } = useDataContext();
  console.log(arenaData, "arena data");

  return <div>Home</div>;
};

export default Home;
