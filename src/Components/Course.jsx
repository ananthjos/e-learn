import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/course.css";

const Course = () => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate("/steps");
  };

  return (
    <>
      <div className='course'>
        <h2 className='course-title'>ReactJS Framework Course</h2>
        <button onClick={handleStartCourse}>Start Course</button>
      </div>
    </>
  );
};

export default Course;
