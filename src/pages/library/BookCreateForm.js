import React, { useState, useRef } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

import styles from "../../styles/BookCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";


function BookCreateForm() {
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        cover: "",
        ISBN: "",
        publisher: "",
        published: "",
        blurb: "",
    });

    const { title, author, cover, ISBN, publisher, published, blurb } = bookData;
    
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const imageInput = useRef(null);

    const handleChange = (event) => {
        setBookData({
          ...bookData,
          [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(cover);
            setBookData({
                ...bookData,
                cover: URL.createObjectURL(event.target.files[0]),
            });
        }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("title", title);
        formData.append("author", author);
        formData.append("cover", imageInput.current.files[0]);
        formData.append("ISBN", ISBN);
        formData.append("publisher", publisher);
        formData.append("published", published);
        formData.append("blurb", blurb);
    
        try {
            const { data } = await axiosReq.post("/library/", formData);
            history.push(`/library/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <h1 className={styles.Header}>Add a Book</h1>
            <Form.Group controlId="title">
                <Form.Label className="d-none">Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Title" name="title" value={title} onChange={handleChange} />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group controlId="author">
                <Form.Label className="d-none">Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" name="author" value={author} onChange={handleChange} />
            </Form.Group>
            {errors?.author?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Row>
                    <Col sm={3} className={`${styles.Label} py-2`}>Cover Image</Col>
                    <Col sm={9}>
                        {cover ? (
                            <>
                                <div className={`${styles.Label} ${styles.ImageDiv}`}>
                                    <figure>
                                        <Image className={`${appStyles.Image} pt-2`} src={cover} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                        className={`${styles.Label}`}
                                        htmlFor="image-upload"
                                        >
                                        Click to change the image
                                        </Form.Label>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Form.Label
                                className={`d-flex justify-content-center py-2 ${styles.Label} ${styles.ImageDiv}`}
                                htmlFor="image-upload"
                                >Click to select image</Form.Label>
                            </>
                        )}
                        <Form.File
                            id="image-upload"
                            accept="image/*"
                            onChange={handleChangeImage}
                            ref={imageInput}
                            />
                    </Col>
                </Row>
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="ISBN">
                <Form.Label className="d-none">ISBN</Form.Label>
                <Form.Control type="text" placeholder="Enter ISBN" name="ISBN" value={ISBN} onChange={handleChange} />
            </Form.Group>
            {errors?.ISBN?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group controlId="publisher">
                <Form.Label className="d-none">Publisher</Form.Label>
                <Form.Control type="text" placeholder="Enter Publisher" name="publisher" value={publisher} onChange={handleChange} />
            </Form.Group>
            {errors?.publisher?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group controlId="published">
                <Row>
                    <Col sm={3}>
                        <Form.Label className={`${styles.Label} ${appStyles.Inline} py-2`}>Date published</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control 
                        className={appStyles.Inline}
                        type="date"
                        placeholder="Date Published"
                        name="published"
                        value={published}
                        onChange={handleChange}
                        />
                    </Col>
                </Row>
            </Form.Group>
            {errors?.published?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="blurb">
                <Form.Label className="d-none">Blurb</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Blurb" name="blurb" value={blurb} onChange={handleChange} />
            </Form.Group>
            {errors?.blurb?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Button className={`${btnStyles.MidBtn} ${btnStyles.Orange}`} type="submit">
            add
            </Button>
            <Button
                className={`${btnStyles.MidBtn} ${btnStyles.OrangeOutline}`}
                onClick={() => history.goBack()}
            >
            cancel
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Container className={appStyles.Content}>{textFields}</Container>
        </Form>
    );
}

export default BookCreateForm;