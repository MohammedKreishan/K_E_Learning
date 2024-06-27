import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";
export default function () {
  const [Courses, setCourses] = useState([]);
  const test = localStorage.getItem("token");
  const [SelectCourse, setSelectCourse] = useState("");

  const redirect = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/enrollCourse`, {
        headers: {
          Authorization: `Bearer ${test}`,
        },
      })
      .then((res) => {
        console.log(res.data.courses);
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (localStorage.getItem("Role") === "INSTRUCTOR") {
    console.log(localStorage.getItem("Role"));
    redirect("/users/admin");
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Dashboard
      </h1>{" "}
      <Container style={{ margin: "5px" }} fluid>
        <Row xs={1} md={3} className="g-4">
          {localStorage.getItem("Role") === "INSTRUCTOR" ? (
            redirect("/users/admin")
          ) : (
            <>
              {Courses.length === 0 ? (
                <p
                  className="mx-auto"
                  style={{ fontSize: "4rem", color: "#007BFF" }}
                >
                  No courses found. Enroll in a course to get started!
                </p>
              ) : (
                Courses.map((courses, indx) => (
                  <Col key={indx}>
                    <Card bg="light" className="h-100 d-flex flex-column">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{courses.courseId.courseTitle}</Card.Title>
                        <div style={{ flex: 1, marginLeft: "20px" }}>
                          <Card.Img
                            variant="top"
                            src={courses.courseId.coursePicture}
                            style={{ width: "90%", height: "400px" }}
                          />
                        </div>
                        <Card.Text
                          style={{ textAlign: "left", fontSize: "20px" }}
                        >
                          Instructor: {courses.courseId.courseInstructor.firstName} {courses.courseId.courseInstructor.lastName}
                        </Card.Text>
                        <Card.Text
                          style={{ textAlign: "left", fontSize: "20px" }}
                        >
                          Rate: {courses.courseId.courseRate}
                        </Card.Text>
                        <div className="mt-auto">
                          <Button
                            style={{ margin: "5px" }}
                            className="mb-2"
                            variant="primary"
                            onClick={() => {
                              axios
                                .get(
                                  `http://localhost:5000/courses/search_2/${courses.courseId._id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${test}`,
                                    },
                                  }
                                )
                                .then((res) => {
                                  console.log("res", res.data.course);
                                  setSelectCourse(res.data.course);
                                  redirect(
                                    `/users/onecourse/${courses.courseId._id}`
                                  );
                                })
                                .catch((err) => {
                                  console.log(err);
                                });
                            }}
                          >
                            View Course
                          </Button>
                          <Button
                            style={{ margin: "5px" }}
                            className="mb-2"
                            variant="primary"
                            onClick={() => {
                              console.log(test);
                              axios
                                .delete(
                                  `http://localhost:5000/courses/${courses._id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${test}`,
                                    },
                                  }
                                )
                                .then((res) => {
                                  // get cor
                                  const resultt1=Courses.filter((e,i)=>
                                  {
                                    return e._id!==courses._id
                                  })
                                  console.log("res", res);
                                  setCourses(resultt1)
                                })
                                .catch((err) => {
                                  console.log(err);
                                });
                            }}
                          >
                            Delete Course
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
