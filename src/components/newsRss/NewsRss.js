import React from "react";
import { NewsLists } from "../news/NewsLists";

// Screen de la vista de las noticias general llamamos al componente NewList
export const NewsRss = () => {
  return (
    <div className="container-fluid col-xs-12">
      <h1 className="mt-5 mb-5 animate__animated animate__pulse">
        Articles App Api 📰🗞️👏
      </h1>
      <NewsLists />
    </div>
  );
};
