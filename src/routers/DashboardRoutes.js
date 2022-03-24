import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { NoticeScreen } from "../components/news/NoticeScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { NewsRss } from "../components/newsRss/NewsRss";
import "../components/css/app.css";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid responsive col-xs-12">
        <Routes>
          <Route path="/" element={<NewsRss />} />
          <Route path="notice/:noticeId" element={<NoticeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/new" element={<NewsRss />} />
        </Routes>
      </div>
    </>
  );
};
