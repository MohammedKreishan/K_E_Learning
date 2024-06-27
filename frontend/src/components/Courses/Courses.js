import React, { useState, useContext } from "react";
import axios from "axios";

const AddCourse = () => {
  const [title, setCourseTitle] = useState("");
  const [text, setCourseText] = useState("");
  const [Course, setCourseResult] = useState("");
  return (
    <div style={{ padding: "20px" }}>
      Add Course
      <br />
      <input
        style={{ padding: "20px" }}
        type="text"
        placeholder="Title "
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{ padding: "20px", height: "200px" }}
        type="text"
        placeholder="Course Description"
        onChange={(e) => {
          setCourseText(e.target.value);
        }}
      />
      <br />
      <button
        style={{ padding: "20px" }}
        id="Add-Course"
        onClick={() => {
          const test = localStorage.getItem("token");
          axios
            .post(
              "http://localhost:5000/courses",
              { courseTitle: title, courseDiscription: text },
              {
                headers: {
                  Authorization: `Bearer ${test}`,
                },
              }
            )

            .then((res) => {
              setCourseResult(res.data.message);
              console.log(res.data.message);
              <Dashboard/>
            })
            .catch((err) => {
              console.log(err);
              setCourseResult(err.response.data.message);
            });
        }}
      >
        Add Course
      </button>
      <br />
      <br />
      <p>{Course}</p>
    </div>
  );
};

export default AddCourse;
