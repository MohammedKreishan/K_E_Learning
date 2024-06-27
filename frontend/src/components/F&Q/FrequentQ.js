import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function () {
  return (
    <>
 <Container className="my-5" style={{textAlign:"left"}}>
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header>What is your e-learning platform all about?</Accordion.Header>
          <Accordion.Body>
            Our e-learning platform is designed to provide a diverse and engaging learning experience. We offer a wide range of courses covering various subjects to meet the needs of learners at different levels.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>What courses do you offer?</Accordion.Header>
          <Accordion.Body>
            We offer a diverse range of courses, including technology, arts, business, and more. Our catalog is continually updated to reflect the latest trends and demands in the job market.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>How do users enroll in a course?</Accordion.Header>
          <Accordion.Body>
            To enroll in a course, simply navigate to the course page, click on the "Enroll" button, and follow the easy steps to complete the enrollment process.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How does the learning process work?</Accordion.Header>
          <Accordion.Body>
            The learning process involves a combination of video lectures, interactive quizzes, assignments, and supplementary materials. Each course is carefully crafted to provide a comprehensive and enjoyable learning experience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Where can users access their enrolled courses?
          </Accordion.Header>
          <Accordion.Body>
            Enrolled courses can be accessed in the My Courses
            section after logging into your account.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How do users track their progress in a course?
          </Accordion.Header>
          <Accordion.Body>
            To track your progress, visit the 
            where you'll find information on completed modules, quizzes, and
            any additional learning materials.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            What support is available for learners?
          </Accordion.Header>
          <Accordion.Body>
            Our dedicated support team is available to assist
            learners. Contact them through  with any
            questions or concerns.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How do users submit assignments or assessments?
          </Accordion.Header>
          <Accordion.Body>
            Assignment submissions and assessments are typically
            done within the course platform. Specific instructions will be
            provided within each course.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>What courses do you offer?</Accordion.Header>
          <Accordion.Body>
            We offer a diverse range of courses, including technology, arts, business, and more. Our catalog is continually updated to reflect the latest trends and demands in the job market.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>How do users enroll in a course?</Accordion.Header>
          <Accordion.Body>
            To enroll in a course, simply navigate to the course page, click on the "Enroll" button, and follow the easy steps to complete the enrollment process.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header>How does the learning process work?</Accordion.Header>
          <Accordion.Body>
            The learning process involves a combination of video lectures, interactive quizzes, assignments, and supplementary materials. Each course is carefully crafted to provide a comprehensive and enjoyable learning experience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header>
            Where can users access their enrolled courses?
          </Accordion.Header>
          <Accordion.Body>
            Enrolled courses can be accessed in the My Courses
            section after logging into your account.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header>
            How do users track their progress in a course?
          </Accordion.Header>
          <Accordion.Body>
            To track your progress, visit the 
            where you'll find information on completed modules, quizzes, and
            any additional learning materials.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13">
          <Accordion.Header>
            What support is available for learners?
          </Accordion.Header>
          <Accordion.Body>
            Our dedicated support team is available to assist
            learners. Contact them through  with any
            questions or concerns.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="14">
          <Accordion.Header>
            How do users submit assignments or assessments?
          </Accordion.Header>
          <Accordion.Body>
            Assignment submissions and assessments are typically
            done within the course platform. Specific instructions will be
            provided within each course.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </>
  );
}
