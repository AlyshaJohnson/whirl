import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import styles from "../../styles/PopularProfiles.module.css"
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className={styles.Header}>Most followed users</p>
          <Row>
            {mobile ? (
              <div className="d-flex justify-content-around">
                {popularProfiles.results.slice(0, 4).map((profile) => (
                  <Col key={profile.id} className={`${styles.Profile}`}>
                    <Link to={`/profiles/${profile.id} my-auto`}>
                      <Avatar src={profile.image} height={45} />
                      <p>{profile.owner}</p>
                    </Link>
                  </Col>
                ))}
              </div>
            ) : (
              popularProfiles.results.map((profile) => (
                <Col key={profile.id} className={`${styles.Profile}`} lg={4}>
                  <Link to={`/profiles/${profile.id}`}>
                    <Avatar src={`${profile.image}`} height={45} />
                    <p>{profile.owner}</p>
                  </Link>
                </Col>
              ))
            )}
          </Row>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;