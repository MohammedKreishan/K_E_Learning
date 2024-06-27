import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const image1 =
  "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";
const image2 =
  "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";
const image3 =
  "https://res.cloudinary.com/dalwd5c23/image/upload/v1705436743/pexels-anna-nekrashevich-6801872_pjjwg8.jpg";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-section text-center bg-light py-5">
        <Container>
          <h1
            className="display-4 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#293241" }}
          >
            Welcome to Our E-Learning Journey
          </h1>
          <p
            className="lead"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#455a64",padding:"20px",textAlign:"left" }}
          >
            Embark on a transformative experience as we unveil the narrative of
            our unwavering commitment to excellence and innovation in
            e-learning. At E-Learning, we are dedicated to setting new standards
            and crafting profound learning experiences that resonate with our
            vibrant community.
          </p>
          <p
            className="lead"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#455a64" ,padding:"20px",textAlign:"left"}}
          >
            We invite you to join us in shaping a future where collaboration and
            passion seamlessly converge in the dynamic realm of online
            education. Let's embark together on a journey of knowledge, growth,
            and limitless possibilities.
          </p>
        </Container>
      </div>

      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom" style={{textAlign:"left"}}>Discover Our Featured Courses</h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#collection" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>
                  Elevate Your Skills in Digital Marketing
                </Card.Title>
                <Card.Text>
                  Embark on a transformative journey in Marketing and Business
                  with our dynamic courses designed to enhance your digital
                  marketing skills and strategic thinking.
                </Card.Text>
                <a href="#" className="icon-link">
                  Explore Courses
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#people-circle" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Master Personal Finance and Economics</Card.Title>
                <Card.Text>
                  Take control of your financial future with our engaging
                  courses in Personal Finance and Economics, providing essential
                  knowledge for financial independence.
                </Card.Text>
                <a href="#" className="icon-link">
                  Discover Courses
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#toggles2" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>
                  Unleash Your Creativity with Arts and Photography
                </Card.Title>
                <Card.Text>
                  Dive into a world of creativity with our Arts and Photography
                  courses, where every brushstroke, click of the camera, or
                  digital creation becomes a unique masterpiece.
                </Card.Text>
                <a href="#" className="icon-link">
                  Start Learning
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="px-4 py-5" style={{textAlign:"left"}}>
      <h2 className="pb-2 border-bottom">Unleash Your Learning Experience</h2>

        <Row className="row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <Col className="d-flex flex-column align-items-start gap-2">
            <h2
              className="fw-bold text-primary"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}
            >
              Unlocking Limitless Potential
            </h2>
            <p
              className="text-secondary"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1.1rem",
              }}
            >
              Embark on a learning journey with features designed to elevate
              your experience. Our commitment to excellence ensures a seamless
              exploration of knowledge and skills.
            </p>
            <Button href="#" variant="primary" size="lg">
              Start Your Journey
            </Button>
          </Col>

          <Col>
            <Row className="row-cols-1 row-cols-sm-2 g-4">
              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#collection"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Diverse Content
                </h4>
                <p className="text-secondary">
                  Explore a rich collection of courses covering a wide range of
                  subjects. From technology to arts, we have curated content to
                  spark your curiosity.
                </p>
              </Col>

              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#gear-fill"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Interactive Learning
                </h4>
                <p className="text-secondary">
                  Engage in interactive learning experiences that go beyond
                  traditional methods. Our platform provides hands-on activities
                  and real-world applications.
                </p>
              </Col>

              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#speedometer"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Personalized Pace
                </h4>
                <p className="text-secondary">
                  Tailor your learning journey with our personalized pace
                  feature. Whether you prefer a quick sprint or a steady
                  marathon, we cater to your unique learning style.
                </p>
              </Col>

              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#table"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Comprehensive Resources
                </h4>
                <p className="text-secondary">
                  Access a wealth of comprehensive resources, including study
                  materials, quizzes, and discussion forums. Our platform
                  ensures you have everything you need to succeed.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUsPage;
