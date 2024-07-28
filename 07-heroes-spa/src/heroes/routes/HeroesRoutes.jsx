import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { LogoutPage } from "../../auth";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
