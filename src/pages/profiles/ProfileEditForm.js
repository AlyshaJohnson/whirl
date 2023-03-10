import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import styles from "../../styles/ProfileCreateEditForm.module.css"

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    image: "",
    medium: [],
    quote: "",
  });

  const { name, age, image, medium, quote } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, age, image, medium, quote } = data;
          setProfileData({ name, age, image, medium, quote });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("age", age);
    formData.append("medium", medium);
    formData.append("quote", quote);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group controlId="name">
        <Form.Label className={styles.Label}>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
        />
      </Form.Group>
      <Form.Group controlId="age">
        <Form.Label className={styles.Label}>Age</Form.Label>
        <Form.Control
          type="text"
          value={age}
          onChange={handleChange}
          name="age"
        />
      </Form.Group>
      <Form.Group controlId="medium">
                <Form.Label className={styles.Label}>Reading Medium</Form.Label>
                <Form.Control as="select" multiple placeholder="Reading Medium" name="medium" value={medium} onChange={handleChange}>
                    <option value="Hardback">Hardback</option>
                    <option value="Paperback">Paperback</option>
                    <option value="E-Book">E-Book</option>
                    <option value="Audiobook">Audiobook</option>
                </Form.Control>
            </Form.Group>
      <Form.Group controlId="quote">
        <Form.Label className={styles.Label}>Favourite quote</Form.Label>
        <Form.Control
          type="text"
          value={quote}
          onChange={handleChange}
          name="quote"
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button className={`${btnStyles.SmBtn} ${btnStyles.Orange}`} type="submit">
        save
      </Button>
      <Button
        className={`${btnStyles.SmBtn} ${btnStyles.OrangeOutline}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <>
                  <figure>
                    <Image src={image} fluid />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${styles.Label}`}
                      htmlFor="image-upload"
                    >
                      Click to change the image
                    </Form.Label>
                  </div>
                </>
              )}
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
