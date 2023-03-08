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
    series_links = []
  } = props;

  const seriesLinks = series_links.map((link) => {
    <Col lg={4} md={6}>{link}</Col>
  })

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
            <Col className={`my-auto d-none d-md-block p-2 ${styles.CoverCol}`} md={5}>
              <Link to={`/library/${id}`}>
                <Card.Img className={`${styles.Image}`} src={cover} alt={title} />
              </Link>
            </Col>
            <Col className={`mt-2 ${styles.BookInfoItem}`} xs={12} md={7}>
              {ISBN && <Card.Text>
                <div className={styles.Key}>
                  <p>
                    ISBN:
                  </p>
                </div>
                <div className={styles.Value}>
                  <p>
                    {ISBN}
                  </p>
                </div>
              </Card.Text>}
              {publisher && <Card.Text>
                <div className={styles.Key}>
                  <p>
                    Publisher:
                  </p>
                </div>
                <div className={styles.Value}>
                  <p>
                    {publisher}
                  </p>
                </div>
              </Card.Text>}
              {published && <Card.Text>
                <div className={styles.Key}>
                  <p>
                    Date published:
                  </p>
                </div>
                <div className={styles.Value}>
                  <p>
                    {published}
                  </p>
                </div>
              </Card.Text>}
              {blurb && <Card.Text>
                <div className={styles.BlurbSeriesKey}>
                  <p>
                    Blurb:
                  </p>
                </div>
                <div className={styles.BlurbSeriesValue}>
                  <p>
                    {blurb}
                  </p>
                </div>
              </Card.Text>}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;