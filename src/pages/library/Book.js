import React from "react";
import styles from "../../styles/Book.module.css";
import btnStyles from "../../styles/Button.module.css"
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const Book = (props) => {
  const {
    id,
    title,
    author,
    cover,
    ISBN,
    publisher,
    published,
    blurb,
    series_title,
    series_book_no,
    series_links,
  } = props;

  return (
    <>
      <Card className={styles.Book}>
        <Card.Body>
          <Row className={`${styles.BottomBorder}`}>
            <Col className="my-auto" xs={9}>
              <Card.Title className={`${styles.Header}`}>
                <Link to={`/library/${id}`}><span className={styles.Title}>{title}</span></Link> by <span className={styles.Author}>{author}</span>
              </Card.Title>
            </Col>
            <Col className="mb-2" xs={3}>
            <Button
              className={`${btnStyles.SmBtn} ${btnStyles.Orange}`}
              to="/review/create/"
            >
              <i className="far fa-plus-square"></i><span className="d-none d-md-inline">Add Review</span>
            </Button>
            </Col>
          </Row>
          <Row>
            <Col className={`my-auto d-none d-md-block p-2 ${styles.CoverCol}`} md={6}>
              <Link to={`/library/${id}`}>
                <Card.Img className={`${styles.Image}`} src={cover} alt={title} />
              </Link>
            </Col>
            <Col className="mt-2" xs={12} md={6}>
              {ISBN && <Card.Text>ISBN: {ISBN}</Card.Text>}
              {publisher && <Card.Text>Publisher: {publisher}</Card.Text>}
              {published && <Card.Text>Date published:{published}</Card.Text>}
              {blurb && <Card.Text>Blurb: {blurb}</Card.Text>}
              {series_title && <Card.Text>Part of the {series_title} series</Card.Text>}
              {series_book_no && <Card.Text>Book no.: {series_book_no}</Card.Text>}
              {series_links && <Card.Text>Other books in series: {series_links}</Card.Text>}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;