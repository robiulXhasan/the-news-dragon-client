import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  return (
    <div>
      {id ? (
        <h4 className="fw-bold mt-5 ">News in this category: {newsData.length}</h4>
      ) : (
        <h4 className="fw-bold mt-5 ">Dragon News Home</h4>
      )}

      {newsData.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
