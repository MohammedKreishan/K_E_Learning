import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
export default function () {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [randomNumber, setrandomNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`)
      .then((res) => {
        setCourses(res.data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  if (!courses) {
    return <div>Loading...</div>;
  }
console.log(courses);
  return (
    <div>
      <div>
        <Container style={{ margin: "5px" }} fluid>
          <Card className="h-100 d-flex flex-column">
            <Card.Header>
              <h2 style={{ margin: 0, fontSize: "24px" }}>
                {course.courseTitle}
              </h2>
            </Card.Header>

            <Card.Body className="d-flex">
              <div style={{ flex: 1 }}>
                <Card.Text>{course.courseDiscription}</Card.Text>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  <strong>Instructor:</strong>{" "}
                  {`${course.courseInstructor.firstName} ${course.courseInstructor.lastName}`}
                </p>
              </div>

              <div style={{ flex: 1, marginLeft: "20px" }}>
                <img
                  src={course.photoURL}
                  alt="Course"
                  style={{ width: "100%" }}
                />
              </div>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-between align-items-center">
              <div>
                <p>Comments: {course.comments}</p>
                <p>Rating: {course.rating}</p>
              </div>

              <Button
                style={{ marginTop: "10px" }}
                variant="primary"
                onClick={() => {
                  console.log("Enroll button clicked");
                }}
              >
                Enroll Course
              </Button>
            </Card.Footer>
          </Card>
        </Container>{" "}
      </div>
    </div>
  );
}
