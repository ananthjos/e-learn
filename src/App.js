import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import StepContext from "./Context/step-context";
import Course from "./Components/Course";
import Steps from "./Components/Steps";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Step from "./Components/Step";

import "./App.css";

const App = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios
      .get("/steps.json")
      .then((response) => {
        setSteps(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StepContext.Provider value={steps}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Course />} />
            <Route path='steps' element={<Steps />}>
              <Route path=':stepId' element={<Step />} />
            </Route>
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StepContext.Provider>
  );
};

export default App;
