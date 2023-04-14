import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/course.css";

const Course = () => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate("/step/1");
  };

  return (
    <div className='course'>
      <h2 className='course-title'>ReactJS Framework Course</h2>
      <button onClick={handleStartCourse}>Start Course</button>
    </div>
  );
};

export default Course;
