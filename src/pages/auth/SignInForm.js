import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css"

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";

const SignInForm = () => {
    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");
  
    const [signInData, setSignInData] = useState({
      username: "",
      password: "",
    });
    const { username, password } = signInData;
  
    const [errors, setErrors] = useState({});
    
    const history = useHistory();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post("/dj-rest-auth/login/", signInData);
        setCurrentUser(data.user);
        setTokenTimestamp(data);
        history.push("/");
      } catch (err) {
        setErrors(err.response?.data);
      }
    };

    const handleChange = (event) => {
        setSignInData({
          ...signInData,
          [event.target.name]: event.target.value,
        });
      };
    
    return (
        <Row className={styles.Row}>
            <Col md={6}
            className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}>
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={
                        "https://res.cloudinary.com/dqzkdlnbr/image/upload/v1678234924/sign-in.jpg"
                    }
                />
            </Col>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Sign In</h1>
                    <Form onSubmit={handleSubmit} className="text-center">
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                className={styles.Input}
                                value={username}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            className={styles.Input}
                            value={password}
                            onChange={handleChange}
                        />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Button className={`${btnStyles.MidBtn} ${btnStyles.Orange}`} type="submit">
                            Sign In
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default SignInForm;