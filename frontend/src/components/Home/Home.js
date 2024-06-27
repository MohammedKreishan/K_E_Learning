import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Allcourses from "../Allcourses/Allcourses";
import RandomCourse from "../Courses/RandomCourse";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
function Home() {
  const [index, setIndex] = useState(0);
  const [Coursess, setCoursess] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`)
      .then((res) => {
        setCoursess(res.data.courses);
        console.log(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div style={{ padding: "25px", margin: "25px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
              alt="First slide"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                
              }}
            />

            <Carousel.Caption style={{color:"black"}}>
              <h3>Welcome to Our E-Learning Platform</h3>
              <p>Explore a world of knowledge and opportunities.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705520544/pexels-cottonbro-studio-3826678_c9cqau.jpg"
              alt="Second slide"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
              }}
            />

            <Carousel.Caption>
              <h3>Discover Inspiring Learning</h3>
              <p>Embark on a journey of education with our diverse courses.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705192445/2_tjhssu.jpg"
              alt="Third slide"
              style={{
                width: "30%",
                height: "500px",
                objectFit: "cover",
                margin: "auto",
              }}
            />

            <Carousel.Caption>
              <h3>Unlock Your Potential</h3>
              <p>Discover new horizons and expand your skills with us.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      

      {/* <RandomCourse /> */}
      <Allcourses />
      <hr style={{ margin: "10px 0" }} />

      <h1 style={{ padding: "25px", margin: "25px" }}>Categories</h1>
      {/* <hr style={{ margin: "10px 0" }} /> */}

      <Carousel style={{ padding: "25px", margin: "25px" }}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705440548/pexels-lukas-590016_jqvw8m.jpg"
            alt="Photography Course"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Marketing and Business</h3>
            <p>
              Explore the world of digital marketing and effective business
              strategies. Elevate your skills and career. Enroll now!
            </p>
            <Button variant="primary" href="/categories/marketingAndBusiness">
              Enroll Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705441863/pexels-domas-1260129_bi9nly.jpg"
            alt="Digital Marketing Course"
            style={{
              width: "30%",
              height: "500px",
              objectFit: "cover",
              margin: "auto",
            }}
          />
          <Carousel.Caption>
            <h3>Arts and Photography</h3>
            <p>
              Capture moments and express your creativity through photography.
              Join our course and enhance your artistic skills.
            </p>
            <Button variant="primary" href="/categories/artsAndPhotography">
              Enroll Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705440084/pexels-lukas-574069_ce4jpu.jpg"
            alt="Python Basics Course"
            style={{
              width: "30%",
              height: "500px",
              objectFit: "cover",
              margin: "auto",
            }}
          />
          <Carousel.Caption>
            <h3>Programming</h3>
            <p>
              Unlock the world of coding. Enhance your programming skills with
              our comprehensive courses. Enroll now!
            </p>
            <Button variant="primary" href="/enroll/programming">
              Enroll Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1></h1>
      <hr style={{ margin: "10px 0" }} />
    </div>
  );
}

export default Home;
