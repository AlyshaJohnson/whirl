import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router";

function ReviewCreateForm() {
    const [reviewData, setReviewData] = useState({
        title: "",
        description: "",
        bookStarted: "",
        bookFinished: "",
        rating: "",
        tags: "",
        visibility: "",
    });

    const { title, description, bookStarted, bookFinished, rating, tags, visibility } = reviewData;
    
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setReviewData({
          ...reviewData,
          [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("title", title);
        formData.append("description", description);
        formData.append("bookStarted", bookStarted);
        formData.append("bookFinished", bookFinished);
        formData.append("rating", rating);
        formData.append("tags", tags);
        formData.append("visibility", visibility);
    
        try {
            const { data } = await axiosReq.post("/reviews/", formData);
            history.push(`/reviews/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <h1 className={styles.Header}>Add a Review</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label className="d-none">Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Review Title" name="title" value={title} onChange={handleChange} />
                </Form.Group>
                {errors?.title?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="rating">
                    <Form.Label className="d-none">Rating</Form.Label>
                    <Form.Control type="integer" placeholder="Rating" name="rating" value={rating} onChange={handleChange} />
                </Form.Group>
                {errors?.rating?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="description">
                    <Form.Label className="d-none">Description</Form.Label>
                    <Form.Control type="text" placeholder="Review Description" name="description" value={description} onChange={handleChange} />
                </Form.Group>
                {errors?.description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="bookStarted">
                    <Form.Label className="d-none">Date started</Form.Label>
                    <Form.Control type="date" placeholder="Date Started" name="bookStarted" value={bookStarted} onChange={handleChange} />
                </Form.Group>
                {errors?.bookStarted?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="bookFinished">
                    <Form.Label className="d-none">Date finished</Form.Label>
                    <Form.Control type="date" placeholder="Date Finished" name="bookFinished" value={bookFinished} onChange={handleChange} />
                </Form.Group>
                {errors?.bookFinished?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="tags">
                    <Form.Label className="d-none">Tags</Form.Label>
                    <Form.Control type="text" placeholder="Tags" name="tags" value={tags} onChange={handleChange} />
                </Form.Group>
                {errors?.tags?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="visibility">
                    <Form.Label className="d-none">Rating</Form.Label>
                    <Form.Control type="integer" placeholder="Visibility" name="visibility" value={visibility} onChange={handleChange} />
                </Form.Group>
                {errors?.visibility?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                create
                </Button>
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue}`}
                    onClick={() => {}}
                >
                cancel
                </Button>
            </Form>
        </div>
    );

    return (
        <Form>
            <Col className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
            </Col>
        </Form>
    );
}

export default ReviewCreateForm;