import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { userContext } from "../../App";
export default function () {
  const [courseRate, setCourseRate] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDiscription, setCourseDiscription] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [coursePicture, setCoursePicture] = useState("");
  const { setToggle, role, setRole } = useContext(userContext);

  const [Courses, setCourses] = useState([]);
  console.log(role);


  
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/courses/search_1/${localStorage.getItem(
          "userId"
        )}`
      )
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
      <h1>Your Courses</h1>
      <hr style={{ margin: "10px 0" }} />

      <Container style={{ margin: "5px" }} fluid>
        <Row xs={1} md={3} className="g-4">
          {Courses.map((courses, indx) => (
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
                        axios
                          .get(
                            `http://localhost:5000/courses/search_2/${courses.courseId._id}`,
                            {},
                            {},
                            {
                              headers: {
                                Authorization: `Bearer ${test}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log("res", res.data.course);
                            // setSelectCourse(res.data.course);
                            // redirect(`/users/onecourse/${courses.courseId._id}`);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Viwe Course
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
                      Delet Course
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <h1>Add Course</h1>
      <hr style={{ margin: "10px 0" }} />

      {/* <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" placeholder="Entar Course Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Enter Dicription of Course" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {" "}
        <Form>
          <Row className="mb-4">
            <Form.Group as={Row} controlId="formGridCourseTitle">
              <Form.Label>Course Title</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setCourseTitle(e.target.value);
                }}
                type="text"
                placeholder="Enter Course Title"
              />
            </Form.Group>

            <Form.Group as={Row} controlId="formGridCourseDescription">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Description"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCourseRate">
              <Form.Label>Course Rate</Form.Label>
              <Form.Control type="text" placeholder="Enter Course Rate" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCourseInstructor">
              <Form.Label>Course Instructor</Form.Label>
              <Form.Control type="text" placeholder="Enter Course Instructor" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCourseCategory">
              <Form.Label>Course Category</Form.Label>
              <Form.Control type="text" placeholder="Enter Course Category" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCoursePicture">
              <Form.Label>Course Picture</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Picture URL"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Categories</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            onClick={() => {
              axios
                .post(
                  `http://localhost:5000/courses`,
                  {
                    courseTitle: courseTitle,
                    courseDiscription: courseDiscription,
                    courseRate: courseRate,
                    coursePicture: coursePicture,
                    courseCategory: courseCategory,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
            variant="primary"
            type="submit"
          >
            Create
          </Button>
        </Form>
      </Container>

    </div>
  );
}
