import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Course from "./Course";
import { getListOfCorses } from "../services";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await getListOfCorses();
      setCourses(response);
    })();
  }, []);

  return (
    <div>
      <>
        <section className='text-center pb-3'>
          <h5>Welcome</h5>
          <h6>Please select a Course</h6>
        </section>
        <div className='d-flex'>
          {courses &&
            courses.map((course) => {
              return <Course key={course.id} course={course} />;
            })}
        </div>
      </>
      <Outlet />
    </div>
  );
};

export default Courses;
