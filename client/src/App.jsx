import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Home, Profile, CampaignDetails, CreateCampaign } from "./pages";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row ">
      <div className="sm:flex hidden mr-10">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] max-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
