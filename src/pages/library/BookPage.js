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

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: book }] = await Promise.all([
          axiosReq.get(`/library/${id}`),
        ]);
        setBook({ results: [book] });
        console.log(book);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div className="h-100">
      <Book {...book.results[0]} setBook={setBook} bookPage />
      <Container className={appStyles.Content}>Reviews</Container>
    </div>
  );
}

export default BookPage;