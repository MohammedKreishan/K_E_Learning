// import React from 'react'

// export const ContactUs = () => {
//   return (
//     <div>ContactUs</div>
//   )
// }
import React, { useState, useContext } from "react";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

export default function () {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [result, setUserResult] = useState("");
  return (
    <Container>
      <Row>
        {/* Left Column - Contact Information */}
        <Col md={6}>
          <Card>
            <Card.Body style={{ textAlign: "left", fontFamily: "initial" }}>
              <header>
                <h1>Contact Us</h1>
              </header>

              <section>
                <p className="contact-text">
                  Thank you for reaching out to us! We are here to assist you.
                  Please feel free to contact us using the information below or
                  by filling out the contact form.
                </p>

                <h2>Contact Information:</h2>
                <p>
                  Email: <a href="mailto:info@example.com">info@example.com</a>
                </p>
                <p>Phone: (123) 456-7890</p>
                <p>
                  Office Hours: Monday to Friday, 9:00 AM - 5:00 PM (Your Time
                  Zone)
                </p>
              </section>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column - Contact Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <section>
                <h2 style={{ textAlign: "left", fontFamily: "initial" }}>
                  Contact Us:
                </h2>
                <Form>
                  <Row
                    style={{ textAlign: "left", fontFamily: "initial" }}
                    className="mb-3"
                  >
                    <Form.Group as={Col} controlId="formName">
                      <Form.Label>Your Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        required
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>

                  <Row
                    style={{ textAlign: "left", fontFamily: "initial" }}
                    className="mb-3"
                  >
                    <Form.Group as={Col} controlId="formEmail">
                      <Form.Label>Your Email:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>

                  <Row
                    style={{ textAlign: "left", fontFamily: "initial" }}
                    className="mb-3"
                  >
                    <Form.Group as={Col} controlId="formMessage">
                      <Form.Label>Your Message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter your message"
                        required
                        onChange={(e) => {
                          setUserMessage(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                      axios
                        .post("http://localhost:5000/users/customerfeedbake", {
                          email: userEmail,
                          yourName: userName,
                          message: userMessage,
                        })
                        .then((res) => {
                          setUserResult(res.data.message);
                        })
                        .catch((err) => {
                          console.log(err);
                          setUserResult(err.response.data.message);
                        });
                    }}
                  >
                    Send Message
                  </Button>
                  <p style={{ paddingTop: "5px" }}>{result}</p>
                </Form>
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <footer>{/* Add your footer content here */}</footer>
    </Container>
  );
}
