import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/course.css";

const Course = ({ course }) => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate("/steps");
  };

  return (
    <>
      <div className='card w-300 m-2'>
        <div className='card-body'>
          <h5 className='card-title'>{course.name}</h5>
          <p className='card-text'>{course.description}</p>
          <Link
            to={`/${course.name}/steps/1`}
            className='btn btn-primary btn-custom'
          >
            Start learning
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
