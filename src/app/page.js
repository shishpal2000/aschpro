// src/app/page.js
"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./homepage/page";

const Home = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS loaded");
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS:", err);
      });
  }, []);

  return (
    <div className="home">
      <Homepage />
    </div>
  );
};

export default Home;
