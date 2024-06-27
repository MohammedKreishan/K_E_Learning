import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function () {
  const [CoursesbyCategory, setCoursesbyCategory] = useState([]);
  const test = localStorage.getItem("token");
  const redirect = useNavigate();
  const [SelectCourse, setSelectCourse] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/courses/search_category/659e4b033c87a1e60da20dce/test`
      )
      .then((res) => {
        setCoursesbyCategory(res.data.courses);
        console.log(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!CoursesbyCategory) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            {/* Image Column */}
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705441863/pexels-domas-1260129_bi9nly.jpg"  // replace with your actual image source
              alt="Category Image"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col xs={12} md={8}>
            {/* Description Column */}
            <div>
              <h1
                style={{
                  textAlign: 'left',
                  fontSize: '2.5rem',
                  marginTop: '20px',
                  marginBottom: '20px',
                  
                }}
              >
                Arts and Photography
              </h1>
              <hr style={{ margin: '10px 0' }} />
              <p style={{fontFamily:"initial",fontSize:"20px", textAlign:"left"}}>Dive into a world of creativity with our Arts and Photography courses. From photography and fine arts to graphic design and digital creativity, explore the diverse realms of visual expression. Uncover the nuances of art history, appreciate different forms of visual storytelling, and unleash your artistic potential in a supportive environment. Whether you're passionate about photography or digital arts, our courses are your gateway to self-discovery and artistic excellence. Join us and redefine your creative journey.</p>
              
              <Container style={{ margin: '5px' }} fluid>
                <Row xs={1} md={3} className="g-4">
                  {/* Your existing course cards go here */}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <h1
                style={{
                  textAlign: 'center',
                  fontSize: '2.5rem',
                  marginTop: '20px',
                  marginBottom: '20px',
                  
                }}
              >
                Courses
              </h1>
      <hr style={{ margin: "20px" }} />
      <Container style={{ margin: "5px" }} fluid>
        <Row xs={1} md={3} className="g-4">
          {CoursesbyCategory.map((courses, indx) => (
            <Col key={indx}>
              <Card bg="light" className="h-100 d-flex flex-column">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{courses.courseTitle}</Card.Title>
                  <div style={{ flex: 1, marginLeft: "20px" }}>
                    <Card.Img
                      variant="top"
                      src={courses.coursePicture}
                      style={{ width: "90%", height: "400px" }}
                    />
                  </div>
                  <Card.Text style={{ textAlign: "left", fontSize: "20px" }}>
                    {" "}
                    By{"  "}
                    {courses.courseInstructor.firstName}{" "}
                    {courses.courseInstructor.lastName}
                  </Card.Text>

                  <div className="mt-auto">
                    <Button
                      style={{ margin: "5px" }}
                      className="mb-2"
                      variant="primary"
                      onClick={() => {
                        console.log(test);
                        axios
                          .post(
                            `http://localhost:5000/courses/enrollCourse/${courses._id}`,
                            {},
                            {
                              headers: {
                                Authorization: `Bearer ${test}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log("res", res);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Enroll Course
                    </Button>
                    <Button
                      style={{ margin: "5px" }}
                      className="mb-2"
                      variant="primary"
                      onClick={() => {
                        axios
                          .get(
                            `http://localhost:5000/courses/search_2/${courses._id}`
                          )
                          .then((res) => {
                            console.log("res", res.data.course);
                            setSelectCourse(res.data.course);
                            redirect(
                              `/users/onecourse/${courses._id}`
                            );
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      View Course
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
