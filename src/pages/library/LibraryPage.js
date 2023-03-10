import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Book from "./Book";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"

import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewsPage.module.css";
import btnStyles from "../../styles/Button.module.css"

function LibraryPage({ message, filter = "" }) {
  const [books, setBooks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  const addBookIcon = (
    <Col lg={2} className="m-auto">
      <Link
        to="/library/create"
        className={`py-3 ${btnStyles.Orange} ${btnStyles.MidBtn}`}
      >
        <i className="far fa-plus-square"></i>Add Book
      </Link>
    </Col>
  );

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axiosReq.get(`/library/?${filter}search=${query}`);
        setBooks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchBooks();
      }, 1000);
  
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

    return (
      <>
        <Row className="h-100 my-auto">
          <Col className="py-auto p-lg-2" lg={10}>
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
              className={`${styles.SearchBar}`}
              onSubmit={(event) => event.preventDefault()}
            >
                <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search books"
                />
            </Form>
          </Col>
          {(currentUser?.is_librarian === true) && addBookIcon}
        </Row>
        {hasLoaded ? (
          <>
            {books.results.length ? (
              <InfiniteScroll
                children={books.results.map((book) => (
                  <Book key={book.id} {...book} setBooks={setBooks} />
                ))}
                dataLength={books.results.length}
                loader={<Asset spinner />}
                hasMore={!!books.next}
                next={() => fetchMoreData(books, setBooks)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
                {(currentUser?.is_librarian === true) && addBookIcon}
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </>
      );
    }

export default LibraryPage;
