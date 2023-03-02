import React from "react";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Row, Col, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Reviews = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    book,
    title,
    description,
    created_at,
    updated_at,
    rating,
    draft,
    reviewPage,
    setReviews,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { review: id });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, likes_count: review.likes_count + 1, like_id: data.id }
            : review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, likes_count: review.likes_count - 1, like_id: null }
            : review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Review}>
      <Card.Body>
        <Media className={`align-items-center justify-content-between ${styles.SmHeader}`}>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className={`d-flex align-items-center ${styles.SmHeader}`}>
            <span>{created_at}</span>
            {is_owner && reviewPage && "..."}
          </div>
        </Media>
      </Card.Body>
      {title && <Card.Title className={`text-center ${styles.Header}`}>
          <Link to={`/reviews/${id}`}>{title}</Link> by <Link to={`/profiles/${profile_id}`}>{owner}</Link>
        </Card.Title>}
      <Row>
        <Col>
          <Link to={`/reviews/${id}`}>
            <Card.Img src={book.cover} alt={title} />
          </Link>
        </Col>
        <Col>
          <Card.Body>
            {book && <Card.Text className="text-center">{book.title} by {book.author}</Card.Text>}
            {rating && <Card.Text className="text-center">{rating}</Card.Text>}
            {description && <Card.Text className="text-left">
                <p className={styles.SmHeader}>Description:</p>
                {description}
              </Card.Text>}
          </Card.Body>
        </Col>
      </Row>
      <hr />
      <Card.Body>
        <Row className={styles.ReviewBar}>
          <Col>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own review!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <i className={`fas fa-heart ${styles.Heart}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like reviews!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            )}
            {likes_count}
          </Col>
          <Col>
            <Link to={`/reviews/${id}`}>
              <i className="far fa-comments" />
            </Link>
            {comments_count}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Reviews;