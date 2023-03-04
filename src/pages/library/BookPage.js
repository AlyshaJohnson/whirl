import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css"
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Book.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Book from "./Book"
import InfiniteScroll from "react-infinite-scroll-component";
import Reviews from "../reviews/Review";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState({ results: [] });
  const [bookReviews, setBookReviews] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: book }, { data: bookReviews }] = await Promise.all([
          axiosReq.get(`/library/${id}`),
          axiosReq.get(`/reviews/?book=${id}`)
        ]);
        setBook({ results: [book] });
        setBookReviews(bookReviews);
        console.log(bookReviews)
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div className="h-100">
      <Book {...book.results[0]} setBook={setBook} bookPage />
      <Container className={appStyles.Content}>
      {bookReviews.results.length ? (
        <InfiniteScroll
          children={bookReviews.results.map((review) => (
            <Reviews key={review.id} {...review} setReviews={setBookReviews} />
          ))}
          dataLength={bookReviews.results.length}
          loader={<Asset spinner />}
          hasMore={!!bookReviews.next}
          next={() => fetchMoreData(bookReviews, setBookReviews)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found.`}
        />
      )}
      </Container>
    </div>
  );
}

export default BookPage;