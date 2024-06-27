import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";

export default function () {
  const [userLastName, setUserFirstName] = useState("");
  const [userFirstName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [result, setUserResult] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="p-4 border rounded">
              <h2 className="mb-4">Register</h2>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">First Nname</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => {
                    setUserFirstName(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Last Name</InputGroup.Text>

                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setUserLastName(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">Age</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  onChange={(e) => {
                    setUserAge(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Country</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  onChange={(e) => {
                    setUserCountry(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
                <Button
                  variant="outline-primary"
                  id="Register_btn"
                  onClick={() => {
                    axios
                      .post("http://localhost:5000/users/register", {
                        firstName: userFirstName,
                        lastName: userLastName,
                        email: userEmail,
                        password: userPassword,
                        age: userAge,
                        country: userCountry,
                        role:"6599315c8d75eb055a60355e"
                      })
                      .then((res) => {
                        console.log(res.data.message);
                        setUserResult(res.data.message);
                      })
                      .catch((err) => setUserResult(err.response.data.message));
                  }}
                >
                  Register
                </Button>
              </InputGroup>
              {""} <p>{result}</p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Add your image or content on the right side */}
            {/* For example: */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png"
              alt="Registration Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
