import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import Course from "./Components/Course";
import Steps from "./Components/Steps";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Course />} />
        <Route path='*' element={<Steps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
