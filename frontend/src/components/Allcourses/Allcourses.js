import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export default function () {
  const [Courses, setCourses] = useState([]);
  const [courseId, setcourseId] = useState("");
  const [SelectCourse, setSelectCourse] = useState("");

  // const { setToken } = useContext(userContext);
  const test = localStorage.getItem("token");
  const redirect = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`)
      .then((res) => {
        setCourses(res.data.courses);
        console.log(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <hr style={{ margin: "10px 0" }} />

      <Container style={{ margin: "8px" }} fluid>
        <Row xs={1} md={3} className="g-4">
          {Courses.map((courses, indx) => (
            <Col  key={indx}>
              <Card bg="light" className="h-100 d-flex flex-column" >
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{courses.courseTitle}</Card.Title>
                  <hr style={{ margin: "10px 0" }} />

                  <Card.Img className="img-fluid"
                    variant="top"
                    src={courses.coursePicture}
                    style={{ width: "445px", height: "400px" }}
                  />

                  <Card.Text>
                    {" "}
                    {/* <Accordion defaultActiveKey="1">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Course Discription</Accordion.Header>
                        <Accordion.Body>
                          {courses.courseDiscription}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion> */}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "left", fontSize: "20px" }}>
                    {" "}
                    By{"  "}
                    {courses.courseInstructor.firstName}{" "}
                    {courses.courseInstructor.lastName}{" "}
                    {courses.courseRate}

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
                            `http://localhost:5000/courses/search_2/${courses._id}`,
                            {},
                            {},
                            {
                              headers: {
                                Authorization: `Bearer ${test}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log(
                              "res",
                              res.data.course.courseDiscription
                            );
                            setSelectCourse(res.data.course);
                            redirect(`/users/onecourse/${courses._id}`);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Viwe Course
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
