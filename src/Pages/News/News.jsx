import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "./EditorsInsights";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { title, image_url, details, category_id } = news;
  return (
    <div>
      <h4 className="fw-bold">Dragon News</h4>
      <Card className=" p-2">
        <Card.Img src={image_url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-5">
        <h4 className="fw-bold mb-3">Editors Insights</h4>
        <EditorsInsights></EditorsInsights>
      </div>
    </div>
  );
};

export default News;
