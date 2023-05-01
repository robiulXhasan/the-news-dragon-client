import moment from "moment";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsBookmark, BsShare } from "react-icons/bs";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, author, details, total_view, rating } = news;
  return (
    <Card className=" ">
      <Card.Header className="d-flex  align-items-center">
        <Card.Img
          style={{ height: "50px", width: "auto" }}
          className="rounded-circle"
          src={author?.img}
        />
        <div className="flex-grow-1 ms-2">
          <h5 className="mb-0">{author?.name}</h5>
          <small className="text-secondary">
            {moment(author?.published_date).format("yyyy-MM-D")}
          </small>
        </div>

        <span>
          <BsBookmark className="me-3" />
          <BsShare />
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Img src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0.25)}... <br />
              <Link className="text-warning fw-semibold text-decoration-none" to={`/news/${_id}`}>
                Read more
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 align-items-center">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-1" />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
